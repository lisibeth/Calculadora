let screen = document.querySelector('#screen-result');

// Función para agregar el valor de un elemento de entrada a la pantalla
function getData(ref){
    // Obtener el valor del elemento de entrada
    let value = ref.value;
    // Agregar el valor al contenido actual de la pantalla
    screen.value += value;
}

// Función para limpiar la pantalla
function clean(){
    // Establecer el valor de la pantalla como una cadena vacía
    screen.value = '';
}

// Función para calcular la expresión matemática en la pantalla
function calculate(){
    try {
        // Evaluar la expresión matemática en la pantalla y mostrar el resultado
        screen.value = eval(screen.value);
    } catch (error) {
        // En caso de error, mostrar 'Error' en la pantalla y limpiar después de medio segundo
        screen.value = 'Error';
        setTimeout(() => {
            clean();
        }, 500);
    }
}