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
        "https://script.google.com/macros/library/d/19_gdbB86HYzNELDZMbUN_DzsR31oBIt8w-MX3mQ4sLCOe3J47KUaWsdk/4",
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

