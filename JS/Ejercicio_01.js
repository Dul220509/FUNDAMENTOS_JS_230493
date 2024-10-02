// comentarios de una sola linea


/* comentarios multilinea  */



//ejercicio 1: declaracion de variables

// a) Var

var miNombre="Dulce Yadira ."
var misApellidos;
var miEdad =32;


// ELobjeto de console nos permite enviar datos a la terminal 
//y poder visualizar el valor de una variable o resultado de una función o metodo

console.warn("---Declaración de variable usando VAR");
console.log("intentando leer las variables", miNombre,misApellidos);



misApellidos ="Salvador Antonio"
console.log("Ya que ambas fueron inicializadas vuelvo a intentar leerlas ",miNombre, misApellidos)

///una variable puede cambiar en el proceso de ejecusion del programa



// b) const

console.warn("-----Declaración de variable del tipo constante usando: CONST-------")
const miUniversidad ="UT Xicotepec";
const miMatricula =230493;
console.log("Hola,", miNombre,"",misApellidos,"Se que estudias actualmete en:",
     miUniversidad, "asignaron la matricula:", miMatricula, "y tienes una edad de:", miEdad,"años.");

//para saber cual es el tipo de dato que tuiene una variable o constante podemos utilizar la funcio typeOf()

console.log("analizando los datos puedo decir que:")

console.log("miNombre es de tipo:", typeof(miNombre))
console.log("misApellidos son de tipo:", typeof(misApellidos))
console.log("miUniversidad es de tipo:", typeof(miUniversidad))
console.log("miMatricula es de tipo", typeof(miMatricula))
console.log("miEdad es de tipo:", typeof(miEdad))



// c) let

let myBirthDay ="1992-04-22";
let myFavoriteColor;

console.warn("----Declaracion de variables locales usando: LET")

console.log(" Genial,Te voy conociendo mejor , ahora de que tu naciste el :", myBirthDay,"y tu color favorito es : mmm... dejame pensar...")
myFavoriteColor="Amarillo";
   
console.log(`creo que es ${myFavoriteColor},le atine`)
console.log("Analizando los datos puedo decir que:")
console.log("myBirthday es de tipo", typeof(myBirthDay))
console.log("miEdad es de tipo:", typeof(myFavoriteColor))