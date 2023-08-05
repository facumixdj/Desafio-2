/* const path = '.src/productos.json' */
import Product from "./src/product.js"
import ProductManager from "./src/ProductsManager.js"

const pManager = new ProductManager();


const producto1 = new Product( "Zapatilla", "jordan 1 Corta", 40, 28000, "11001 EUR", 5, "asd", [] )
const producto2 = new Product("Zapatilla", "Addidas x BudBuuny", 40, 40000, "11004 EUR", 15, "asd", [])
const producto3 = new Product("Zapatilla", "Jordan Clasic Rojo", 41, 32000, "11005 EUR", 35, "asd", [])

/* pManager.addProduct(producto1)
pManager.addProduct(producto2)
pManager.addProduct(producto3) */
pManager.getProductById(1)
pManager.getProductById(10)
pManager.getProductById(2)
/* onsole.log(proaducto2)
console.log(producto3) */




/* // 



console.log("ahora muestro todos los productos")
productManager.getProducts()
console.log("y Busco la zapatilla numero con id 2")
productManager.getProductById(2) */


/* class Product {
    constructor(title, description, size, price, code, stock, thumbnail) {
        this.title = title
        this.description = description
        this.size = size //talle
        this.price = price
        this.code = code
        this.stock = stock
        this.thumbnail = thumbnail
        this.id = Product.incrementarId()
    }
    static incrementarId() {
        if (this.idIncrement) {
            this.idIncrement++
        } else {
            this.idIncrement = 1
        }
        return this.idIncrement
    }
} */