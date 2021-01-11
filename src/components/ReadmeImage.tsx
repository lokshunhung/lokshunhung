import { CatHead, LPawDown, LPawUp, RPawDown, RPawUp } from '~/src/assets/cat';
import { dimensions } from '~/src/defs/values';
import { Svg } from './Svg';

type ReadmeImageProps = { style?: React.CSSProperties };

export const ReadmeImage = ({ style }: ReadmeImageProps) => {
    return (
        <Svg viewBoxWidth={dimensions.width} viewBoxHeight={dimensions.height} style={style}>
            <style>{require('bundle-text:./ReadmeImage.scss')}</style>
            <rect id="bg" />
            <line x1={0} y1={475} x2={1000} y2={710} strokeWidth={10} stroke="#000" />
            <CatHead id="head" />
            <LPawUp id="l-paw-up" />
            <LPawDown id="l-paw-down" />
            <RPawUp id="r-paw-up" />
            <RPawDown id="r-paw-down" />
        </Svg>
    );
};
