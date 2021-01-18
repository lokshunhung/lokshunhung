import { BongoCat } from './BongoCat';
import { Charmander } from './Charmander';
import { Pikachu } from './Pikachu';

export const allCharacterTypes = ['BongoCat', 'Charmander', 'Pikachu'] as const;

export const defaultCharacterType = 'Charmander';

export type CharacterType = typeof allCharacterTypes[number];

export type CharacterSet = {
    characterName: string;
    CharacterComponent: React.ComponentType;
};

const NullComponent = () => null;

export const getCharacter = (character: CharacterType): CharacterSet => {
    switch (character) {
        case 'BongoCat':
            return {
                characterName: 'Bongo Cat',
                CharacterComponent: BongoCat,
            };
        case 'Charmander':
            return {
                characterName: 'Charmander',
                CharacterComponent: Charmander,
            };
        case 'Pikachu':
            return {
                characterName: 'Pikachu',
                CharacterComponent: Pikachu,
            };
    }
};
