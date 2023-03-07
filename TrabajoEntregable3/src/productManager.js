import fs from 'fs/promises'

class ProductManager {
    constructor(ruta) {
        this.ruta = ruta
        this.productos = []
    }

    async getProduct() {
        const json = await fs.readFile(this.ruta, 'utf-8')
        if (json === '') return '[]';
        else this.productos = JSON.parse(json);
        return this.productos;
    }

    async salveProduct() {
        const json = JSON.stringify(this.productos, null, 2)
        await fs.writeFile(this.ruta, json)
    }

    async addProduct(title, description, price, thumbnail, code2, stock) {
        await this.getProduct()
        if (this.productos.find(({ code }) => code === code2)) return console.log("el producto ya esta cargado");
        else {
            let id2 = randomUUID()
            this.productos.push({ id: id2, title: title, description: description, price: price, thumbnail: thumbnail, code: code2, stock: stock })
        }
        await this.salveProduct()
    }
    async getProductsById(code2) {
        await this.getProduct()
        let respuesta = this.productos.find((producto) => producto.code === code2);
        (respuesta === undefined) ? respuesta = "no se encuentra el producto" : "";
        return respuesta;
    }
    async updateProduct(id2, campo, cambio) {
        await this.getProduct()
        if (await this.getProductsById(id2) === "no se encuentra el producto") return console.log("no se encuentra el producto");
        this.productos = this.productos.map((producto) => {
            if (producto.id === id2) {
                let aux = producto;
                aux[campo] = cambio;
                return aux;
            } else return producto;
        })
        await this.salveProduct()
    }
    async deleteProduct(id2) {
        await this.getProduct()
        this.productos = this.productos.filter((producto) => producto.id !== id2)
        await this.salveProduct()
    }
}
export {ProductManager};