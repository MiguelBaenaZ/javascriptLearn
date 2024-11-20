var objeto = {
    nombre: 'miguel',
    apellido: 'baena',
    edad: 23
}

function cumpleanos(persona) {
    return{
        ...persona,
        edad: persona.edad + 1
    }
}

var objeto2 = cumpleanos(objeto)
console.log(objeto2)