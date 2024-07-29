document.getElementById("submitBtn").addEventListener("click", function() {
    // Obtener valores del formulario
    var nom = document.getElementById("nom").value;
    var edad = document.getElementById("edad").value;
    var correo = document.getElementById("correo").value;
    var genero = document.getElementById("fecha_mantenimiento").value; 
    var curso = document.getElementById("marca").value; 
    var opini = document.getElementById("problema").value; 
    var confirmacion = confirm("¿Deseas salir de la página?");
    

    // Validar la edad del niño
    if (edad < 5) {
        alert("El niño debe tener al menos 5 años para ser inscrito en la escuela.");
        return;
    }

    // Procesar la inscripción
    alert("¡Inscripción exitosa!\n\nNombre: " + nom + "\nCorreo: " + correo + "\nFecha de Mantenimiento: " + fecha_mantenimiento + "\nS: " + marca + "\nProblema con el Dispositivo: " + problema);

    if (confirmacion) {
        window.close();
    } else {
        return;
    }
});
