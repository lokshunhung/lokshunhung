import { AccessoryType, getAccessory } from '~/src/assets/accessories';
import { CatHead, LPawDown, LPawUp, RPawDown, RPawUp } from '~/src/assets/cat';
import { dimensions } from '~/src/defs/values';
import { Svg } from './Svg';

type ReadmeImageProps = { style?: React.CSSProperties; accessoryType?: AccessoryType };

export const ReadmeImage = ({ style, accessoryType = 'EmergencyButton' }: ReadmeImageProps) => {
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
            <rect id="bg" />
            <line x1={0} y1={475} x2={1000} y2={710} strokeWidth={10} stroke="#000" />

            <BeforeComponent />

            <CatHead id="head" />
            <LPawUp id="l-paw-up" />
            <LPawDown id="l-paw-down" />
            <RPawUp id="r-paw-up" />
            <RPawDown id="r-paw-down" />

            <AfterComponent />

            <text id="sig" x={950} y={950}>
                github.com/lokshunhung
            </text>
        </Svg>
    );
};
