// en typescript -> tenemos algo que se llama observador/observable -> nos permite que se esté ejecutando el código todo el tiempo ----> "tsc --watch archivo.ts"

// "node --watch archivo.js"

console.log('hola soy typescript');

// INFERENCIA DE TIPOS 
//Si importa el tipo de variable
//asume que esa variable SOLO recibe el tipo de datos que usted guardó por primera vez

//declaración implícita
let miVariable = "abc";  
miVariable = 'luisa';

let miNumero = 20;
miNumero = 30;

//Declaración explícita
let miNumero2 : number;
//Asignas un valor respetando el tipo declarado
miNumero2 = 30;
//console.log(miNumero2);


//TIPOS DE DATOS 
//DATOS PRIMITIVOS -> Básicos (string, numero, booleanos, undefined, null)

//numérico (-1, 10, 5.6 ...)
let numero : number; 
//String -> texto
let texto : string;
//Booleanos
let buleano : boolean;
//Indefinidos
let indefinido : undefined;
//Nulos
let nulo : null;

numero = 20;
texto = "hola";
buleano = false;
indefinido = undefined;
nulo = null;


//TIPOS DE DATOS ESPECIALES
//Arrays , objetos, unkwon -> desconocido y any -> cualquiera
//implicitamente es un arreglo de números
let arreglo = [1, 2, 5];

//declaración explícita de un arreglo
//forma 1
let arreglo2 : Array<number>
let arreglo3 : Array<string>
let arreglo4 : Array<boolean>

arreglo = [10, 70, 35];
arreglo2 = [100, 700, 350];
arreglo3 = ['luisa', 'cristian', 'laura'];
arreglo4 = [true, false];

//forma 2 de declarar tipos de datos en los arreglos
let miArreglo : string[];
miArreglo = ['luisa', 'angelo'];

//objetos - unknown - any - funciones
//nuestras variables reciben datos de cualquier tipo
//no es tan usado 
let desconocido : unknown; //usted recibe cualquier tipo de dato, porque no sabe qué va a llegar
let cualquiera : any;//no me importa lo que llegue, guárdemelo 

desconocido = 'luisa';
desconocido = 3;
desconocido = [true, false];
cualquiera = false;
cualquiera = undefined;
cualquiera = null;


// OBJETOS 
let miObjeto : object; // -> [] o {}

//declaración explicita de un objeto literal
// Asignación -> = -> valores y Declaración -> : -> tipo

let miObjetoCarro : {
    id: number;
    marca: string;
    color?: string; //ref no sabe si ese elemnto va o no a darse
    vendido:boolean;
};

miObjetoCarro = {
    id: 1,
    marca: 'BMW',
    vendido: true
};

//FUNCIONES
//Las funciones pueden devolver valores o puede que no devuelvan nada
// devolver datos de tipo number, string, boolean, object
//las que no devuelven -> :void -> sólo me ejecuto

let retorno : any;

function miFuncion1() : void {
    console.log("soy función 1");
}
//ejecute
miFuncion1();
//guárdese en una variable
//retorno = miFuncion1(); -> nos retorna indefinido


//mi variable le puedo dar parámetros -> le asignamos tipos
// fn flecha -> puede que retorne o no retorne
const miFuncion2 = (num1 : number , num2 : number) =>  {
    return num1 * num2;
}
    //retorno = miFuncion2() -> number

//Además yo puedo especificar el tipo de la respuesta que me va a dar
function miFuncion3 (num1 : number, num2 : number) : number{
    return num1 + num2;
}

retorno = miFuncion3(2,5); //-> number
    console.log(retorno);