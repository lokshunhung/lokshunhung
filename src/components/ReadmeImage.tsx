import type { AccessoryType } from '~/src/assets/accessories';
import { getAccessory } from '~/src/assets/accessories';
import type { CharacterType } from '~/src/assets/cat';
import { CatFace, CatHead, getCharacter, LPawDown, LPawUp, RPawDown, RPawUp } from '~/src/assets/cat';
import { dimensions } from '~/src/defs/values';
import { Svg } from './Svg';

type ReadmeImageProps = {
    style?: React.CSSProperties;
    accessoryType: AccessoryType;
    characterType: CharacterType;
};

export const ReadmeImage = ({ style, accessoryType, characterType }: ReadmeImageProps) => {
    const { accessoryStyles, description, BeforeComponent, AfterComponent } = getAccessory(accessoryType);
    const { characterName, characterStyles, CharacterComponent } = getCharacter(characterType);

    const inlineStyleSheet = [accessoryStyles, characterStyles, require('bundle-text:./ReadmeImage.scss')].join('\n\n');

    return (
        <Svg viewBoxWidth={dimensions.width} viewBoxHeight={dimensions.height} style={style}>
            <style>{inlineStyleSheet}</style>

            <rect id="background" />

            <CharacterComponent />

            <line id="table" x1={0} y1={475} x2={1000} y2={710} />

            <BeforeComponent />

            <CatHead />
            <CatFace />

            <LPawUp />
            <LPawDown />
            <RPawUp />
            <RPawDown />

            <AfterComponent />

            <text id="description" x={500} y={100}>
                {characterName} is {description}.
            </text>

            <g id="signature">
                <path d="m16 0c-8.995 0-16.288 7.293-16.288 16.29c0 7.197 4.667 13.302 11.14 15.457c.815.149 1.112-.354 1.112-.786c0-.386-.014-1.411-.022-2.77c-4.531.984-5.487-2.184-5.487-2.184c-.741-1.881-1.809-2.382-1.809-2.382c-1.479-1.011.112-.991.112-.991c1.635.116 2.495 1.679 2.495 1.679c1.453 2.489 3.813 1.77 4.741 1.354c.148-1.053.568-1.771 1.034-2.178c-3.617-.411-7.42-1.809-7.42-8.051c0-1.778.635-3.232 1.677-4.371c-.168-.412-.727-2.068.159-4.311c0 0 1.368-.438 4.48 1.67c1.299-.361 2.693-.542 4.078-.548c1.383.006 2.777.187 4.078.548c3.11-2.108 4.475-1.67 4.475-1.67c.889 2.243.33 3.899.162 4.311c1.044 1.139 1.675 2.593 1.675 4.371c0 6.258-3.809 7.635-7.438 8.038c.585.503 1.106 1.497 1.106 3.017c0 2.177-.02 3.934-.02 4.468c0 .436.293.943 1.12.784c6.468-2.159 11.131-8.26 11.131-15.455c0-8.997-7.294-16.29-16.291-16.29" />
                <text x={40} y={20}>
                    lokshunhung
                </text>
            </g>
        </Svg>
    );
};
