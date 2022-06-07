const express = require("express"); 
const router = express.Router()
const Recipe = require('../model/Recipe') // import file model ở trên vào
router.get('/', (req, res)=>{
    res.send("dday la trang recipe")
})
router.get("/all", (req, res) => {    
    Recipe.find({})
            .then(data => res.json(data))
            .catch(err => res.status(500).json({error: 'Error when get recipe'}))
});
module.exports = router
