/* eslint-disable func-names */
function Hangman(word) {
  this.errors = 6;
  this.rightWord = '_'.repeat(word.length);
  this.wrongLetters = [];

  this.guess = function (letter) {
    if (this.errors > 1) {
      if (word.indexOf(letter) === -1) {
        this.errors -= 1;
        this.wrongLetters.push(letter);
        console.log(`wrong letter, errors left ${this.errors} | ${this.wrongLetters}`);

        return this;
      }
      const answer = this.rightWord.split('');
      for (let i = 0; i <= word.length; i += 1) {
        if (word[i] === letter) {
          answer[i] = letter;
        }
      }
      this.rightWord = answer.join('');

      if (this.rightWord === word) {
        console.log(`${this.rightWord} | You won!`);

        return this;
      }
    } else {
      console.log('Game over :(');
      return 'Game over :( ';
    }

    return this;
  };

  this.getGuessedString = function () {
    return this.rightWord;
  };

  this.getErrorsLeft = function () {
    return this.errors;
  };

  this.getWrongSymbols = function () {
    return this.wrongLetters;
  };

  this.getStatus = function () {
    return `${this.rightWord} | errors left ${this.errors}`;
  };

  this.startAgain = function () {
    this.errors = 6;
    this.rightWord = '_'.repeat(word.length);
    this.wrongLetters = [];
  };
}

const hangman = new Hangman('webpurple');

module.exports = hangman;
