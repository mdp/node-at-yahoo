var https = require('https')
var API_BASE = "https://blockchain.info/address/"

function balanceUrl (address) {
  return API_BASE + address + "?format=json&limit=0";
}

function parse (data, cb) {
  var json;
  try {
    json = JSON.parse(data);
  } catch (e) {
    cb(e);
    return false;
  }
  cb(null, json);
}

exports.getWalletInfo = function (addr, cb) {
  var req = https.get(balanceUrl(addr), function (res) {
    var data = ''
    res.on('data', function(d) {
      data = data +  d.toString();
    });
    res.on('end', function() {
      parse(data, cb);
    });
  });
  req.on('error', function (err) {
    cb(err);
  });
}

