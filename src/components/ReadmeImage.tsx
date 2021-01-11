import { CatHead, LHandDown, LHandUp, RHandDown, RHandUp } from '~/src/assets/cat';
import { dimensions } from '~/src/defs/values';
import { Svg } from './Svg';

type ReadmeImageProps = { style?: React.CSSProperties };

export const ReadmeImage = ({ style }: ReadmeImageProps) => {
    return (
        <Svg viewBoxWidth={dimensions.width} viewBoxHeight={dimensions.height} style={style}>
            <style>{require('bundle-text:./ReadmeImage.scss')}</style>
            <rect id="bg" />
            <CatHead id="head" />
            <LHandUp id="l-hand-up" />
            <LHandDown id="l-hand-down" />
            <RHandUp id="r-hand-up" />
            <RHandDown id="r-hand-down" />
        </Svg>
    );
};
