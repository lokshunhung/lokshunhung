type SvgProps = {
    viewBoxWidth: number;
    viewBoxHeight: number;
    children: React.ReactNode;
    style?: React.CSSProperties;
};

export const Svg = ({ viewBoxWidth, viewBoxHeight, children, style }: SvgProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`} style={style}>
        {children}
    </svg>
);
