const  {Router} =require('express')
const route=Router()
const  controller=require('../controllers/calculosController')

route.all('/', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', "GET");
    next()
});


route.get('/fibonacci',controller.getFibonacci)
route.get('/factorial',controller.getFactorial)

module.exports=route
