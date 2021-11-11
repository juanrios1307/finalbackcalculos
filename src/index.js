const express=require('express')
const app=express()
const bodyparser=require('body-parser')
const morgan= require('morgan')
const cors= require('cors')

app.set('Port',5000)

app.use(morgan('dev'))
app.use(bodyparser.urlencoded({extend:true}))
app.use(bodyparser.json())
app.use(cors({origin:true}))


//Declaracion de rutas para manejo de api
app.use('/api/',require('./routes/calculosRoute'))

//start server
app.listen(process.env.PORT || 5000,()=>{
    console.log('Listen in the port ',process.env.PORT || 5000)
})

module.exports = app
