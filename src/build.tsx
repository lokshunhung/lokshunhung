import { writeFileSync } from 'fs';
import { join } from 'path';
import * as prettier from 'prettier';
import { renderToStaticMarkup } from 'react-dom/server';
import { allAccessoryTypes } from '~/src/assets/accessories';
import { ReadmeImage } from '~/src/components/ReadmeImage';

const outputFilepath = join(__dirname, '../ReadmeImage.svg');

const accessoryIndex = Math.floor(Math.random() * allAccessoryTypes.length);
const accessoryType = allAccessoryTypes[accessoryIndex]!;

const markup = renderToStaticMarkup(<ReadmeImage accessoryType={accessoryType} />);

const contents = prettier.format(markup, {
    printWidth: 300,
    tabWidth: 2,
    filepath: '_.html',
});

writeFileSync(outputFilepath, contents, { encoding: 'utf8' });
