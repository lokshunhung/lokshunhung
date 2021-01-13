import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AccessoryType, allAccessoryTypes, defaultAccessoryType } from '~/src/assets/accessories';
import { ReadmeImage } from '~/src/components/ReadmeImage';
import { dimensions } from '~/src/defs/values';

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

type ControlProps = { accessoryType: AccessoryType; setAccessoryType: (type: AccessoryType) => void };

const Control = ({ accessoryType, setAccessoryType }: ControlProps) => {
    return (
        <ul>
            {allAccessoryTypes.map((type) => (
                <li key={type}>
                    <label>
                        <input type="radio" checked={type === accessoryType} onChange={() => setAccessoryType(type)} />
                        {type}
                    </label>
                </li>
            ))}
        </ul>
    );
};

const DevPreviewApp = () => {
    const [accessoryType, setAccessoryType] = React.useState<AccessoryType>(defaultAccessoryType);
    return (
        <>
            <main>
                <ReadmeImage style={dimensions} accessoryType={accessoryType} />
            </main>
            <aside>
                <Control {...{ accessoryType, setAccessoryType }} />
            </aside>
            <style>{inlineStyleSheet}</style>
        </>
    );
};

ReactDOM.render(<DevPreviewApp />, document.getElementById('root'));
