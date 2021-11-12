const  {Router} =require('express')
const route=Router()
const  controller=require('../controllers/medidasController')

route.all('/', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', "GET");
    next()
});

route.get('/triangulo',controller.getAreaPerimetroTriangulo)
route.get('/circulo',controller.getAreaPerimetroCirculo)
route.get('/rectangulo',controller.getAreaPerimetroRectangulo)

module.exports=route
