import luminanace from './luminanace'

function contrast(rgb1, rgb2) {
  return (luminanace(rgb1[0], rgb1[1], rgb1[2]) + 0.05) /
  (luminanace(rgb2[0], rgb2[1], rgb2[2]) + 0.05)
}

export default contrast
