const express = require("express");
const router = express.Router();
const Recipe = require("../model/Recipe"); // import file model ở trên vào
router.get("/", (req, res) => {
  res.send("dday la trang recipe");
});
router.get("/all", (req, res) => {
  Recipe.find({})
    .then((data) => res.json(data))
    .catch((err) => res.status(500).json({ error: "Error when get recipe" }));
});
router.post("/add", async (req, res) => {
  const data = {
    _id: req.body.id,
    name: req.body.name,
    time: req.body.time,
    level: req.body.level,
    number: req.body.number,
    tutorial: req.body.tutorial,
    image: req.body.image,
    ingredients: req.body.ingredients,
    types: req.body.types,
  };
  const newRecipe = new Recipe(data);
  newRecipe
    .save()
    .then((data) => res.json(data))
    .catch((err) =>
      res.status(500).json({ error: "Error when add Recipe: " + err })
    );
});

router.patch("/update/:id", async (req, res) => {
  const data = {
    name: req.body.name,
    time: req.body.time,
    level: req.body.level,
    number: req.body.number,
    tutorial: req.body.tutorial,
    image: req.body.image,
    ingredients: req.body.ingredients,
    types: req.body.types,
  };
  Recipe.findByIdAndUpdate(req.params.id, data, { new: true })
    .then((data) => res.json(data))
    .catch((err) =>
      res.status(500).json({ error: "Error when patch Recipe" + err })
    );
});

router.delete("/delete/:id", async (req, res) => {
  Recipe.deleteOne({ _id: req.params.id })
    .then((data) => res.json(data))
    .catch((err) =>
      res.status(500).json({ error: "Error when delete Recipe " + err })
    );
});

module.exports = router;
