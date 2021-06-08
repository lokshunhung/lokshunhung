import { Charmander } from "./Charmander";
import { Pikachu } from "./Pikachu";

export const allCharacterTypes = ["BongoCat", "Charmander", "Pikachu"] as const;

export const defaultCharacterType = "Charmander";

export type CharacterType = typeof allCharacterTypes[number];

export type CharacterSet = {
    characterName: string;
    characterStyles: string;
    CharacterComponent: React.ComponentType;
};

const createStyles = (styles: string) => [require("bundle-text:./common.scss"), styles].join("\n");

const NullComponent = () => null;

export const getCharacter = (character: CharacterType): CharacterSet => {
    switch (character) {
        case "BongoCat":
            return {
                characterName: "Bongo Cat",
                characterStyles: createStyles(require("bundle-text:./BongoCat.scss")),
                CharacterComponent: NullComponent,
            };
        case "Charmander":
            return {
                characterName: "Charmander",
                characterStyles: createStyles(require("bundle-text:./Charmander.scss")),
                CharacterComponent: Charmander,
            };
        case "Pikachu":
            return {
                characterName: "Pikachu",
                characterStyles: createStyles(require("bundle-text:./Pikachu.scss")),
                CharacterComponent: Pikachu,
            };
    }
};
