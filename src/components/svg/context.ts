import { createContext, useCallback, useMemo, useState } from 'react';

type SvgStyleContextType = {
    addStyle: (id: string, style: string) => void;
    removeStyle: (id: string) => void;
};

export const SvgStyleContext = createContext<SvgStyleContextType | null>(null);

export const useSvgStyle = () => {
    const [styleMap, setStyleMap] = useState<Record<string, string>>({});
    const addStyle = useCallback((id: string, style: string) => setStyleMap((prev) => ({ ...prev, [id]: style })), []);
    const removeStyle = useCallback((id: string) => setStyleMap(({ [id]: _, ...prev }) => prev), []);
    const styleContextValue = useMemo(() => ({ addStyle, removeStyle }), [addStyle, removeStyle]);
    const allStyles = useMemo(() => Object.values(styleMap).join('\n\n'), [styleMap]);
    return { allStyles, styleContextValue };
};
