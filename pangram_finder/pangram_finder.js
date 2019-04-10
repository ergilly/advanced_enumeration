class PangramFinder {
  constructor(phrase) {
    this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
    this.phrase = phrase;
  }

  isPangram() {
    return this.alphabet.every(letter => {
      return this.phrase.toLowerCase().includes(letter);
    })
  }
}

module.exports = PangramFinder;


//   const array = [];
//   let found = this.phrase.split('');
//   let test = this.alphabet.filter(function(letter) {
//     for (var i = 0; i < found.length; i++) {
//       if (found[i] == letter) {
//         array.push(letter);
//       }
//     }
//
//
//   })
//
//   console.log(array.length);
//   if (array.length >= 26) {
//     return true;
//   }
//   return false;
// }
