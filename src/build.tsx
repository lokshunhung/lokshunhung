import { writeFileSync } from "fs";
import { join } from "path";
import * as prettier from "prettier";
import { renderToStaticMarkup } from "react-dom/server";
import { allAccessoryTypes } from "~/src/assets/accessories";
import { allCharacterTypes } from "~/src/assets/cat";
import { ReadmeImage } from "~/src/components/ReadmeImage";

async function main() {
    console.time("Generated");

    const imageOutputFilepath = join(__dirname, "../ReadmeImage.svg");
    const readmeOutputFilepath = join(__dirname, "../README.md");

    const accessoryIndex = Math.floor(Math.random() * allAccessoryTypes.length);
    const accessoryType = allAccessoryTypes[accessoryIndex]!;

    const characterIndex = Math.floor(Math.random() * allCharacterTypes.length);
    const characterType = allCharacterTypes[characterIndex]!;

    const markup = renderToStaticMarkup(<ReadmeImage accessoryType={accessoryType} characterType={characterType} />);

    const contents = await prettier.format(markup, {
        printWidth: 300,
        tabWidth: 2,
        filepath: "_.html",
    });

    writeFileSync(imageOutputFilepath, contents, { encoding: "utf8" });

    const now = Intl.DateTimeFormat("en-HK", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        hour12: false,
        minute: "2-digit",
        second: "2-digit",
        timeZoneName: "short",
    }).format(new Date());

    writeFileSync(
        readmeOutputFilepath,
        `<!-- built at ${now} -->
<p align="center">
  <img width="500" height="500" src="./ReadmeImage.svg">
</p>
`,
        { encoding: "utf8" },
    );

    console.info(`Generated characterType:${characterType} accessoryType:${accessoryType}`);
    console.timeEnd("Generated");
}

main();
