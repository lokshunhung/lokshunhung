import { CatHead, LHandDown, RHandDown } from '~/src/assets/cat';
import { dimensions } from '~/src/defs/values';
import { Svg } from './Svg';

type ReadmeImageProps = { style?: React.CSSProperties };

export const ReadmeImage = ({ style }: ReadmeImageProps) => {
    return (
        <Svg viewBoxWidth={dimensions.width} viewBoxHeight={dimensions.height} style={style}>
            <style>{require('bundle-text:./ReadmeImage.scss')}</style>

            <rect id="bg" />

            <CatHead />
            <LHandDown />
            <RHandDown />
        </Svg>
    );
};
