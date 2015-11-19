String.prototype.toJadenCase = function () {
  return this.replace(/(^|\s)(\w)/g, function(match, grup1, grup2) {
  	return grup1+(grup2).toUpperCase();
  });
};

console.log('caio cesar de lima furlan'.toJadenCase());