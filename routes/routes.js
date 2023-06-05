const router = require("express").Router()
const { portuguese, spanish} = require("../words")

const english = undefined
router.get("/words/english", async (req, res) => {
    try {
        res.send(english.id);
    }
    catch(err) {
        res.send("tonto");
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