import { SvgStyle } from '~/src/components/svg';

export const Bongo = () => {
    return (
        <>
            <SvgStyle name="Bongo">{require('bundle-text:./Bongo.scss')}</SvgStyle>
            <g className="accBongo">
                <image href={require('data-url:./Bongo.png')} />
            </g>
        </>
    );
};
