/*
* The password for the Bitcoin brainwallet can be found in the
* "The Adventures of Sherlock Holmes" which you can retrieve from Gutenberg.org.
* It will consist of a continuous string of alphabetical characters pulled from
* the books text.
*
* The password will be 20-46 characters, so it should match /[a-zA-Z]{20,46}/
*
* An example:
*
*    "No sign of it?"
*
*    "Absolutely none."
*
*    Holmes laughed. "It is quite a pretty little problem," said he.
*
* Would be turned into this:
*
*    "NosignofitAbsolutelynoneHolmeslaughedItisquiteaprettylittleproblemsaidhe"
*
* and the password could be 'bsolutelynoneHolmeslaughedItisquitea'
*
* You can test your strings against the method willItSpend:
*
*     willItSpend('bsolutelynoneHolmeslaughedItisq') === false
*
* While a correct guess will return the brainwallets password
*
*     willItSpend('bsolutelynoneHolmeslaughedItisquitea') === "[brainwallet password]"
*
* Then go to Brainwallet.org and transfer the Bitcoin to your account
*
* Good luck!
*/

var crypto = require('crypto'),
    solutionSha = "e9227d485a0732bf2b329c61e1eae86656e2e7a6a0e2d6ffa808c91090fe2347",
    hmacKey = "YahooWalletChallenge",
    challengeWallet = '1Khe9pCs34qRZX5jRffzC1Hxy33tnfi3T8';

module.exports = {
  name: "Sherlock password challenge",
  solutionSha: solutionSha,
  wallet: challengeWallet,
  willItSpend: function (str) {
    var hash = crypto.createHash('sha256').update(str).digest('hex');
    // Hardening the brainwallet password into a SHA1 HMAC hash.
    if (hash === solutionSha) {
      return crypto.createHmac('sha1', hmacKey).update(str).digest('hex');
    }
    return false;
  },
  isSolved: false
}
