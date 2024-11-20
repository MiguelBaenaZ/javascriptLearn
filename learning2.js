var objeto = {
    nombre: 'miguel',
    edad: 23,
    apellido: 'baena'
}

function imprimir(persona){
    var { nombre } = persona
    //var nombre = persona.nombre.toUpperCase()
    console.log(nombre)
}

function imprimir1({nombre}){
    console.log(nombre.toUpperCase())
}

imprimir1({ nombre: 'angel' })
imprimir(objeto)


