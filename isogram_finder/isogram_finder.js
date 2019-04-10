class IsogramFinder {
  constructor(word) {
    //array
    this.word = word.toLowerCase().split('');
  }

  isIsogram() {
    let array = [];

    let variable = this.word.filter(letter => {

      if (array.indexOf(letter) == (-1)) {
        array.push(letter);
      }
    })

    console.log(array.length);
    console.log(this.word.length);
    if (array.length === this.word.length) {
      return true;
    } else {
      return false;
    }
  }
}






module.exports = IsogramFinder;
