export const DualShock4 = () => {
    return (
        <g className="accDS4">
            <filter id="accDS4Glow">
                <feGaussianBlur in="SourceGraphic" stdDeviation={9} />
            </filter>
            <image href={require('data-url:./DualShock4.png')} />
            <ellipse rx="100" ry="30" filter="url(#accDS4Glow)" />
        </g>
    );
};
