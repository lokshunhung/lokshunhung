import { Bongo } from './Bongo';
import { EmergencyButton, EmergencyButtonText } from './EmergencyButton';

export type AccessoryType = 'Bongo' | 'EmergencyButton';

export type AccessorySet = {
    inlineStyles: string;
    BeforeComponent: React.ComponentType;
    AfterComponent: React.ComponentType;
};

const NullComponent = () => null;

export const getAccessory = (type: AccessoryType): AccessorySet => {
    switch (type) {
        case 'Bongo':
            return {
                inlineStyles: require('bundle-text:./Bongo.scss'),
                BeforeComponent: Bongo,
                AfterComponent: NullComponent,
            };
        case 'EmergencyButton':
            return {
                inlineStyles: require('bundle-text:./EmergencyButton.scss'),
                BeforeComponent: EmergencyButtonText,
                AfterComponent: EmergencyButton,
            };
    }
};
