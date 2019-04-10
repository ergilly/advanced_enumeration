class AnagramFinder{

  constructor (word) {
    this.word = word;
  }
//this.word = the anagram
//otherWords = array of words to test against
  findAnagrams(otherWords) {

    let newArray = [];
    let anothervar = otherWords.filter(words => {

      if (this.word == words) {
        return newArray;
      }
      let array = words.toLowerCase().split('');
      let letters = 0;
      let variable = this.word.toLowerCase().split('').filter(letter => {

        if (array.indexOf(letter) != -1) {
          letters++;
        }
        if (letters === this.word.toLowerCase().split('').length && letters === words.length) {
          newArray.push(words);
        };
      });
    });
    return newArray;



  }
}

module.exports = AnagramFinder;
