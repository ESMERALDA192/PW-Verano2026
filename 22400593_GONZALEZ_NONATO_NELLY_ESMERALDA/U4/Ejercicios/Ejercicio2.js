/* EJERCICIO 1 */
/* PROGRAMA QUE GENERE DOS NUMEROS ALEATORIOS Y QUE
ESCRIBA EN LA CONSOLA QE NUMEROS SE GERAN.
 ADEMAS, EL PROGRAMA DEBERA SEÑALAR SI LOS NUMEROS SON IGUALES
  Y EN CASO DE QUE NO LO SEAN 
  MOSTRARA CUAL ES EL MAYOR */
  
  function ejercicio1(){
  let numero1 = Math.floor(Math.random()*100+1);
  let numero2 = Math.floor(Math.random()*100+1);

  console.log("NUMERO 1:",numero1);
  console.log("NUMERO 2:", numero2);

  if(numero1 === numero2){
    console.log("los numero son iguales");

  }else if (numero1 > numero2){
    console.log("El mayor es el numero 1:",numero1);

  }else{
   console.log("El mayor es el numero 2:",numero2);
  }
}

//ejercicio1();

/* EJERCICIO 2 */
/* Escribe un programa que genere de forma continua
 numeros entre 0 y 5
 hasta que salga el numero 0 */

 function ejercicio2(){
  let numero;
  do{
    numero = Math.floor(Math.random()*6); // 0 a 5
    console.log(numero);
  }while(numero !== 0);
}

//ejercicio2();

/* EJERCICIO 3 */
/* EJERCICIO 3 */
/* ELABORA UN PROGRAMA QUE GENERE UN NUMERO ALEATORIO ENTRE
EL NUMERO 2 Y EL 10, Y DESPUES ESCRIBA LA TABLA DE MULTIPLICAR
DEL NUMERO GENERADO */

function ejercicio3(){
  let tabla = Math.floor(Math.random()*(10-2+1))+2;

  console.log("Numero generado:", tabla);

  for(let i = 1; i<=10; i++){
    console.log(tabla+"x"+i, " = ", tabla*i);
  }
}

//ejercicio3();
/* EJERCICIO 4 */
/* ESCRIBE UN PROGRAMA QUE SOLICITE 10 NUMEROS ENTRE EL 1 Y EL 100,
Y DETERMINE CUANTOS DE ESOS NUMEROS SON PARES Y CUANTOS IMPARES */

function ejercicio4(){
  let pares = 0;
  let impares = 0;

  for(let i = 1; i<=10; i++){
    let num = parseInt(prompt("Ingresa el numero "+i+" (entre 1 y 100): "));

    if(num % 2 === 0){
      pares++;
    }else{
      impares++;
    }
  }

  console.log("Numeros pares:", pares);
  console.log("Numeros impares:", impares);
}

//ejercicio4();
/* EJERCICIO 5 */
/* UNA TIENDA DEPARTAMENTAL PAGA A SUS EMPLEADOS EL 10% DE COMISION
A QUIENES VENDAN MENOS DE $10,000.00 EN ARTICULOS, MIENTRAS QUE
OTORGA UN 15% A QUIENES VENDAN $10,000.00 O MAS. DISEÑA UN PROGRAMA
QUE SOLICITE UN NUMERO ENTRE $5,000 Y $30,000 (VALIDAR ENTRADA
HASTA QUE SEA NUMERO VALIDO) EN VENTAS PARA UN EMPLEADO, Y MUESTRE
EN PANTALLA CUANTO DINERO VA A RECIBIR POR COMISION */

function ejercicio5(){
  let ventas=parseInt(prompt ("INGRESA LA VENTA REALIZADA:"));
  let comision = 0 ;

  if(ventas >= 10000){
    comision = ventas * 0.15;
  }else{
    comision = ventas * 0.10;
  }

  console.log("Ventas:", ventas);
  console.log("Comision a recibir:", comision);
}

ejercicio5();