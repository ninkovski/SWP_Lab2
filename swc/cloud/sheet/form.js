/*
    Autentificacion 
    StartWebPerú | @ninkovski
    Guardar registro de formulario 
*/

document.getElementById("send-button").addEventListener("click", function (event) {
    event.preventDefault();
    // Captura los valores del formulario
    var nombre = document.getElementById('demo-name').value;
    var celular = document.getElementById('demo-nro').value;
    var correo = document.getElementById('demo-email').value;

    // Crea el objeto de datos a enviar a Google Sheets
    var datos = {
        values: [[nombre, celular, correo]]
    };

    // Envía los datos a Google Sheets
    gapi.client.sheets.spreadsheets.values.append({
        spreadsheetId: '1bebHGEKX7FOn1BUWp0m07of42m0jvRzYa8xAQMUxprE',
        range: 'Clientes_Form',
        valueInputOption: 'RAW',
        resource: datos
    }).then(function (response) {
        console.log('Registro guardado correctamente');
        // Aquí puedes agregar cualquier otra lógica adicional después de guardar el registro
        // Por ejemplo, mostrar un mensaje de éxito, limpiar el formulario, etc.
    }, function (reason) {
        console.error('Error al guardar el registro:', reason.result.error.message);
    });
});

