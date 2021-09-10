const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req, res) => {
    res.send(`
    <h4>Hola somos Stefany herrera Racines y María Alejandra Tafur Campillo</h4>
    <h1>Bienvenidos A Nuestro Proyecto</h1>
    <hr>
   
    <h2> Esta Es Una Creacion  De API Basica Utilizando Express.</h2>
    `);
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})