


const order = (array) => {

    return  array.sort((a, b) => {
         b.fecha - a.fecha
})

   


}


module.exports = {order}

