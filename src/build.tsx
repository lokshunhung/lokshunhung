import { writeFileSync } from 'fs';
import { join } from 'path';
import { renderToStaticMarkup } from 'react-dom/server';
import { ReadmeImage } from '~/src/components/ReadmeImage';
import * as SVGO from 'svgo';

const outputFilepath = join(__dirname, '../ReadmeImage.svg');

const contents = renderToStaticMarkup(<ReadmeImage />);

const svgo = new SVGO();

svgo.optimize(contents, { path: outputFilepath })
    .then((result) => result.data)
    .then((data) => {
        writeFileSync(outputFilepath, data, { encoding: 'utf8' });
    });
