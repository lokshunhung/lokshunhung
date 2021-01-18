import { SvgStyle } from '~/src/components/svg';

export const HHKB = () => {
    return (
        <>
            <SvgStyle name="HHKB">{require('bundle-text:./HHKB.scss')}</SvgStyle>
            <g className="accHHKB">
                <image href={require('data-url:./HHKB.png')} />
            </g>
        </>
    );
};
