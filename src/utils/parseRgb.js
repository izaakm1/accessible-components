function parseRgb(rgbString) {
  return rgbString.replace(/[^\d,]/g, '').split(',')
}

export default parseRgb
