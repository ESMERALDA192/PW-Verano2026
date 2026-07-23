/*var nombre = "Nelly";
let promedio = 100;
const edad = 22;

if(true){
 var libro = "Libro 1";
 let animal = "perro";
 animal = 5;
 console.log(animal);
}

*/
//console.log(libro);
//console.log(animal);

//let numero = parseInt(prompt("INGRESA UN NÚMERO 1 "));
//let numero2 =Number(prompt("INGRESA UN NÚMERO 2 "));
//console.log(numero);
//console.log(numero2);

//let suma = numero+numero2;
//console.log(suma);


let suma = 10+5;
let resta = 10-5;
let multi = 10*5;
let division = 10/5;
let resi = 10 % 3;

/*console.log("SUMA:",suma);
console.log("RESTA:",resta);
console.log("MULTI",multi);
console.log("DIVISION:",division);
console.log("RESIDUO",resi);

console.log(5<3);
console.log(5>3);
console.log(5<=3);
console.log(5<=4);
console.log( 5 =="5");
console.log(5 ==="5");
console.log(5 !=3);
*/


//CICLOS
/*let calificacion = 85;
if(calificacion >= 90){
    console.log("PASASTE");
}else if(calificacion >=70){
 console.log("PANSASTE");
}else
    console.log("REPROBASTE");

    for( let i = 1; i<=5; i++){
   console.log("interaccion",i);
    }*/


   /* let tabla = 5;
for(let i = 1; i<=10; i++){
    console.log(tabla+"x"+i, " = ", tabla*i);
}

let contador = 1;
while(contador <=5){
    console.log(contador);
    contador++;
}*/


//function saludar(nombre){
   // console.log("hola" + nombre);
//}
//saludar("yahir");

//function aleatorio(){
  //  let n = Math.floor(Math.random()*100);
    //console.log(n);
//}
//aleatorio();

//let numeros = [5,2];
//console.log(numeros);
//numeros.push(20);
//console.log(numeros);
//console.log(numeros[2]);


/*for(let i = 0;i<numeros.length){
*/

 /*let persona = {
    nombre:"erick",
    edad: 20,
    ciudad: "Xalisco"

 }
  persona.nombre = "abdel"
   persona = "ISC"
 console.log(persona);*/

/*
let numeros = [1,2,3,4,5];
numeros.forEach(numero => {
    console.log(numero);
});*/


/*let numeros = [1,2,3,4,5];

let dobles = numeros.map(numero => {
    return numero*2;
});

console.log(dobles);*/

//Operador ternario
const edad = 21;
const mensaje = edad >= 18 ? "MAYOR DE EDAD" : "MENOR DE EDAD";
console.log(mensaje);

//Muestra el tipo de dato
console.log(typeof ("cadena"));

//Muestra infdenido al acceder a una propiedad no existente
const estudiante = {
    nombre: "Nelly"
};
console.log(estudiante.direccion?.calle);


const estudiante = {
    nombre: "Nelly"
};
console.log(estudiante.edad ?? "No hay propiedad edad");

//Operador OR
let nombre = "";
console.log(nombre || "invitado");

//Operador AND
let edad = 21;
edad >= 18 && console.log("Puede entrar");

//Eliminar propiedades de un objeto
let alumno = {
    nombre: "Nelly",
    edad: 22,
    carrera: "ISC"
};
delete alumno.edad;
console.log(alumno);

//Detectar si existe una propiedad en un objeto
let alumno = {
    nombre: "Nelly",
    edad: 22,
    carrera: "ISC"
};
//Eliminar propiedades con delete
delete alumno.edad;
console.log(alumno);
console.log("nombre" in alumno);
console.log("edad" in alumno );

//Operador de propagación (copia un arreglo en otro)
const numeros = [1, 2, 3];
const copia = [...numeros];
console.log(copia);

const a = [1, 2];
const b = [3, 4];
const c = [...a, ...b];
console.log(c);

//Manejo de arreglos
const productos = [
    { nombre: "Laptop", precio: 15000, categoria: "Electrónica" },
    { nombre: "Celular", precio: 2900, categoria: "Telefonía" },
    { nombre: "TV", precio: 6000, categoria: "Electrónica" },
    { nombre: "Moto", precio: 28000, categoria: "Transporte" },
];

//Filtra elementos
const caros = productos.filter(p => p.precio > 10000);
//Devuelve un nuevo arreglo a partir de una propiedad
const nombres = productos.map(p => p.nombre);
console.log(nombres);
const total = productos.reduce((suma, p) => {
    return suma + p.precio;
}, 0);
console.log("Total " + total);
