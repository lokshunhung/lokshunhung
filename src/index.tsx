import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ReadmeImage } from '~/src/components/ReadmeImage';
import { dimensions } from '~/src/defs/values';

const styles = `
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
        <style>{styles}</style>
    </>
);

ReactDOM.render(<DevPreviewApp />, document.getElementById('root'));
