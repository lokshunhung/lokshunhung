import { Bongo } from './Bongo';
import { DualShock4 } from './DualShock4';
import { EmergencyButton, EmergencyButtonText } from './EmergencyButton';
import { HHKB } from './HHKB';
import { Peach } from './Peach';
import { Taiko } from './Taiko';

export type AccessoryType = 'Bongo' | 'DualShock4' | 'EmergencyButton' | 'HHKB' | 'Peach' | 'Taiko';

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
        case 'DualShock4':
            return {
                inlineStyles: require('bundle-text:./DualShock4.scss'),
                BeforeComponent: DualShock4,
                AfterComponent: NullComponent,
            };
        case 'EmergencyButton':
            return {
                inlineStyles: require('bundle-text:./EmergencyButton.scss'),
                BeforeComponent: EmergencyButtonText,
                AfterComponent: EmergencyButton,
            };
        case 'HHKB':
            return {
                inlineStyles: require('bundle-text:./HHKB.scss'),
                BeforeComponent: HHKB,
                AfterComponent: NullComponent,
            };
        case 'Peach':
            return {
                inlineStyles: require('bundle-text:./Peach.scss'),
                BeforeComponent: Peach,
                AfterComponent: NullComponent,
            };
        case 'Taiko':
            return {
                inlineStyles: require('bundle-text:./Taiko.scss'),
                BeforeComponent: Taiko,
                AfterComponent: NullComponent,
            };
    }
};
