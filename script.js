/* =============================================
    LIGAÇÃO COM O WHATTSAPP - (avaliacao.html) 
================================================ */

document.getElementById("whatsappForm").addEventListener("submit", function (e) {

    e.preventDefault();

    const childName = document.getElementById("childName").value;
    const parentName = document.getElementById("parentName").value;
    const area = document.getElementById("area").value;
    const mensagem = document.getElementById("mensagem").value;

    const texto = `Olá!

    Gostaria de marcar uma avaliação.

    Nome da Criança: ${childName}
    Encarregado de Educação: ${parentName}
    Área: ${area}
    Mensagem: ${mensagem}`;

    const numero = "351966044414";

    const url =
        `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

    window.open(url, "_blank");

});