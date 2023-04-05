const {Router} = require("express")
const Users = require('../../models/Users')
const Orders = require("../../models/Orders")
const router = Router()


////////////////// Get \\\\\\\\\\\\\\\\\\\\\

router.get("/user/:gmail", async (req,res) => {
   const gmail = req.params.gmail
   
   const user = await Users.findOne({"gmail": gmail})

   res.json(user) 
})

router.get("/orders/:id", async (req,res) => {
   const id = req.params.id

   const orders = await Orders.find({"idUser": id})

   res.json(orders)
})


////////////////// Post \\\\\\\\\\\\\\\\\\\\\


router.post("/newUser", (req,res) => {
   const data = req.body
   console.log(data)
    const newUser = new Users(data)
   newUser.save((err) => err? console.log(err): console.log('Usuario creado con exito') )
   

   res.json(newUser)
})

router.post('/newOrder', (req,res) => {
   const data = req.body
   console.log(data)

   const newOrder = new Orders(data)
   newOrder.save((err) => err? console.log(err): console.log('Pedido creado con exito') )

   res.json("Pedido Creado Correctamente")

})


module.exports = router