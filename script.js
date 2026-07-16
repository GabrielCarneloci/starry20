// Número do estúdio no formato internacional (troque pelo número real)
const WHATSAPP_NUMBER = "5500000000000";

const noticeClose = document.getElementById("notice-close");
const noticePopup = document.getElementById("notice-popup");
if (noticeClose && noticePopup) {
  noticeClose.addEventListener("click", function () {
    noticePopup.style.display = "none";
  });
}

const form = document.getElementById("booking-form");

if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("f-nome").value.trim();
    const telefone = document.getElementById("f-telefone").value.trim();
    const estilo = document.getElementById("f-estilo").value;
    const local = document.getElementById("f-local").value.trim();
    const ideia = document.getElementById("f-ideia").value.trim();

    const linhas = [
      "Olá! Gostaria de um orçamento na Starry Tattoo:",
      `Nome: ${nome}`,
      `Telefone: ${telefone}`,
      `Estilo desejado: ${estilo}`,
      local ? `Local no corpo: ${local}` : null,
      ideia ? `Ideia: ${ideia}` : null,
    ].filter(Boolean);

    const mensagem = encodeURIComponent(linhas.join("\n"));
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${mensagem}`;

    window.open(url, "_blank");
  });
}
