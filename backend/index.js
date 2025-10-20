const express = require('express')
const app = express()
const cors = require('cors')
const port = 3006
app.use(cors())
app.use(express.json())

app.get("/products",(req,res)=>{
    const products = [
        {id:1, name:"Product A", price:100},
        {id:2, name:"Product B", price:150},
        {id:3, name:"Product C", price:200},
    ]
    res.json(products)
})


app.listen(port,()=>{
    console.log(`Server running on http://localhost:${port}`);
    })  