const Controller={}

Controller.getAreaPerimetroTriangulo = (req,res) =>{

    var base=req.headers['base']
    var altura=req.headers['altura']

    var lado1=req.headers['lado1']
    var lado2=req.headers['lado2']
    if(base != undefined && base>0 && altura != undefined && altura>0 &&
        lado1 != undefined && lado1>0 && lado2 != undefined && lado2>0  ){

        var data={
            area:base*altura/2,
            perimetro:parseFloat(lado1)+parseFloat(lado2)+parseFloat(base)
        }

        res.status(200).json({status:"ok", data})
    }else{
        res.status(400).json({status:"error", data:"Imposible de calcular"})
    }
}

Controller.getAreaPerimetroCirculo = (req,res) =>{
    var radio=req.headers['radio']

    if(radio != undefined && radio>0 ){

        var data={
            area:Math.PI*Math.pow(radio,2),
            perimetro:2*radio*Math.PI
        }

        res.status(200).json({status:"ok", data})
    }else{
        res.status(400).json({status:"error", data:"Imposible de calcular"})
    }
}

Controller.getAreaPerimetroRectangulo = (req,res) =>{
    var lado1=req.headers['lado1']
    var lado2=req.headers['lado2']

    if(lado1 != undefined && lado1>0 && lado2 != undefined && lado2>0  ){

        var data={
            area:lado1*lado2,
            perimetro:lado1*2+lado2*2
        }

        res.status(200).json({status:"ok", data})
    }else{
        res.status(400).json({status:"error", data:"Imposible de calcular"})
    }
}

module.exports=Controller
