function makeid(length) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    if (i % 6 === 0 && i > 0) result += "-";
    else
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return "Bearer " + result;
}

module.exports = { makeid };
