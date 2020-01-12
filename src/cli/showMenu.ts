import { options } from './cubeConfig';
const optionText = [...options.entries()]
  .map(([key, { description }]) => `        ${key}, ${description}`)
  .join('\r\n');

export function showMenu() {
  console.log(`
    kasa-party
        Run a light pattern or just change the color of your Blync light.
        Use a built-in pattern, color name, or hex code!

    Usage
        kasa-party [option]
        kasa-party [hex code]
        kasa-party [color name]

    Examples
        kasa-party party
        kasa-party cyan
        kasa-party #FF0000
        kasa-party 00FF00

    Options
${optionText}
    `);
}
