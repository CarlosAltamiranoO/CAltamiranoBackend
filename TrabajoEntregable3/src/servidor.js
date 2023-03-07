import express from 'express';
import { ProductManager } from './productManager.js';


const pm = new ProductManager('./static/archivo.txt');
const app = express();


const getDatos = () => {
    return new Promise((resolve, reject) => {
        const datos = pm.getProduct();
        resolve(datos)
    })
}

const getDatosId = (code) => {
    return new Promise((resolve, reject) => {
        const datos = pm.getProductsById(code);
        resolve(datos)
    })
}


app.get('/products', (req, res) => {
    let aux = req.query
    if (aux.limit !== undefined) getDatos().then(datos => { res.json(datos.filter((item, index) => index < aux.limit)) });
    else getDatos().then(datos => { res.json(datos) });
    // http://localhost:3000/products?limit=2
});

app.get('/products/:code', (req, res) => {
    let aux = req.params;
    getDatosId(aux.code).then(datos => { res.json(datos) })
    // http://localhost:3000/products/a167
});


const server = app.listen(3000);
