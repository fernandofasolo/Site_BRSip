const PUBLIC_KEY = "";
const SERVICE_ID = "";
const TEMPLATE_ID = "";

const form = document.querySelector('#form');
form.addEventListener('submit', (e) => {
  e.preventDefault();

  emailjs.init({
    publicKey: PUBLIC_KEY,
  });

  emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form)
    .then((response) => alert("Mensagem enviada com sucesso!"))
    .catch((error) => {
      console.log(error);
      alert("Erro ao enviar mensagem!")
    });
});