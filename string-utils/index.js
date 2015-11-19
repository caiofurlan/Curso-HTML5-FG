/*String.prototype.toJadenCase = function () {
  return this.replace(/(^|\s)(\w)/g, function(match, grup1, grup2) {
  	return grup1+(grup2).toUpperCase();
  });
};*/

function uppercase(string) {
	if (typeof string === 'string') {
		return string.toUpperCase();
	} else if (string === undefined) {
		throw new Error('arguments string is requeired');
	} else if (Array.isArray(string)) {
		throw new Error('arguments need be a string');
	}
}

function lowercase(string) {
	if (typeof string === 'string') {
		return string.toLowerCase();
	} else if (string === undefined) {
		throw new Error('arguments string is requeired');
	} else if (Array.isArray(string)) {
		throw new Error('arguments need be a string');
	}
}

module.exports = {
	uppercase: uppercase,
	lowercase: lowercase
};