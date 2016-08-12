var alphabetSoup = function(str) {
  console.log(str.split('').sort().join(''));
}

var vowelCount = function(str) {
  var l = str.match(/[aeiou]/gi);
  console.log(l === null ? 0 : l.length);
}

alphabetSoup('hello');
alphabetSoup('Colorado');

vowelCount('All cows eat grass');
