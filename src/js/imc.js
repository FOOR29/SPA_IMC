//con esto llamas los ID del html
const resultado = document.getElementById('resultado')
//para guardar los dtaos es con .value

const button = document.getElementById('button')


//addEven.. es para eventos
button.addEventListener('click', function () {
    const peso = document.getElementById('peso').value
    const estatura = document.getElementById('estatura').value
    // console.log('hola a todos') mesaje de prueba
    const imc = peso / (estatura * estatura)

    let message;

    if (imc < 18.5) {
        message = 'desnutrido, falta e bienestarina';
    } else if (imc < 24.9) {
        message = 'Peso normal';
    } else if (imc < 29.9) {
        message = 'Estas pasao mijo';
    } else {
        message = 'Sobre peso, trote mijo';
    }

    resultado.textContent = `Estas ${message} y tu IMC es ${Math.round(imc)}`
})