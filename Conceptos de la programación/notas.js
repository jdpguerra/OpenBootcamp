var introduccion;
if(introduccion == "1.1"){
//serie de reglas que te permite escribir softwares para ordenador o mobil.
//poder controlar el sistema informativo
}
else if(introduccion =="1.2"){
//tipos de paradigma de programacion
//imperativos>
//secuencia de instrucciones
//define el paso a paso
//Declarativo >
//se centro en el que lugar y como
//exemplo de receta de torta y el final seria la receta hecha > otro exemplo

const listaProgramadores = ["Gorka","Martin","Alex","Leire"]

//programacion imperactiva
let nonbres =[]
listaProgramadores.forEach((programador,posicion) => {
nonbres[posicion]=programador
})

//Programacion declarativa
var nombres = [...listaProgramadores]

//funcionales vs procedimentales
//suma procedimental
let suma =0
for (let i=1;i<=10;i++){
suma = suma+i

}

//suma funcional
//definimos la funciona

function suma_los_diez_primeiro_entero(){
let suma =0
for (let i=1;i<=10;i++){
suma = suma +1

}
return suma
}
//utilizamos la funcion

let sumar =suma_los_diez_primeiro_entero()
//suma

//division por niveles
//Lenguaje maquina
//manipulado por binario 1 o 0, va entender todos los numeros binarios

//lenguaje emsamblador
//instrucciones directas al ordenador > lenguaje a nivel maquina

//bajo nivel
//relacionados directamente com el hardware y la arquitectura

//medio bajo nivel
//lenguaje C y c++ > accesso al procesador

//medio alto nivel 
//php,c#,python y javascript

//alto nivel
//frameworks

}
else if(introduccion =="1.4"){
 //traductor del programa y que la maquina entienda
 //compilador >
 //genera un archivo binario
 //interprete   
//entiende tu codigo
}
else if(introduccion =="1.5"){

 //entorno de desarrollo integrado > bloco de notas para ayudar con el desarrollo del codigo
 //visual studio code
 //atom
 //sublime text
 //pycharm
 //notepad++
}