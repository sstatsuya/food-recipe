const mongoose = require("mongoose");
const connect = async () => {
  mongoose
    .connect(
      // `mongodb+srv://foodrecipe:foodrecipe@cluster0.rpxyi.mongodb.net/FoodRecipe`
      `mongodb://localhost:27017/foodrecipe`
    )
    .then(() => {
      console.log("Ket noi database thanh cong");
    })
    .catch((error) => {
      console.log("Ket noi database that bai " + error);
    });
};

module.exports = {connect}
