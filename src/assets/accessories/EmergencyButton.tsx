import { SvgStyle } from '~/src/components/Svg';

export const EmergencyButton = () => {
    return (
        <>
            <SvgStyle name="EmergencyButton">{require('bundle-text:./EmergencyButton.scss')}</SvgStyle>
            <g className="accEmBtn">
                <image href={require('data-url:./EmergencyButton.png')} />
            </g>
        </>
    );
};

export const EmergencyButtonText = () => {
    return (
        <g className="accEmBtn">
            <image href={require('data-url:./EmergencyButtonText.png')} />
        </g>
    );
};
