var nombre = 'miguel'
var edad = 23

var nombreMayus = nombre.toUpperCase()
var nombreMinus = nombre.toLowerCase()

var tamaño = nombre.length

var concatenar = nombre +' '+ edad

var primer = nombre.charAt(0)
 
console.log('que dice perrisimo!') 

console.log('hola ' + nombre + edad)

console.log('primer ' + primer)

console.log(tamaño+concatenar+primer)

var completo = `${nombre.toUpperCase()} ${edad}`

var str = nombre.substr(3)//o tambien (1, 3) para tomar de posicion caracter a posicion carater
var str1 = nombre.substr(tamaño-1)