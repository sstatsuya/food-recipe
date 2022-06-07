const mongoose = require("mongoose");
const connect = async () => {
  mongoose
    .connect(
      `mongodb+srv://foodrecipe:foodrecipe@cluster0.rpxyi.mongodb.net/FoodRecipe`
    )
    .then(() => {
      console.log("Ket noi database thanh cong");
    })
    .catch((error) => {
      console.log("Ket noi database that bai " + error);
    });
};

module.exports = {connect}
