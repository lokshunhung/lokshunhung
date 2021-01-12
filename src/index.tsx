import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ReadmeImage } from '~/src/components/ReadmeImage';
import { dimensions } from '~/src/defs/values';

const inlineStyleSheet = `
    body {
        margin: 1em;
        padding: 0;
        background-color: #666;
    }
`;

const DevPreviewApp = () => (
    <>
        <main>
            <ReadmeImage style={dimensions} />
        </main>
        <style>{inlineStyleSheet}</style>
    </>
);

ReactDOM.render(<DevPreviewApp />, document.getElementById('root'));
