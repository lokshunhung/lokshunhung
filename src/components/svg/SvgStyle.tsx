import { useContext, useEffect } from 'react';
import { SvgStyleContext } from './context';

type SvgStyleProps = { name: string; children: string | string[] };

export const SvgStyle = ({ name, children }: SvgStyleProps) => {
    const sc = useContext(SvgStyleContext);
    useEffect(() => {
        const style = Array<string>().concat(children).join('\n\n');
        sc?.addStyle(name, style);
        return () => sc?.removeStyle(name);
    }, [name, children]);
    return null;
};
