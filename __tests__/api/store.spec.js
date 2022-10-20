const supertest = require("supertest");
const assert = require("chai").assert;

const request = supertest("https://petstore.swagger.io/v2");

describe("PetStore Swagger - Store Order", () => {
   
    // Funções ou Métodos
    // Adicionar Pedido na Loja
    it("POST Store Order", () => {
        const jsonFile = require("../../vendors/storeOrder.json");
        return request
        .post("/store/order")
        .send(jsonFile)
        .then((resposta) =>{
            assert.equal(resposta.statusCode, 200);
            assert.equal(resposta.body.id, 1);
            assert.equal(resposta.body.petId, 991732181);
        });
    })

    it("GET Store Order",() => {
        const orderId = 1;
        const petId = 991732181;
        return request              // chamada para a requisição
            .get("/store/order/" + orderId)   // consulta pelo id do pet
            .then((resposta) => {
                assert.equal(resposta.statusCode, 200); // comunicação ok
                assert.equal(resposta.body.petId, petId);  // valida o id do pet
                assert.equal(resposta.body.status, "placed");  // nome do pet
            });
    })
})