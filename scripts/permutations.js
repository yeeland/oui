const fs = require('fs');
const getPermutations = require('react-component-permutations').default;

const src = fs.readFileSync('./src/components/Button/index.js', 'utf8');
const options = {};
console.log(getPermutations);
const permutations = getPermutations(src, options);

console.log(permutations);

/*
Button.propTypes = {
  big: React.PropTypes.bool,
  color: React.PropTypes.oneOf(colorKeys),
  pill: React.PropTypes.bool,
  outline: React.PropTypes.bool
}
*/
