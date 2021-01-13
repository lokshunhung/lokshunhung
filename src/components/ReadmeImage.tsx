import { AccessoryType, getAccessory } from '~/src/assets/accessories';
import { CatHead, LPawDown, LPawUp, RPawDown, RPawUp } from '~/src/assets/cat';
import { dimensions } from '~/src/defs/values';
import { Svg } from './Svg';

type ReadmeImageProps = { style?: React.CSSProperties; accessoryType?: AccessoryType };

export const ReadmeImage = ({ style, accessoryType = 'Peach' }: ReadmeImageProps) => {
    const { inlineStyles, BeforeComponent, AfterComponent } = getAccessory(accessoryType);

    const inlineStyleSheet = [
        inlineStyles,
        require('bundle-text:~/src/assets/cat/index.scss'),
        require('bundle-text:./ReadmeImage.scss'),
        require('bundle-text:./ReadmeImage.paws.scss'),
    ].join('\n\n');

    return (
        <Svg viewBoxWidth={dimensions.width} viewBoxHeight={dimensions.height} style={style}>
            <style>{inlineStyleSheet}</style>

            <rect id="background" />
            <line id="table" x1={0} y1={475} x2={1000} y2={710} />

            <BeforeComponent />

            <CatHead id="head" />
            <LPawUp id="lPawUp" />
            <LPawDown id="lPawDown" />
            <RPawUp id="rPawUp" />
            <RPawDown id="rPawDown" />

            <AfterComponent />

            <g id="signature">
                <path d="M16 0 c -8.995 0 -16.288 7.293 -16.288 16.29 c 0 7.197 4.667 13.302 11.14 15.457 c 0.815 0.149 1.112 -0.354 1.112 -0.786 c 0 -0.386 -0.014 -1.411 -0.022 -2.77 c -4.531 0.984 -5.487 -2.184 -5.487 -2.184 c -0.741 -1.881 -1.809 -2.382 -1.809 -2.382 c -1.479 -1.011 0.112 -0.991 0.112 -0.991 c 1.635 0.116 2.495 1.679 2.495 1.679 c 1.453 2.489 3.813 1.77 4.741 1.354 c 0.148 -1.053 0.568 -1.771 1.034 -2.178 c -3.617 -0.411 -7.42 -1.809 -7.42 -8.051 c 0 -1.778 0.635 -3.232 1.677 -4.371 c -0.168 -0.412 -0.727 -2.068 0.159 -4.311 c 0 0 1.368 -0.438 4.48 1.67 c 1.299 -0.361 2.693 -0.542 4.078 -0.548 c 1.383 0.006 2.777 0.187 4.078 0.548 c 3.11 -2.108 4.475 -1.67 4.475 -1.67 c 0.889 2.243 0.33 3.899 0.162 4.311 c 1.044 1.139 1.675 2.593 1.675 4.371 c 0 6.258 -3.809 7.635 -7.438 8.038 c 0.585 0.503 1.106 1.497 1.106 3.017 c 0 2.177 -0.02 3.934 -0.02 4.468 c 0 0.436 0.293 0.943 1.12 0.784 c 6.468 -2.159 11.131 -8.26 11.131 -15.455 c -0 -8.997 -7.294 -16.29 -16.291 -16.29" />
                <text x={40} y={20}>
                    lokshunhung
                </text>
            </g>
        </Svg>
    );
};
