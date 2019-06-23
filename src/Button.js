import React from 'react'

import parseStyleRules from './utils/parseStyleRules'
import contrast from './utils/contrast'
import parseRgb from './utils/parseRgb'

const Button = (...args) => ({ ...rest }) => {
  const rules = parseStyleRules(args)

  if (rules.color && rules.backgroundColor) {
    const contrastValue = contrast(parseRgb(rules.color), parseRgb(rules.backgroundColor))
    console.log(contrastValue)
  }

  return <button {...rest} />
}

export default Button
