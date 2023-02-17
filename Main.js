
class Product {
    constructor() {
        this.id = 0;
        this.title = "Ingrerse nombre";
        this.description = "ingrese descripicon";
        this.price = 0;
        this.thumbnail = "Sin imagen";
        this.code = "a0";
        this.stock = 0;
    }
}
class ProductManager {
    constructor() {
        this.productos = [];
        this.id = 0;
    }

    getProducts() {

        if (this.productos.length === 0) {
            console.log(this.productos);
        }
        else {
            for (const iterator of this.productos) {
                console.log(iterator);
            }
        }

    }

    addProducts(title, description, price, thumbnail, code2, stock) {
            if(this.productos.find(({code}) => code === code2))return console.log( "el producto ya esta cargado");
        this.id++;
        var producto = new Product();
        producto.id = this.id;
        producto.title = title;
        producto.description = description;
        producto.price = price;
        producto.thumbnail = thumbnail;
        producto.code = code2;
        producto.stock = stock;
        this.productos.push(producto);
    }
    getProductsById(id2) {
        let respuesta = this.productos.find(({id}) => id === id2);
        (respuesta === undefined)? console.log("no se encuentra el producto"): console.log(respuesta);
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











