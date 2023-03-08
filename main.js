//* Funciones de orden superior
//Una función de orden superior es una función que puede recibir por parámetro una función o retornar una función

// function estoEsUnaFuncion(){
//     return funcion ()

// }

//Métodos de búsqueda y transformación:
// JS incluye de forma nativa varias funciones de orden superior
//Hay métodos de búsqueda y transformación que nos van a permitir operar sobre Arrays
//Métodos con arrays de objetos

//Creamos un producto:

class Producto {
    constructor (nombre, precio){
        this.nombre = nombre;
        this.precio = precio
    }
}

const fideos = new Producto ("fideos", 100);
const harina = new Producto ("Harina",250);
const gaseosa = new Producto ("Coca", 500);
const pan = new Producto ("pan", 800);

//Ahora vamos a crear un arrays que va a almacenar todos estos productos.

const arrayProductos = [fideos, harina, gaseosa, pan];

console.log(arrayProductos);

//1) for Each: recorre el array y ejecuta una función por cada elemento. Esta es una función de orden superior nativa del lenguaja (es una de las más usadas)

arrayProductos.forEach((producto)=>{
    console.log(producto.precio);
});

//Método de búsqueda: find => busca un elemento del array y retorna el primer elemento que cumple con cierta condición.

const buscado = arrayProductos.find (producto => producto.precio === 500 );
console.log(buscado);

//3) Filter: recibe una función comparadora por parámetro y retorna un nuevo array con los elementos que cumplan con la condición.

const arrayProductosMenoresA500 = arrayProductos.filter(producto => producto.precio < 500);
console.log(arrayProductosMenoresA500);

//4)Some: funciona igual que filter, con la diferencia que nos retorna un booleano (true or false) si encuentra o no el elemento.

const tengoFideos = arrayProductos.some(producto => producto.nombre === "fideos");
console.log(tengoFideos);

//5) Map : me permite crear un nuevo array con todos los elementos del array, pero transformados.

//Ej: crear un array de productos tal cual como el original pero que incluya el IVA.

const arrayProductosConIva = arrayProductos.map ( (producto =>{
    return {
        nombre: producto.nombre,
        precio: (producto.precio*1.21)
    }
}))
console.log(arrayProductosConIva);

//Puedo crear un nuevo array solo tomando una propiedad del original
const arrayNombre = arrayProductos.map(producto => producto.nombre);
console.log(arrayNombre);

//6) Reduce : nos permite obtener un único valor después de iterar sobre un array.
// trabajamos con dos parámetros: un acumulador y el elemento a operar
//acumulador: tenemos que colocar un valor inicial.

let totalPrecio= arrayProductos.reduce((acumulador,elemento)=> acumulador + elemento.precio, 0);
console.log(totalPrecio);

//7) Sort: me permite reordenar un Array segun un criterio que definamos. (Métodos destructivos: va a ir al array original y lo va a cambiar)
// de menor a mayor
const numeros = [99,100,582, 999, 666];
numeros.sort((a,b)=> a - b);
console.log(numeros);
//de mayor a menos
numeros.sort((a,b)=> b - a);
console.log(numeros)

//Ordenar los precios de un array de un objetos:

arrayProductos.sort((a,b) => b.precio - a.precio);
console.log(arrayProductos);

//** Objeto Math **/

//contiene una serie de métodos que me permiten realizar operaciones de tipo matemáticas.
//valor PI
let pi = Math.PI;
console.log(pi);

//redondear 
console.log ((pi).toFixed(4));

// Min - Max

let minimo = Math.min (73,5,1,88,99);
console.log (minimo);

let maximo = Math.max (78,99,85,654);
console.log(maximo);

//Ceil: me devuelve el entero mayor o igual más próximo.
console.log(Math.ceil (1.5));

//Floor: me devuelve el entero más cercano redondeando para abajo.
console.log(Math.floor(1.5));

//Round: redondea al entero más cercano
console.log(Math.round(1.5));

//Random: me genera un número de forma aleatoria entre 0 y 1

console.log(Math.random());

//entre 0 y 10
console.log(Math.random() *10);

//entre 10 y 50
 console.log(Math.random()*50 + 10)

 










