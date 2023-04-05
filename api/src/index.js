const express = require("express")
const morgan = require("morgan")
const routes = require("./routes/index")
const mongoose = require('mongoose');
const app = express();

// base de datos

const user = ''
const password = ''
const uri = `mongodb+srv://valderrama20:${password}@cluster0.vrpkma4.mongodb.net/?retryWrites=true&w=majority`

mongoose.connect(uri)
.then(() => console.log('base de datos conectada'))
.catch((e) => console.log(e))


//settins

app.set("json spaces",2)


// middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({extended:false}))
app.use(express.json())

//routes
app.use("/",routes)

// starting the server 
app.listen(3001, () => {
    console.log(`Server on port ${3001}`)
})