const fs = require('fs');
const getPermutations = require('react-component-permutations').default;
const glob = require('glob');
var json = {};

// the slow way...
var components = glob.sync('./src/components/**(!)/index.js');
components.forEach(function(file) {
  var contents = fs.readFileSync(file);
  var perms = getPermutations(contents);
  json[file] = perms;
});
fs.writeFile('./docs/permutations.json', JSON.stringify(json));

/*
// the fast way
var options = {};
glob('./src/components/**(!tests)/index.js', options, function(er, files) {
  files.forEach(function(filename) {
    fs.readFile(filename, function(err, content) {
      if (err) { throw err; }
      var perm = getPermutations(content, options);
      json[filename] = perm;
    });
  });
});
console.log(json); // is empty
*/
