const elementNombre = obtenerElemento('#input-nombre');
const elementEmail = obtenerElemento('#input-email');
const elementAsunto = obtenerElemento('#input-asunto');
const elementMensaje = obtenerElemento('#input-mensaje');

function obtenerElemento(selector) {
    return document.querySelector(selector)
}

function validar() {
    const validacionNombre = [validarVacio(elementNombre.value), validarLargo(elementNombre.value, 50)]
    const mensajesNombre = obtenerMensajes(validacionNombre);
    obtenerElemento('#mensaje-nombre').innerHTML = mensajesNombre;

    const validacionEmail = [validarVacio(elementEmail.value), validarEmail(elementEmail.value)]
    const mensajesEmail = obtenerMensajes(validacionEmail);
    obtenerElemento('#mensaje-email').innerHTML = mensajesEmail;

    const validacionAsunto = [validarVacio(elementAsunto.value), validarLargo(elementAsunto.value, 50)]
    const mensajesAsunto = obtenerMensajes(validacionAsunto);
    obtenerElemento('#mensaje-asunto').innerHTML = mensajesAsunto;

    const validacionMensaje = [validarVacio(elementMensaje.value), validarLargo(elementMensaje.value, 300)]
    const mensajesMensaje = obtenerMensajes(validacionMensaje);
    obtenerElemento('#mensaje-mensaje').innerHTML = mensajesMensaje;

    return !mensajesNombre && !mensajesEmail && !mensajesAsunto && !mensajesMensaje;
}

function validarVacio(texto) {
    return { estado: texto.trim().length > 0, mensaje: 'El campo no debe estar vacío' }
}

function validarLargo(texto, largo) {
    return { estado: texto.trim().length <= largo, mensaje: `El campo debe tener un máximo de ${largo} caracteres` }
}

function validarEmail(texto) {
    return { estado: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(texto), mensaje: 'El correo ingresado no es válido' }
}

function obtenerMensajes(validaciones) {
    return validaciones.filter(v => v.estado === false).map(v => v.mensaje).join('<br />')
}