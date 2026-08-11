
class Usuario {
    constructor(nombre, dni, gmail, localidad) {
        this.nombre = nombre;
        this.dni = dni;
        this.gmail = gmail;
        this.localidad = localidad;
        this.fechaRegistro = new Date().toLocaleString();
    }
}

const formulario = document.getElementById('formRegistro');
const mensaje = document.getElementById('mensajeExito');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const dni = document.getElementById('dni').value;
    const gmail = document.getElementById('gmail').value;
    const localidad = document.getElementById('localidad').value;

    const nuevoUsuario = new Usuario(nombre, dni, gmail, localidad);

    console.log("Usuario registrado con éxito:", nuevoUsuario);
    
    mensaje.innerText = `¡Gracias ${nuevoUsuario.nombre}! Te registraste correctamente en ${nuevoUsuario.localidad}.`;

});