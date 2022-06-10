const express = require("express");
const router = express.Router();
const Type = require("../model/Type"); // import file model ở trên vào

router.get("/", (req, res) => {
  res.send("Day la trang type");
});
router.get("/all", (req, res) => {
  Type.find({})
    .then((data) => res.json(data))
    .catch((err) => res.status(500).json({ error: "Error when get Type" }));
});

router.post("/add", async (req, res) => {
  console.log(req.body);
  const data = {
    _id: req.body.id,
    name: req.body.name,
  };
  const newType = new Type(data);
  newType
    .save()
    .then((data) => res.json(data))
    .catch((err) =>
      res.status(500).json({ error: "Error when add Type: " + err })
    );
});

router.patch("/update/:id", async (req, res) => {
  const data = {
    name: req.body.name,
  };
  Type.findByIdAndUpdate(req.params.id, data, { new: true })
    .then((data) => res.json(data))
    .catch((err) =>
      res.status(500).json({ error: "Error when patch Type" + err })
    );
});

router.delete("/delete/:id", async (req, res) => {
  Type.deleteOne({ _id: req.params.id })
    .then((data) => res.json(data))
    .catch((err) =>
      res.status(500).json({ error: "Error when patch Type " + err })
    );
});

module.exports = router;
