export type Character = 'BongoCat';

export type CharacterSet = {
    characterStyles: string;
    CharacterComponent: React.ComponentType;
};

const createStyles = (styles: string) => [require('bundle-text:./common.scss'), styles].join('\n');

const NullComponent = () => null;

export const getCharacter = (character: Character): CharacterSet => {
    switch (character) {
        case 'BongoCat':
            return {
                characterStyles: createStyles(require('bundle-text:./BongoCat.scss')),
                CharacterComponent: NullComponent,
            };
    }
};
