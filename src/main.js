import fs from 'fs/promises'
import { randomUUID } from 'crypto'

class ProductManager {
    constructor(ruta) {
        this.ruta = ruta
        this.productos = []
    }

    async getProduct() {
        const json = await fs.readFile(this.ruta, 'utf-8')
        if (json === '') return console.log('[]')
        else this.productos = JSON.parse(json)
        if (this.productos.length === 0) console.log(this.productos);
        else {
            for (const iterator of this.productos) {
                console.log(iterator);
            }
        }
    }

    async salveProduct() {
        const json = JSON.stringify(this.productos, null, 2)
        await fs.writeFile(this.ruta, json)
    }

    async mostrarAgenda() {
        await this.getProduct()
        console.log(this.productos)
    }

    async addProduct(title, description, price, thumbnail, code2, stock) {
        await this.getProduct()
        if (this.productos.find(({ code }) => code === code2)) return console.log("el producto ya esta cargado");
        else {
            let id2 = randomUUID()
            this.productos.push({id: id2, title: title, description: description, price: price, thumbnail: thumbnail, code: code2, stock: stock})
        }
        await this.salveProduct()
    }
    async getProductsById(id2) {
        await this.getProduct()
        let respuesta = this.productos.find(({ id }) => id === id2);
        (respuesta === undefined) ? console.log("no se encuentra el producto") : console.log(respuesta);
        return respuesta;
    }
    async updateProduct(id2, campo, cambio) {
        await this.getProduct()
        let indice = this.productos.indexOf(({ id }) => id === id2)
        console.log(indice)
        (indice === -1)? console.log("no se encuentra el producto a actualizar"):this.productos[indice].$[campo] = cambio;
        await this.salveProduct()
    }

    async eliminarEvidencia() {
        await fs.rm(this.ruta)
    }
}

const agenda = new ProductManager('./static/archivo.txt')

await agenda.getProduct()
await agenda.addProduct("tablet", "tablet samsung", 100000, "Sin imagen", "a5", 20)
await agenda.addProduct("notebook", "Notebook gamer", 400000, "Sin imagen", "a1", 10)
await agenda.getProduct()
await agenda.getProductsById('f9d28348-a70b-4ad7-89ae-0c2ec36fdcec')
//await agenda.updateProduct('f9d28348-a70b-4ad7-89ae-0c2ec36fdcec', "thumbnail", "con imagen")
