/*
	Componente nuevo 
	StartWebPerú | @ninkovski
	Componente nuevo para envio de correos con https://smtpjs.com/
	<script src="https://smtpjs.com/v3/smtp.js"></script>
*/
import { emailParams } from '../config';
import { validMessage } from '../params/messages';
import { emailWelcome } from '../params/mail';

document.getElementById("send-button").addEventListener("click", function (event) {
	event.preventDefault();

	var name = document.getElementById("demo-name").value;
	var email = document.getElementById("demo-email").value;
	var message = document.getElementById("demo-message").value;
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

	Email.send({
		SecureToken: emailParams.SecureToken,
		To: email,
		From: emailParams.From,
		Subject: emailWelcome.Subject,
		Body: emailWelcome.Body
	}).then(
		message => alert(message)
	);
});

