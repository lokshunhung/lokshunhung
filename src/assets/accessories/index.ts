import { Bongo } from './Bongo';
import { EmergencyButton, EmergencyButtonText } from './EmergencyButton';
import { Taiko } from './Taiko';

export type AccessoryType = 'Bongo' | 'EmergencyButton' | 'Taiko';

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
        case 'Taiko':
            return {
                inlineStyles: require('bundle-text:./Taiko.scss'),
                BeforeComponent: Taiko,
                AfterComponent: NullComponent,
            };
    }
};
