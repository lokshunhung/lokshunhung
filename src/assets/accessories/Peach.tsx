import { SvgStyle } from '~/src/components/Svg';

export const Peach = () => {
    return (
        <>
            <SvgStyle name="Peach">{require('bundle-text:./Peach.scss')}</SvgStyle>
            <g className="accPeach">
                <image href={require('data-url:./Peach.png')} />
            </g>
        </>
    );
};
