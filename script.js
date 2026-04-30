const PUBLIC_KEY = "8AFXbd_ybTR6eiBhS";
const SERVICE_ID = "service_g5qin14";
const TEMPLATE_ID = "template_eu18w4e";

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