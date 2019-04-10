class UpperCaser{

  constructor (words) {this.words = words;}

  toUpperCase() {
    return this.words.map(words => words.toUpperCase());
  }

}

module.exports = UpperCaser;
