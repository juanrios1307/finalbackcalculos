const request = require("supertest");

const app = require("../src/index");

//Test fibonacci
describe("GET api/calculos/fibonacci",()=>{
    it("respuesta correcta",(done)=>{
        var num=5
        request(app)
            .get('/api/calculos/fibonacci')
            .set("Accept", "application/json")
            .set("number", num)
            .expect("Content-Type", /json/)
            .expect({status: "ok", data: [1,1,2,3,5]})
            .expect(200, done);
    })

    it("numero negativo",(done)=>{
        var num=-1
        request(app)
            .get('/api/calculos/fibonacci')
            .set("Accept", "application/json")
            .set("number", num)
            .expect("Content-Type", /json/)
            .expect({status: "error", data: "Imposible de calcular"})
            .expect(400, done);
    })

    it("numero 0",(done)=>{
        var num=0
        request(app)
            .get('/api/calculos/fibonacci')
            .set("Accept", "application/json")
            .set("number", num)
            .expect("Content-Type", /json/)
            .expect({status: "error", data: "Imposible de calcular"})
            .expect(400, done);
    })

    it("no existe numero",(done)=>{
        request(app)
            .get('/api/calculos/fibonacci')
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect({status: "error", data: "Imposible de calcular"})
            .expect(400, done);
    })

    it("dato no numerico",(done)=>{
        var num="hola"
        request(app)
            .get('/api/calculos/fibonacci')
            .set("Accept", "application/json")
            .set("number", num)
            .expect("Content-Type", /json/)
            .expect({status: "error", data: "Imposible de calcular"})
            .expect(400, done);
    })
})
//Test factorial
describe("GET api/calculos/factorial",()=>{
    it("respuesta correcta",(done)=>{
        var num=5
        request(app)
            .get('/api/calculos/factorial')
            .set("Accept", "application/json")
            .set("number", num)
            .expect("Content-Type", /json/)
            .expect({status: "ok", data: 120})
            .expect(200, done);
    })

    it("numero negativo",(done)=>{
        var num=-1
        request(app)
            .get('/api/calculos/factorial')
            .set("Accept", "application/json")
            .set("number", num)
            .expect("Content-Type", /json/)
            .expect({status: "error", data: "Imposible de calcular"})
            .expect(400, done);
    })

    it("numero 0",(done)=>{
        var num=0
        request(app)
            .get('/api/calculos/factorial')
            .set("Accept", "application/json")
            .set("number", num)
            .expect("Content-Type", /json/)
            .expect({status: "error", data: "Imposible de calcular"})
            .expect(400, done);
    })

    it("no existe numero",(done)=>{
        request(app)
            .get('/api/calculos/factorial')
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect({status: "error", data: "Imposible de calcular"})
            .expect(400, done);
    })

    it("dato no numerico",(done)=>{
        var num="hola"
        request(app)
            .get('/api/calculos/factorial')
            .set("Accept", "application/json")
            .set("number", num)
            .expect("Content-Type", /json/)
            .expect({status: "error", data: "Imposible de calcular"})
            .expect(400, done);
    })
})
