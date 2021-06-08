import * as React from "react";
import * as ReactDOM from "react-dom";
import type { AccessoryType } from "~/src/assets/accessories";
import { allAccessoryTypes, defaultAccessoryType } from "~/src/assets/accessories";
import { ReadmeImage } from "~/src/components/ReadmeImage";
import { dimensions } from "~/src/defs/values";
import type { CharacterType } from "./assets/cat/characters";
import { allCharacterTypes, defaultCharacterType } from "./assets/cat/characters";

const inlineStyleSheet = `
    body {
        margin: 1em;
        padding: 0;
        background-color: #666;
    }
    aside {
        position: fixed;
        top: 1em;
        font-family: 'Courier New', Courier, monospace;
    }
    aside li {
        list-style: none;
    }
    @media (prefers-color-scheme: dark) {
        aside {
            color: #fff;
        }
    }
`;

type ControlProps = {
    accessoryType: AccessoryType;
    setAccessoryType: (type: AccessoryType) => void;
    characterType: CharacterType;
    setCharacterType: (type: CharacterType) => void;
};

const Control = ({ accessoryType, setAccessoryType, characterType, setCharacterType }: ControlProps) => {
    const renderAccessory = (type: AccessoryType) => (
        <li key={type}>
            <label>
                <input type="radio" checked={type === accessoryType} onChange={() => setAccessoryType(type)} />
                {type}
            </label>
        </li>
    );
    const renderCharacter = (type: CharacterType) => (
        <li key={type}>
            <label>
                <input type="radio" checked={type === characterType} onChange={() => setCharacterType(type)} />
                {type}
            </label>
        </li>
    );
    return (
        <>
            <ul>{allAccessoryTypes.map(renderAccessory)}</ul>
            <ul>{allCharacterTypes.map(renderCharacter)}</ul>
        </>
    );
};

const DevPreviewApp = () => {
    const [accessoryType, setAccessoryType] = React.useState<AccessoryType>(defaultAccessoryType);
    const [characterType, setCharacterType] = React.useState<CharacterType>(defaultCharacterType);
    return (
        <>
            <main>
                <ReadmeImage style={dimensions} accessoryType={accessoryType} characterType={characterType} />
            </main>
            <aside>
                <Control {...{ accessoryType, setAccessoryType, characterType, setCharacterType }} />
            </aside>
            <style>{inlineStyleSheet}</style>
        </>
    );
};

ReactDOM.render(<DevPreviewApp />, document.getElementById("root"));
