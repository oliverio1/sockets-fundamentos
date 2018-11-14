var socket = io();
socket.on('connect', function() {
    console.log('Conectado al servidor');
});
// Script para escuchar eventos
socket.on('disconnect', function() {
    console.log('Perdimos conexión');
});

// Script para enviar información
socket.emit('enviarMensaje', {
    usuario: 'Oliver',
    mensaje: 'Hola mundo'
}, function(resp) {
    console.log('Respuesta del servidor: ', resp);
});

// Escuchando información
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor', mensaje);
})