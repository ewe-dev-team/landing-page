const form = document.getElementById('registrationForm');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const nombre = document.getElementById('name').value;
  const edad = document.getElementById('age').value;
  const correo = document.getElementById('email').value;
  const telefono = document.getElementById('tel').value;

  const data = {
    nombre,
    edad,
    correo,
    telefono,
  };

  const scriptUrl = 'https://script.google.com/macros/s/AKfycbw5yW5d0zhklJmM0627afkqKdBOG-utqq2-dkajjSHEYS5JCBhZ3XrUUF9iyTFqm9Sg/exec';

  try {
    const response = await fetch(scriptUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const mensajeError = document.getElementById('mensaje-error');

    if (response.ok) {
      if (mensajeError) mensajeError.textContent = 'Formulario enviado con éxito';
      form.reset();
    } else {
      if (mensajeError) mensajeError.textContent = 'Hubo un problema al enviar el formulario.';
      form.reset();
    }
  } catch (error) {
    const mensajeError = document.getElementById('mensaje-error');
    if (mensajeError) mensajeError.textContent = 'Error al enviar el formulario. Inténtalo nuevamente.';
  }
});
