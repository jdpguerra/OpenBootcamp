var introduccion;
if(introduccion == "3.1"){
//paradigmas de programacion
//programacion estructurada
//atributos
//metodos
//4 conceptps de clave objetos
//classes que tengan derivados del usuario

//funciones que pueden llamar el mismo resultado

function suma(num1,num2){
    return num1+num2
}

console.log(suma(3, 8))

//recursividad
//calculo factorial

function factorial(num){
let fact = num
for (let i = num-1; i>0 ; i=i-1){
    fact=fact*i
}
return fact

}
console.log(factorial(5));

function factorial_rec(num) {
if(num===1) return 1;
return num*factorial_rec(num-1)

}

console.log(factorial_rec(5))

function suma1(sum1,sum2){
    return num1+num2

}

function multiplica (num1,num2){
    return num1*num2
}

function suma_y_multiplica (num1,num2){
return suma(num1,num2)*multiplica(num1,num2)

}
console.log(suma(5)) //5
console.log(multiplica(5))//4
console.log(suma_y_multiplica(5)) //20

}