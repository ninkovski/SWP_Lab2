/*
    Autentificacion 
    StartWebPerú | @ninkovski
    Guardar registro de formulario 
*/
import { appParams } from '../../config.js';

export function saveToGoogleSheets() {

    var formData = new FormData();
    formData.append("Aplicacion", appParams.Name);
    formData.append("Nombre", document.getElementById("demo-name").value);
    formData.append("Telefono", document.getElementById("demo-nro").value);
    formData.append("Correo", document.getElementById("demo-email").value);
    formData.append("Mensaje", document.getElementById("demo-message").value);

    fetch(
        "https://script.google.com/macros/s/AKfycbxOzV3BDwkmnG7nQojNG59eULLbhHIIYIFRLEojrnGQlMxDgTdw3H45CvWNS8l6yNRfUg/exec",
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

} 
