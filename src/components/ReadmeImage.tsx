import { CatHead, LPawDown, LPawUp, RPawDown, RPawUp } from '~/src/assets/cat';
import { dimensions } from '~/src/defs/values';
import { Svg } from './Svg';

type ReadmeImageProps = { style?: React.CSSProperties };

export const ReadmeImage = ({ style }: ReadmeImageProps) => {
    return (
        <Svg viewBoxWidth={dimensions.width} viewBoxHeight={dimensions.height} style={style}>
            <style>{require('bundle-text:./ReadmeImage.scss')}</style>
            <rect id="bg" />
            <CatHead id="head" />
            <LPawUp id="l-paw-up" />
            <LPawDown id="l-paw-down" />
            <RPawUp id="r-paw-up" />
            <RPawDown id="r-paw-down" />
        </Svg>
    );
};
