const express = require("express")
const morgan = require("morgan")
const routes = require("./routes/index")
const app = express();
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