import { colors } from '~/src/defs/values';

export const Charmander = () => {
    return (
        <g>
            <mask id="outlineMask" mask-type="alpha">
                <path d="m735.275 647.79l-546.345-128.391c3.47-5.37 8.865-11.839 16.47-19.799c3.6-3.8 6.6-7.6 6.6-8.4c0-1.9 26.9-29.7 40.1-41.4c3.5-3.1 7-5.7 7.7-5.8c.139 0 .32.055.535.155c-.628-1.011-.305-2.108 1.065-2.855c.8-.4 4.4-3.5 8.2-6.8c24.8-22.1 60-46.2 83-57.2c8.4-4 34.7-13.3 37.6-13.3c.7 0 2.5-1.7 3.9-3.8c3.6-5.1 31.7-34.5 33.8-35.4c4.7-1.9 9.9.9 16.6 9.1c15.7 19.3 20.7 26 22.6 29.8c2.6 5.4 3.1 5.7 11.9 7.8c10.1 2.4 21.2 6.3 41 14.5c9.1 3.8 25.3 9.8 36 13.5c22.2 7.5 34.8 13.4 57 26.4c8.5 5 20.1 10.9 25.8 13.2l10.3 4.1l11.7-5c6.4-2.8 18.8-7.9 27.5-11.3c13.4-5.3 16.1-6 18.2-5.1c3.9 1.8 4.9 7.5 4.9 28.7c.1 21.8-.6 25.9-7 42.2c-4 10.3-5.1 14.8-7.4 30.3c-.4 3-1.5 7.1-2.5 9.1l-1.7 3.6l5.6 7.4c10.4 13.5 27.3 51.1 34.6 77.1c3.5 12.2 3.8 14.5 3.3 21c-.185 2.185-.562 4.52-1.025 6.59zm-472.455-201.84c.167.085.328.178.482.278l-.084.075c-.133-.12-.266-.238-.398-.353z" />
            </mask>
            <mask id="tableMask" mask-type="alpha">
                <path d="M0 475 1000 710 500 0Z" />
            </mask>

            <rect fill={colors.charm.bg} mask="url(#outlineMask)" width={1000} height={1000} />
            <ellipse fill={colors.charm.belly} mask="url(#tableMask)" cx={400} cy={720} rx={170} ry={180} />
            <path
                className="tailOutline"
                fill={colors.charm.bg}
                strokeWidth={8}
                d="m767 527c-7 27-23 63-51 63l16 55c48 0 58-73 42-118c-1-4-6-4-7 0z"
            />

            <filter id="flameBlur">
                <feGaussianBlur in="SourceGraphic" stdDeviation={3} />
            </filter>
            <g id="fire">
                <path d="m0 0c-34-2-17-52 1-80c3-4 7-4 7 1c0 19 2 27 12 38c13 17 2 43-20 41z" id="flame" />
                <use href="#flame" className="flameOutline" strokeWidth={12} />
                <use href="#flame" fill={colors.charm.flameShade1} filter="url(#flameBlur)" />
                <use href="#flame" fill={colors.charm.flameShade2} filter="url(#flameBlur)" transform="scale(0.9)" />
                <use href="#flame" fill={colors.charm.flameShade3} filter="url(#flameBlur)" transform="scale(0.6)" />
            </g>
        </g>
    );
};
