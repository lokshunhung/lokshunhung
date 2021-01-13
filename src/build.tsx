import { writeFileSync } from 'fs';
import { join } from 'path';
import { renderToStaticMarkup } from 'react-dom/server';
import * as SVGO from 'svgo';
import { allAccessoryTypes } from '~/src/assets/accessories';
import { ReadmeImage } from '~/src/components/ReadmeImage';

const outputFilepath = join(__dirname, '../ReadmeImage.svg');

const accessoryIndex = Math.floor(Math.random() * allAccessoryTypes.length);
const accessoryType = allAccessoryTypes[accessoryIndex]!;

const contents = renderToStaticMarkup(<ReadmeImage accessoryType={accessoryType} />);

const svgo = new SVGO();

svgo.optimize(contents, { path: outputFilepath })
    .then((result) => result.data)
    .then((data) => {
        writeFileSync(outputFilepath, data, { encoding: 'utf8' });
    });
