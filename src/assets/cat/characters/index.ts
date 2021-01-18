import { Pikachu } from './Pikachu';

export const allCharacterTypes = ['BongoCat', 'Pikachu'] as const;

export const defaultCharacterType = 'Pikachu';

export type CharacterType = typeof allCharacterTypes[number];

export type CharacterSet = {
    characterStyles: string;
    CharacterComponent: React.ComponentType;
};

const createStyles = (styles: string) => [require('bundle-text:./common.scss'), styles].join('\n');

const NullComponent = () => null;

export const getCharacter = (character: CharacterType): CharacterSet => {
    switch (character) {
        case 'BongoCat':
            return {
                characterStyles: createStyles(require('bundle-text:./BongoCat.scss')),
                CharacterComponent: NullComponent,
            };
        case 'Pikachu':
            return {
                characterStyles: createStyles(require('bundle-text:./Pikachu.scss')),
                CharacterComponent: Pikachu,
            };
    }
};
