const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

const port = 3000;

let peliculas =[{
    id:1,
    titulo:"Interestelar",
    director:"nelly esmeralda",
    año: 2014
},
{
    id:2,
    titulo: "crepusculo",
    director: "Paul herrera",
    año:2010

}]

 let idActual = peliculas.length + 1;
app.get("/",(req,res)=>{
    res.send("Bienvenido a mi primer servidor con express");
});

//obtener todas las peliculas

app.get("/peliculas",(req,res) =>{
    res.json(peliculas);
});

//obtener una pelicula pot ID

app.get("/peliculas/:id",(req,res)=>{
    const id= Number(req.params.id);
    const pelicula = peliculas.find(
        pelicula => pelicula.id === id
    );
    if(!pelicula){
        return res.status(404).json({
            mensaje: "Pelicula no encontrada"
        });

    }
    res.json(pelicula);
});

// registrar una pelicula
app.post("/peliculas",(req,res)=>{
    const {titulo,director,año}= req.body;
    if(!titulo || !director ||!año){
        return res.status(400).json({
            mensaje: "Faltan datos de la pelicula"
        });
    }
    const nuevaPelicula ={
        id: idActual++,
        titulo:titulo,
        director:director,
        año:Number(año)
    };
    peliculas.push(nuevaPelicula);
    res.status(201).json({
        mensaje: "Pelicula registrada correctamente",
        pelicula: nuevaPelicula
    });
});
app.get("/pagina",(req,res)=>{
    res.send(`
        <style>
         h1{color:red;}
        </style>
    <h1>Mi pagina</h1>
    <p>Creada con express</p> 
    `)
})

// actualizar una pelicula
app.put("/peliculas/:id",(req,res)=>{
    const id=Number(req.params.id);
    const{titulo,director,año}= req.body;
    if(!titulo || !director|| año){
        return res.status(400).json({
            mensaje: "Faltan datos de la pelicula"
        });

    }
    const indice = peliculas.findIndex(
        pelicula => pelicula.id === id
    );

    if( indice === -1){
        return res.status(404).json({
            mensaje: "Pelicula no encontrada"
        });

    }
   peliculas[indice]={
    id:id,
    titulo:titulo,
    director:director,
    año:Number(año)
   };
   res.json({
    mensaje:"Pelicula actualizadacorrectamente",
    pelicula:peliculas[indice]
   });
});

// ELIMINAR UNA PELICULA
app.delete("/peliculas/:id",(req,res)=>{
    const id = Number(req.params.id);
    const indice = peliculas.findIndex(
        pelicula => pelicula.id === id
    );
 
if( indice === -1){
        return res.status(404).json({
            mensaje: "Pelicula no encontrada"
        });

    }
    const peliculaEliminada = peliculas[indice];
    peliculas.splice(indice,1);
    res.json({
        mensaje: "Pelicula eliminada correctamente",
        pelicula:peliculaEliminada
    });
    });

app.get("/saludo/:nombre",(req,res)=>{
 const nombre = req.params.nombre;
 res.send("Hola" + nombre);
});
// ejercicio 1: Numero par/impar

app.get("/par/:numero",(req,res)=>{
    const numero=parseInt(req.params.numero);
    if(numero % 2 === 0){
        res.send( numero + " es un numero  par");

    }else{
        res.send( numero + "es un numero impar");
    }
});

//  ejercicio 2: mayor de edad
app.get("/edad/:edad",(req,res)=>{
    const edad =parseInt(req.params.edad);
    if(edad >=18 ){
        res.send( edad + " eres mayor de edad. ");

    }else{
        res.send( edad + " eres menor de edad. ");
    }
});

//  ejercicio 3: calculadora
app.get("/calculadora/:operacion/:a/:b",(req,res) =>{
    const operacion = req.params.operacion;
    const a = parseFloat(req.params.a);
    const b = parseFloat(req.params.b);
    let resultado;
     if(operacion === "suma"){
        resultado= a+b;
     }else if(operacion === "resta"){
        resultado = a-b;
     }else if(operacion === "multiplicacion"){
            resultado = a*b;
     }else if(operacion === "division"){
        resultado = a/b;

     }else{
        return res.send("ERROR: solo usa suma,resta,multiplicacion,division");
     }
     res.send("Resultado: " + resultado);

});

//ejercicio 4: tabla de multiplicar
app.get("/tabla/:numero",(req,res) =>{
const numero=parseInt(req.params.numero);
let tabla = "";
for(let i= 1; i<=10;i++){
    
    tabla = tabla + `"${numero} x ${i} = ${numero * i}" <br>`; 


}
res.send(tabla);
});
// ejercicio 5: calificacion
app.get("/calificacion/:nota",(req,res) =>{
    const nota =parseFloat(req.params.nota);
    let mensaje;
    if(nota < 70){
        mensaje= "Reprobado";

    }else if(nota >= 90 ){
      mensaje= "Excelente";
    }else if(nota >= 80){
    mensaje= "Muy bien";
    }else{
        mensaje = "Aprobado";
    }
  res.send(mensaje);
});



app.listen(port,() =>{
    console.log("servidor iniciando en http://localhost:",+ port);
});