/*
    Autentificacion 
    StartWebPerú | @ninkovski
    Componente ara autentificacion de cluod 
*/
// Credenciales de autenticación
const CLIENT_ID = '545076875830-7mhaptispqn4umofd92os3fttpl291kp.apps.googleusercontent.com';
const API_KEY = 'AIzaSyAOx0UsH1mQbUJlm7K--RNt2aPXbDyhalA'; // Obtén tu API Key en la Consola de Google Cloud
const SCOPES = 'https://www.googleapis.com/auth/spreadsheets';
const DISCOVERY_DOCS = ['https://sheets.googleapis.com/$discovery/rest?version=v4'];

// Inicializa la API de Google y configura la autorización
function initClient() {
    gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES
    }).then(function () {
        // Escucha el evento click del botón de autorización
    });
}

// Realiza la autenticación
function handleAuthClick() {
    gapi.auth2.getAuthInstance().signIn().then(function () {
        console.log('Autenticado');
        // Aquí puedes llamar a los métodos de las API de Sheets
    });
}

// Carga la API de Google
function handleClientLoad() {
    gapi.load('client:auth2', initClient);
}
