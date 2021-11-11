const  {Router} =require('express')
const route=Router()
const  controller=require('../controllers/calculosController')

route.all('/', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', "GET, POST, PUT, DELETE, OPTIONS");
    next()
});


route.get('/fibonacci',controller.getFibonacci)
route.get('/factorial',controller.getFactorial)
route.get('/triangulo',controller.getAreaPerimetroTriangulo)
route.get('/circulo',controller.getAreaPerimetroCirculo)
route.get('/rectangulo',controller.getAreaPerimetroRectangulo)

module.exports=route
