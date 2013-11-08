var fs = require("fs"),
    sys = require("sys"),
    colors = require("colors"),
    bitcoin = require("./lib/utils/bitcoin"),
    challengeDir = "./lib/challenges";

function checkStatus (path) {
  var challenge = require(path);
  if (challenge.isSolved) {
    sys.puts((challenge.name + " has been solved.").red)
  } else {
    bitcoin.getWalletInfo(challenge.wallet, function (err, info) {
      if (err || !info){
        sys.puts((challenge.name + ": Error checking balance").red +
                 (" (" + path + ")").yellow)
        return false
      }
      var balance = (info.final_balance / Math.pow(10, 8));
      if (balance > 0) {
        sys.puts((challenge.name + " is still in play! Bounty: BTC " + balance).green +
                 (" (" + path + ")").yellow)
      } else {
        sys.puts((challenge.name + " has had it's prize claimed! Bounty: BTC " + balance).red +
                 (" (" + path + ")").yellow)
      }
    });
  }
}

var run = exports.run = function () {
  sys.puts("Checking challenge status...");
  fs.readdir(challengeDir, function (err, files) {
    for (var i=0; files.length > i; i++) {
      checkStatus(challengeDir + '/' + files[i]);
    }
  });
}

run();
