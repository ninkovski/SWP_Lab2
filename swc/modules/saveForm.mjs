/*
    Componente Guardar Formulario
    StartWebPerú | @ninkovski
    Validar, enviar correo y guardar informacion en sheet de google 
*/
import { validMessage } from '../params/messages.js';
import { saveToGoogleSheets } from '../cloud/sheet/form.js';
import { sendMailWelcome } from './mail.mjs'
document.getElementById("send-button").addEventListener("click", function (event) {
    event.preventDefault();

    var email = document.getElementById("demo-email").value;
    var nro = document.getElementById("demo-nro").value;

    //Validaciones 
    var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(email)) {
        alert(validMessage.ImputMailInvalid);
        return;
    }

    var phoneRegex = /^\d{9}$/;
    if (!phoneRegex.test(nro)) {
        alert(validMessage.ImputPhoneInvalid);
        return;
    }
    // llamando a modulo de envio de correos y de sheets de google
    sendMailWelcome();
    saveToGoogleSheets();

});
