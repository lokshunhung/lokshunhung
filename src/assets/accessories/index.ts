import { Bongo } from './Bongo';
import { DualShock4 } from './DualShock4';
import { EmergencyButton, EmergencyButtonText } from './EmergencyButton';
import { HHKB } from './HHKB';
import { Peach } from './Peach';
import { Taiko } from './Taiko';

export const allAccessoryTypes = ['Bongo', 'DualShock4', 'EmergencyButton', 'HHKB', 'Peach', 'Taiko'] as const;

export const defaultAccessoryType = 'DualShock4';

export type AccessoryType = typeof allAccessoryTypes[number];

export type AccessorySet = {
    inlineStyles: string;
    description: string;
    BeforeComponent: React.ComponentType;
    AfterComponent: React.ComponentType;
};

const NullComponent = () => null;

export const getAccessory = (type: AccessoryType): AccessorySet => {
    switch (type) {
        case 'Bongo':
            return {
                inlineStyles: require('bundle-text:./Bongo.scss'),
                description: 'Bongo Cat is playing bongos.',
                BeforeComponent: Bongo,
                AfterComponent: NullComponent,
            };
        case 'DualShock4':
            return {
                inlineStyles: require('bundle-text:./DualShock4.scss'),
                description: 'Bongo Cat is gaming.',
                BeforeComponent: DualShock4,
                AfterComponent: NullComponent,
            };
        case 'EmergencyButton':
            return {
                inlineStyles: require('bundle-text:./EmergencyButton.scss'),
                description: 'Bongo Cat is playing Among Us.',
                BeforeComponent: EmergencyButtonText,
                AfterComponent: EmergencyButton,
            };
        case 'HHKB':
            return {
                inlineStyles: require('bundle-text:./HHKB.scss'),
                description: 'Bongo Cat is working.',
                BeforeComponent: HHKB,
                AfterComponent: NullComponent,
            };
        case 'Peach':
            return {
                inlineStyles: require('bundle-text:./Peach.scss'),
                description: 'Bongo Cat is bored.',
                BeforeComponent: Peach,
                AfterComponent: NullComponent,
            };
        case 'Taiko':
            return {
                inlineStyles: require('bundle-text:./Taiko.scss'),
                description: 'Bongo Cat is playing Taiko no Tatsujin.',
                BeforeComponent: Taiko,
                AfterComponent: NullComponent,
            };
    }
};
