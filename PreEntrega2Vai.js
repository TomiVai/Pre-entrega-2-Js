//Carrito de compras de hardware, la idea es armar varios listados, no uno solo, cosa de poder recorrer varios 

// Que necesito hacer:
// Primero crear los productos(nombre, precio, stock, costo de envio)
// Segundo guardar los productos en una lista
// Poder acceder a esa lista de productos
// A partir del acceso a los productos, poder buscar y filtrarlos
// Si el producto no existe, avisar que no esta
// Si existe pero no esta en la lista de productos, añadir una opcion de creacion de producto y a su vez añadirlo a su lista correspondiente segun el tipo de producto que sea
// Las consultas y la creacion de productos va por prompt, las listas de los productos van a ir por consola.


// Creo la constructora de placas de video

const PlacaDeVideo = function(marca,nombre, precio, vram,stock, CostoDeEnvio){
    this.marca = marca
    this.nombre = nombre
    this.precio = precio
    this.vram = vram
    this.stock = stock
    this.CostoDeEnvio = CostoDeEnvio
}

// Creo las placas disponibles

let placa = new PlacaDeVideo ("AMD","RX 6600", 250000, "8gb ddr6", 3, 15000)
let placa1 = new PlacaDeVideo ("AMD","RX 6700 xt", 350000, "12gb ddr6", 6, 11000)
let placa2 = new PlacaDeVideo ("NVIDIA","rtx 3060 ti", 320000, "8gb ddr6", 2, 10000)
let placa3 = new PlacaDeVideo ("NVIDIA","rtx 4060 ti", 400000, "8gb ddr6", 3, 20000)
let placa4 = new PlacaDeVideo ("NVIDIA","rtx 4090", 1500000, "24gb ddr6", 8, "gratis")
let placa5 = new PlacaDeVideo ("AMD","RX 7700xt", 420000, "12gb ddr6", 1, 12000)
let placa6 = new PlacaDeVideo ("AMD","Rx 6800 xt", 500000, "16gb ddr6", 7, 9000)

// Hago el array

let ListaDePlacas = [placa, placa1, placa2, placa3, placa4, placa5, placa6]

// Creo la funcion que busque dentro de la lista de placas y que a su vez me de la opcion de crearlo en caso de que no sea un producto disponible dentro de mi stock

function busquedadeplacas() {
    let producto = prompt("ingresa la placa que quieres buscar").trim().toLocaleLowerCase()
    let busquedaplacas = ListaDePlacas.filter( (x)=> x.marca.toLocaleLowerCase().includes(producto))
    if(busquedaplacas.length >0){
        console.table(busquedaplacas)
    }else{
        alert("el producto " + producto + " ,no se encuentra en nuestro catalogo") 
        let pregunta = confirm("desea agregarlo a nuestro catalogo?")
        if(pregunta == true){
            let marca = prompt("ingresa la marca del producto").toLocaleLowerCase()
            let nombre = prompt("ingresa el nombre del producto").toLocaleLowerCase()
            let precio = parseFloat(prompt("ingresa el precio del producto"))
            let vram = parseInt(prompt("ingresa la vram del producto"))
            let stock = parseInt(prompt("ingresa el stock del producto"))
            let CostoDeEnvio = parseFloat(prompt("ingresa el costo de envio del producto"))
            
            // Una vez creados los parametros del nuevo producto, genero el producto llamando a la constructora
            if(marca == null || marca === "" ||nombre == null || nombre === "" || isNaN(precio) || isNaN(vram) || isNaN(stock) || isNaN(CostoDeEnvio)){
                 alert("porfavor, verifica que todos los datos ingresados sean del tipo correspondiente para poder agregar el producto")
                 return
             }
             let placanueva = new PlacaDeVideo (marca,nombre,precio,vram,stock,CostoDeEnvio)
             ListaDePlacas.push(placanueva)
             console.table(ListaDePlacas)
        }
    }
}

// Creo la constructora de monitores

const Monitores = function(marca, precio, pulgadas,resolucion, stock, CostoDeEnvio){
    this.marca = marca
    this.precio = precio
    this.pulgadas = pulgadas
    this.resolucion = resolucion
    this.stock = stock
    this.CostoDeEnvio = CostoDeEnvio
}

// Creo los monitores disponibles

let monitor = new Monitores ("Lg", 600000, 27, "QHD", 2, 20000)
let monitor1 = new Monitores ("Samsung", 350000, 24, "FHD", 8, 10000)
let monitor2 = new Monitores ("Acer", 400000, 25, "FHD", 1, 12000)
let monitor3 = new Monitores ("Xiaomi", 1000000, 32, "4k", 10, 40000)
let monitor4 = new Monitores ("Lg", 200000, 22, "FHD", 6, 5000)
let monitor5 = new Monitores ("AOC", 700000, 27, "4k", 1, 25000)
let monitor6 = new Monitores ("Viewsonic", 300000, 26, "QHD", 3, 12000)

// Hago el array de monitores

let ListaDeMonitores = [monitor,monitor1,monitor2,monitor3,monitor4,monitor5,monitor6]

// Creo la funcion que busque dentro de la lista de monitores y que a su vez me de la opcion de crearlo en caso de que no sea un producto disponible dentro de mi stock

function busquedademonitores() {
    let producto = prompt("ingresa el monitor que quieres buscar").trim().toLocaleLowerCase()
    let busquedamonitor = ListaDeMonitores.filter( (x)=> x.marca.toLocaleLowerCase().includes(producto))
    if(busquedamonitor.length >0){
        console.table(busquedamonitor)
    }else{
        alert("el producto " + producto + " ,no se encuentra en nuestro catalogo") 
        let pregunta = confirm("desea agregarlo a nuestro catalogo?")
        if (pregunta == true){
            let marca = prompt("ingresa la marca del producto").toLocaleLowerCase()
            let precio = parseFloat(prompt("ingresa el precio del producto"))
            let pulgadas = parseFloat(prompt("ingresa las pulgadas del producto"))
            let resolucion = prompt("ingresa la resolucion del producto")
            let stock = parseInt(prompt("ingresa el stock del producto"))
            let CostoDeEnvio = parseFloat(prompt("ingresa el costo de envio del producto"))

            if(marca == null || marca === "" || isNaN(precio) || isNaN(pulgadas) || isNaN(stock) || isNaN(CostoDeEnvio) || resolucion == null || resolucion === ""){
                alert("porfavor, verifica que todos los datos ingresados sean del tipo correspondiente para poder agregar el producto")
                return
            }
            let nuevomonitor = new Monitores (marca,precio,pulgadas,resolucion,stock,CostoDeEnvio)
            ListaDeMonitores.push(nuevomonitor)
            console.table(ListaDeMonitores)  
        }
    }
}
// A partir de esto le pregunto al usuario que necesita

let busqueda = prompt("Que producto deseas buscar?").toLocaleLowerCase().trim()

if(busqueda === "monitores"){
    busquedademonitores()
}else if(busqueda === "placas de video"){
    busquedadeplacas()
}