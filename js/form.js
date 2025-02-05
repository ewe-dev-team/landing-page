// Selecciona el formulario
const form = document.getElementById('registrationForm'); // Usamos el id del formulario

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Previene el envío normal del formulario

  // Recopila los datos del formulario
  const nombre = document.getElementById('name').value;
  const edad = document.getElementById('age').value;
  const correo = document.getElementById('email').value;
  const telefono = document.getElementById('tel').value;

  // Crea un objeto con los datos del formulario
  const data = {
    nombre: nombre,
    edad: edad,
    correo: correo,
    telefono: telefono
  };

  // Configura la URL de tu script de Google Apps (Google Sheets)
  const scriptUrl = 'https://script.google.com/macros/s/AKfycbw5yW5d0zhklJmM0627afkqKdBOG-utqq2-dkajjSHEYS5JCBhZ3XrUUF9iyTFqm9Sg/exec'; // Asegúrate de usar la URL correcta de tu script de Apps Script

  // Envía los datos usando fetch
  fetch(scriptUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => {
    if (response.ok) {
      alert('¡Formulario enviado con éxito!');
      form.reset(); // Limpiar el formulario después de enviarlo
    } else {
      alert('Hubo un problema al enviar el formulario.');
    }
  })
  .catch(error => {
    console.error('Error al enviar el formulario:', error);
    alert('Error al enviar el formulario. Por favor, inténtalo nuevamente.');
  });
});
