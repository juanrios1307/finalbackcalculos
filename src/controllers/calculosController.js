const Controller={}

Controller.getFibonacci = async (req, res) => {
    var arr = []
    var n = req.headers['number']
    if (n != undefined && n > 0 && !isNaN(n)) {

        arr=await calcularFibonacci(n)

        res.status(200).json({status: "ok", data: arr})
    } else {
        res.status(400).json({status: "error", data: "Imposible de calcular"})
    }


}

calcularFibonacci=(n)=>{
   return new Promise((resolve,reject)=>{
       var arr=[]
       arr[0]=1

       if(n==1){

       }if(n==2){

           arr[1]=1
       }else{

           arr[1]=1

           for (var i = 2; i < n; i++) {
               arr[i]=arr[i-1]+arr[i-2]

           }
       }

       resolve(arr)
   })
}

Controller.getFactorial = (req,res) =>{

    var n=req.headers['number']
    var fact=n

    if(n!= undefined && n>0 && !isNaN(n) ) {
        for (var i = n - 1; i > 0; i--) {
            fact *= i
        }
        res.status(200).json({status:"ok", data:fact})
    }else{
        res.status(400).json({status:"error", data:"Imposible de calcular"})
    }

}

module.exports=Controller
