import { CatHead, LPawDown, LPawUp, RPawDown, RPawUp } from '~/src/assets/cat';
import { dimensions } from '~/src/defs/values';
import { Svg } from './Svg';

const inlineStyleSheet = [
    require('bundle-text:~/src/assets/cat/index.scss'),
    require('bundle-text:./ReadmeImage.scss'),
    require('bundle-text:./ReadmeImage.paws.scss'),
].join('\n\n');

type ReadmeImageProps = { style?: React.CSSProperties };

export const ReadmeImage = ({ style }: ReadmeImageProps) => {
    return (
        <Svg viewBoxWidth={dimensions.width} viewBoxHeight={dimensions.height} style={style}>
            <style>{inlineStyleSheet}</style>
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
