/*
    Autentificacion 
    StartWebPerú | @ninkovski
    Guardar registro de formulario 
*/

document.getElementById("send-button").addEventListener("click", function (event) {
    event.preventDefault();

    var formData = new FormData();
    formData.append("Aplicacion", "Mi Aplicacion");
    formData.append("Nombre", document.getElementById("demo-name").value);
    formData.append("Telefono", document.getElementById("demo-nro").value);
    formData.append("Correo", document.getElementById("demo-email").value);
    formData.append("Mensaje", "Mi mensaje");

    fetch(
        "https://script.google.com/macros/s/AKfycbxb1WV_5SmdxxLn7ikZAeZkp6Xg_CaY0OGG_wraiYn8HA1jhZqDQ6hg1qgaVCTiFQFSYw/exec",
        {
            method: "POST",
            body: formData 
        }
    )
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.log(error);
        });

});

