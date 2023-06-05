const router = require("express").Router()
const { english, portuguese, spanish} = require("../words")

router.get("/words/english", async (req, res) => {
    try {
        res.send(english);
    }
    catch(err) {
        res.send(err);
    }
})

router.get("/words/portuguese", async (req, res) => {
    try {
        res.send(portuguese);
    }
    catch(err) {
        res.send(err);
    }
})

router.get("/words/spanish", async (req, res) => {
    try {
        res.send(spanish);
    }
    catch(err) {
        res.send(err);
    }
})

module.exports = router;
