const {Router} = require("express")
const Users = require('../../models/Users')
const Orders = require("../../models/Orders")
const { order } = require("../controllers/orders")
const router = Router()



////////////////// Get \\\\\\\\\\\\\\\\\\\\\

router.get("/user", async (req,res) => {
   const id = req.params.id

   const users = await Users.find()
   

   res.json(users)
})

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

router.get("/orders", async (req,res) => {

   const orders = await Orders.find()

   const orden = order(orders)
   res.json(orden)
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
   console.log(data.fecha)

   data.fecha = new Date(data.fecha).getTime()


   const newOrder = new Orders(data)
   newOrder.save((err) => err? console.log(err): console.log('Pedido creado con exito') )

   res.json("Pedido Creado Correctamente")

})

 /////////////////////// PUT \\\\\\\\\\\\\\\\\\\\\

 router.put('/editOrder/:id', async (req,res) => {
  const id = req.params.id
  let data = req.body

  console.log(data.fecha)

  data.fecha= new Date(data.fecha).getTime()

 
   const filter = { _id: id}
   const update = { $set: data}
  
    
    Orders.updateOne(filter, update, (err, result) => {
      if (err) {
         console.log(err)
      }
     res.send({modified: true})

    } )

 
 })

 /////////////////////// DELETE \\\\\\\\\\\\\\\\\\\\\

 router.delete("/deleteOrder/:id", async (req,res) => {
    let filter = { _id: req.params.id}

    Orders.deleteOne(filter, (err, result) => {
       if(err) {
         res.send({eliminated: false})
       } else {
         res.send({eliminated: true})

       }
    }) 
 })



module.exports = router