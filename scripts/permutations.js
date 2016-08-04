const fs = require('fs');
const async = require('async');
const getPermutations = require('react-component-permutations').default;

const src = fs.readFileSync('./src/components/Button/index.js', 'utf8');
const options = {};
// console.log(getPermutations);
const permutations = getPermutations(src, options);
// console.log(permutations);

function generatePermutations() {
  let output = '';
  async.eachSeries(
    ['Button', 'css/bootstrap-responsive.css'],
    function(filename, cb) {
      fs.readFile(filename, function(err, content) {
        if (!err) {
          output += content;
        }

        // Calling cb makes it go to the next item.
        cb(err);
      });
    },
    // Final callback after each item has been iterated over.
    function(err) {
      console.log('error!');
    }
  );
  console.log(output);
}

generatePermutations();

/*
Button.propTypes = {
  big: React.PropTypes.bool,
  color: React.PropTypes.oneOf(colorKeys),
  pill: React.PropTypes.bool,
  outline: React.PropTypes.bool
}
*/
