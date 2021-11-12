const request = require("supertest");

const app = require("../src/index");

//Test triangulo
describe("GET api/medidas/triangulo",()=> {
    it("respuesta correcta",(done)=>{
        var base=5
        var altura=6
        var lado1=8
        var lado2=6
        request(app)
            .get('/api/medidas/triangulo')
            .set("Accept", "application/json")
            .set("base", base)
            .set("altura", altura)
            .set("lado1", lado1)
            .set("lado2", lado2)
            .expect("Content-Type", /json/)
            .expect({status:"ok", data:{area:15,perimetro:19}})
            .expect(200, done);
    })

    it("lado1 negativo",(done)=>{
        var base=5
        var altura=6
        var lado1=-5
        var lado2=6
        request(app)
            .get('/api/medidas/triangulo')
            .set("Accept", "application/json")
            .set("base", base)
            .set("altura", altura)
            .set("lado1", lado1)
            .set("lado2", lado2)
            .expect("Content-Type", /json/)
            .expect({status:"error", data:"Imposible de calcular"})
            .expect(400, done);
    })

    it("base no existe",(done)=>{
        var base=5
        var altura=6
        var lado1=5
        var lado2=6
        request(app)
            .get('/api/medidas/triangulo')
            .set("Accept", "application/json")
            .set("altura", altura)
            .set("lado1", lado1)
            .set("lado2", lado2)
            .expect("Content-Type", /json/)
            .expect({status:"error", data:"Imposible de calcular"})
            .expect(400, done);
    })

    it("altura no numerico",(done)=>{
        var base=5
        var altura="prueba"
        var lado1=5
        var lado2=6
        request(app)
            .get('/api/medidas/triangulo')
            .set("Accept", "application/json")
            .set("base", base)
            .set("altura", altura)
            .set("lado1", lado1)
            .set("lado2", lado2)
            .expect("Content-Type", /json/)
            .expect({status:"error", data:"Imposible de calcular"})
            .expect(400, done);
    })

    it("lado2 0",(done)=>{
        var base=5
        var altura=6
        var lado1=5
        var lado2=0
        request(app)
            .get('/api/medidas/triangulo')
            .set("Accept", "application/json")
            .set("base", base)
            .set("altura", altura)
            .set("lado1", lado1)
            .set("lado2", lado2)
            .expect("Content-Type", /json/)
            .expect({status:"error", data:"Imposible de calcular"})
            .expect(400, done);
    })
})
//Test circulo
describe("GET api/medidas/circulo",()=> {
    it("respuesta correcta",(done)=>{
        var radio=1
        request(app)
            .get('/api/medidas/circulo')
            .set("Accept", "application/json")
            .set("radio", radio)
            .expect("Content-Type", /json/)
            .expect({status:"ok", data:{area:Math.PI,perimetro:Math.PI*2}})
            .expect(200, done);
    })

    it("radio negativo",(done)=>{
        var radio=-2
        request(app)
            .get('/api/medidas/circulo')
            .set("Accept", "application/json")
            .set("radio", radio)
            .expect("Content-Type", /json/)
            .expect({status:"error", data:"Imposible de calcular"})
            .expect(400, done);
    })

    it("radio no existe",(done)=>{
        var radio=-2
        request(app)
            .get('/api/medidas/circulo')
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect({status:"error", data:"Imposible de calcular"})
            .expect(400, done);
    })

    it("radio no numerico",(done)=>{
        var radio="pp"
        request(app)
            .get('/api/medidas/circulo')
            .set("Accept", "application/json")
            .set("radio", radio)
            .expect("Content-Type", /json/)
            .expect({status:"error", data:"Imposible de calcular"})
            .expect(400, done);
    })

    it("radio 0",(done)=>{
        var radio=0
        request(app)
            .get('/api/medidas/circulo')
            .set("Accept", "application/json")
            .set("radio", radio)
            .expect("Content-Type", /json/)
            .expect({status:"error", data:"Imposible de calcular"})
            .expect(400, done);
    })
})
//Test rectangulo
describe("GET api/medidas/rectangulo",()=> {
    it("respuesta correcta",(done)=>{
        var lado1=8
        var lado2=6
        request(app)
            .get('/api/medidas/rectangulo')
            .set("Accept", "application/json")
            .set("lado1", lado1)
            .set("lado2", lado2)
            .expect("Content-Type", /json/)
            .expect({status:"ok", data:{area:48,perimetro:28}})
            .expect(200, done);
    })

    it("lado1 negativo",(done)=>{
        var lado1=-5
        var lado2=6
        request(app)
            .get('/api/medidas/rectangulo')
            .set("Accept", "application/json")
            .set("lado1", lado1)
            .set("lado2", lado2)
            .expect("Content-Type", /json/)
            .expect({status:"error", data:"Imposible de calcular"})
            .expect(400, done);
    })

    it("lado2 no existe",(done)=>{
        var lado1=5
        var lado2=0
        request(app)
            .get('/api/medidas/rectangulo')
            .set("Accept", "application/json")
            .set("lado1", lado1)
            .expect("Content-Type", /json/)
            .expect({status:"error", data:"Imposible de calcular"})
            .expect(400, done);
    })

    it("lado1 no numerico",(done)=>{
        var lado1=5
        var lado2=0
        request(app)
            .get('/api/medidas/rectangulo')
            .set("Accept", "application/json")
            .set("lado1", lado1)
            .set("lado2", lado2)
            .expect("Content-Type", /json/)
            .expect({status:"error", data:"Imposible de calcular"})
            .expect(400, done);
    })

    it("lado2 0",(done)=>{
        var lado1=5
        var lado2=0
        request(app)
            .get('/api/medidas/rectangulo')
            .set("Accept", "application/json")
            .set("lado1", lado1)
            .set("lado2", lado2)
            .expect("Content-Type", /json/)
            .expect({status:"error", data:"Imposible de calcular"})
            .expect(400, done);
    })
})
