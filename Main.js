

class ProductManager {
    constructor() {
        this.productos = [];
        this.id = 0;
    }

    getProducts() {

        if (this.productos.length === 0) console.log(this.productos);
        else {
            for (const iterator of this.productos) {
                console.log(iterator);
            }
        }
    }

    addProducts(title, description, price, thumbnail, code2, stock) {
        if (this.productos.find(({ code }) => code === code2)) return console.log("el producto ya esta cargado");
        else {
            this.id++;
            this.productos.push({ id: this.id, title: title, description: description, price: price, thumbnail: thumbnail, code: code2, stock: stock });
        }
    }
    getProductsById(id2) {
        let respuesta = this.productos.find(({ id }) => id === id2);
        (respuesta === undefined) ? console.log("no se encuentra el producto") : console.log(respuesta);
    }
}






let manager = new ProductManager();

manager.getProducts();
manager.addProducts("producto prueba", "Este es un producto prueba", 200, "Sin imagen", "abc123", 25);
manager.getProducts();
manager.addProducts("tablet", "tablet samsung", 100000, "Sin imagen", "a5", 20);
manager.addProducts("notebook", "Notebook gamer", 400000, "Sin imagen", "a1", 10);
manager.addProducts("tablet", "tablet samsung", 100000, "Sin imagen", "a5", 20);
manager.getProducts();
manager.getProductsById(6);
manager.getProductsById(2);











