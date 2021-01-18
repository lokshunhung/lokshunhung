import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

type SvgStyleContextType = {
    addStyle: (id: string, style: string) => void;
    removeStyle: (id: string) => void;
};

const SvgStyleContext = createContext<SvgStyleContextType | null>(null);

type SvgStyleProps = { name: string; children: string | string[] };

export const SvgStyle = ({ name, children }: SvgStyleProps) => {
    const sc = useContext(SvgStyleContext);
    useEffect(() => {
        sc?.addStyle(name, Array<string>().concat(children).join('\n\n'));
        return () => sc?.removeStyle(name);
    }, [name, children]);
    return null;
};

type SvgProps = {
    viewBoxWidth: number;
    viewBoxHeight: number;
    children: React.ReactNode;
    style?: React.CSSProperties;
};

export const Svg = ({ viewBoxWidth, viewBoxHeight, children, style }: SvgProps) => {
    const [styleMap, setStyleMap] = useState<Record<string, string>>({});
    const addStyle = useCallback((id: string, style: string) => setStyleMap((prev) => ({ ...prev, [id]: style })), []);
    const removeStyle = useCallback((id: string) => setStyleMap(({ [id]: _, ...prev }) => prev), []);
    const styleContextValue = useMemo(() => ({ addStyle, removeStyle }), [addStyle, removeStyle]);

    return (
        <SvgStyleContext.Provider value={styleContextValue}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`} style={style}>
                <style>{Object.values(styleMap).join('\n\n')}</style>
                {children}
            </svg>
        </SvgStyleContext.Provider>
    );
};
