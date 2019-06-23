import { oneLineTrim } from 'common-tags'

function parseStyleRules(styles) {
  return oneLineTrim(styles[0])
    .split(';')
    .filter(style => style.split(':')[0] && style.split(':')[1])
    .map(style => [
      style
        .split(':')[0]
        .trim()
        .replace(/-./g, c => c.substr(1).toUpperCase()),
      style.split(':')[1].trim()
    ])
    .reduce((styleObj, style) => ({
      ...styleObj,
      [style[0]]: style[1]
    }), {})
}

export default parseStyleRules
