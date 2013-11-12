#Node At Yahoo

### Did you know that Yahoo is hiring Node.js developers in their SF office?

We're already using Node.js in production across a variety of high traffic sites. The new My Yahoo,
Premier League Fantasy Football, and the recently launched Yahoo Screen, are
all running on Node. In the next 12 months we're on track to easily
become the largest originator of traffic from Node in the world.

We've also built an amazing infrastructure. We run the latest version of
Node, host our own NPM registry, and deploy seemlessly from a Github
pull request all the way to production. In fact, we deploy more than 400
times, and run more than 360,000 tests everyday.

Want to write server side or client side JS for more than 800 million monthly users?

Send me an email - mdp@yahoo-inc.com

## Bitcoin challenges

While you're busy viewing the README of a recruiting pitch disguised as
an npm module, you might as well earn some money. Most of these problems
will be fairly easy in order to encourage Node.js/Javascript beginners to compete.

### Get started

    git clone https://github.com/mdp/node-at-yahoo.git
    cd node-at-yahoo
    npm install
    npm test # To see if the current challenge has been solved

### Solve a challenge

When you attempt to solve a challenge, your proposed solution will be tested
against a SHA256 hash of the actual solution. If they match, your solution will
then be HMAC'd with a key to create the Bitcoin Brainwallet passphrase. You can
then transfer the Bitcoins to your account.

In order to test a solution, require the challenge module, and call 'willItSpend'
with your solution as the argument. Example:

    challenge = require('./lib/challenge1');
    challenge.willItSpend(wrong_str) // Returns false
    challenge.willItSpend(correct_str) // Returns the HMAC based Brainwallet passphrase

### Redeem the Bitcoin Bounty

1. Visit http://brainwallet.org
1. Use the "Generator" method to build the Private Key with the passphrase from the challenge.
1. Copy the Private Key
1. Go to the "Transactions" tab and enter the Private Key into the obvious field.
1. Enter your Bitcoin address as the destination.
1. Click "Send Transaction"

*If you're on an unsecure connection or extra paranoid about losing 20 bucks,
you may want to download Brainwallet's github repo and run it locally.*
