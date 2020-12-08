if (process.env.NODE_ENV !== "production") {
  require('dotenv').config()
}
const express= require('express')
const app= express()
const router= require('./routes')

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(router)



module.exports= app


