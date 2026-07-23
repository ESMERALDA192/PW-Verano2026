//Actividad 3: Ejercicios

// 1.- Elabora un programa que contenga una funcon llamada  potencia y reciba dos parametros
//base y exponente.La funcion debera retornar la potencia  de acuerdo con  los  parametros
// resibidos.El calculo de la potencia se realizara por medio de un ciclo for.
//SALIDA: BASE elevado a POTENCIA es RESULTADO

function ejercicio1() {
    function potencia(base, exponente) {
        let resultado = 1;
        for (let i = 1; i <= exponente; i++) {
            resultado = resultado * base;
        }
        return resultado;
    }

    const base = 8;
    const exponente = 4;
    console.log(`${base} elevado a ${exponente} es ${potencia(base, exponente)}`);
}
// EJERCICIO 2: Cajero automático.
// Simula un cajero con un saldo inicial de %5000
//Mostrar un menu:
//1 consultar saldo
//2 depositar
//3 retirar
//4 salir
//No permitir retirar mas dinero del disponibñe 
function ejercicio2() {
    let saldo = 5000;
    let opcion;

    do {
        opcion = prompt(
            "CAJERO AUTOMÁTICO\n" +
            "1. Consultar saldo\n" +
            "2. Depositar\n" +
            "3. Retirar\n" +
            "4. Salir"
        );

        switch (opcion) {
            case "1":
                alert("Tu saldo es: $" + saldo);
                break;

            case "2": {
                const deposito = Number(prompt("¿Cuánto vas a depositar?"));
                if (deposito > 0) {
                    saldo += deposito;
                    alert("Depósito exitoso. Saldo: $" + saldo);
                } else {
                    alert("Cantidad no válida");
                }
                break;
            }

            case "3": {
                const retiro = Number(prompt("¿Cuánto vas a retirar?"));
                if (retiro <= 0) {
                    alert("Cantidad no válida");
                } else if (retiro > saldo) {
                    alert("Fondos insuficientes. Tu saldo es: $" + saldo);
                } else {
                    saldo -= retiro;
                    alert("Retiro exitoso. Saldo: $" + saldo);
                }
                break;
            }

            case "4":
                alert("Gracias por usar el cajero");
                break;

            default:
                alert("Opción no válida");
        }
    } while (opcion !== "4");
}

//  EJERCICIO 3: Juego de dados 
//Genera dos dados hasta que ambos  tengan el mismo valor.
// Salida: 
// 3-5
// 1-6
// 2-4
// 6-6
//se necesitaron 4 lanzamientos:
function ejercicio3() {
    let dado1, dado2;
    let lanzamientos = 0;

    do {
        dado1 = Math.floor(Math.random() * 6 + 1);
        dado2 = Math.floor(Math.random() * 6 + 1);
        lanzamientos++;
        console.log(`${dado1} - ${dado2}`);
    } while (dado1 !== dado2);

    console.log(`Se necesitaron ${lanzamientos} lanzamientos.`);
}

// EJERCICIO 4: Adivinar número.
// La computadora genera un numero entre 1 y 100.El usuario tiene maximo 7  intentos.Despues
// de cada intento indicar Mas grande Mas pequeño.
function ejercicio4() {
    const secreto = Math.floor(Math.random() * 100 + 1);
    const maxIntentos = 7;
    let adivinado = false;

    for (let intento = 1; intento <= maxIntentos; intento++) {
        const numero = Number(prompt(`Adivina el número (1-100)\nIntento ${intento} de ${maxIntentos}`));

        if (numero === secreto) {
            alert(`¡Correcto! El número era ${secreto}. Lo lograste en ${intento} intentos.`);
            adivinado = true;
            break;
        } else if (numero < secreto) {
            alert("Más grande");
        } else {
            alert("Más pequeño");
        }
    }

    if (!adivinado) {
        alert(`Se acabaron los intentos. El número era ${secreto}.`);
    }
}

// EJERCICIO 5: Registro de ventas 
// crear un programa que simule el registro de venta de una tienda.
function ejercicio5() {
    const ventas = [];
    let continuar = true;

    while (continuar) {
        const vendedor = prompt("Nombre del vendedor:");
        const producto = prompt("Nombre del producto:");
        const cantidad = Number(prompt("Cantidad vendida:"));
        const precio = Number(prompt("Precio unitario:"));

        ventas.push({ vendedor, producto, cantidad, precio });

        continuar = confirm("¿Registrar otra venta?");
    }

    // Total de ventas realizadas
    console.log(`Total de ventas realizadas: ${ventas.length}`);

    // Total de ingresos
    const ingresos = ventas.reduce((suma, v) => suma + v.cantidad * v.precio, 0);
    console.log(`Total de ingresos: $${ingresos.toFixed(2)}`);

    // Unidades vendidas por producto
    const porProducto = {};
    ventas.forEach(v => {
        porProducto[v.producto] = (porProducto[v.producto] || 0) + v.cantidad;
    });

    console.log("Unidades vendidas por producto:");
    for (const producto in porProducto) {
        console.log(`- ${producto}: ${porProducto[producto]} unidades`);
    }

    // Vendedor con más ventas
    const porVendedor = {};
    ventas.forEach(v => {
        porVendedor[v.vendedor] = (porVendedor[v.vendedor] || 0) + v.cantidad * v.precio;
    });

    let mejorVendedor = "";
    let mayorMonto = 0;
    for (const vendedor in porVendedor) {
        if (porVendedor[vendedor] > mayorMonto) {
            mayorMonto = porVendedor[vendedor];
            mejorVendedor = vendedor;
        }
    }

    console.log(`Vendedor con más ventas: ${mejorVendedor} ($${mayorMonto})`);
}

// ===================== LLAMADAS =====================
//ejercicio1();
 //ejercicio2();
 //ejercicio3();
 //ejercicio4();
 ejercicio5();