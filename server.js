const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

const puerto = process.env.PORT || 3000; // para heroku

app.use(express.static(__dirname + '/public')); //para declarar carpeta estática (middleware)

// express hbs
hbs.registerPartials(__dirname + "/views/parciales");
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Luis ',
        anio: new Date().getFullYear()
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        anio: new Date().getFullYear()
    });
});

app.listen(puerto, () => {
    console.log(`Escuchando por el puerto ${puerto}`);
});