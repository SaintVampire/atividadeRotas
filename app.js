const express = require("express")
const app = express()

app.listen(8081, function(){
    console.log("Servidor Ativo!")
})

app.get("/", function(req, res) {
    console.log("Página Principal")
    res.send("Página Principal")
})

app.get("/Cadastrar", function(req, res) {
    console.log("Página Cadastral")
    res.send("Página Cadastral")
})

app.get("/produtos/:item/:quantidade", function(req, res) {
    console.log("/produtos/:item/:quantidade")
    res.send("Item: " + req.params.item, " Quantidade: " + req.params.quantidade)
})

app.get("/Contato", function() {
    console.log("Página de contato")
    res.send("Página de contato")
})