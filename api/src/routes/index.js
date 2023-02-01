const {Router} = require("express")
const router = Router()

router.get("/", (req,res) => {

   res.json({"jose":true})
})

module.exports = router