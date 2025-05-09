document.addEventListener("DOMContentLoaded", function () {
    // Crear el enlace de WhatsApp
    const whatsappLink = document.createElement("a");
    whatsappLink.href = "https://wa.me/5238514111"; // ← Reemplaza con tu número
    whatsappLink.target = "_blank";
    whatsappLink.classList.add("whatsapp-float");
  
    // Crear la imagen
    const whatsappIcon = document.createElement("img");
    whatsappIcon.src = "https://cdn-icons-png.flaticon.com/512/124/124034.png";
    whatsappIcon.alt = "WhatsApp";
    whatsappIcon.style.width = "60px";
    whatsappIcon.style.height = "60px";
  
    // Añadir imagen al enlace, y enlace al body
    whatsappLink.appendChild(whatsappIcon);
    document.body.appendChild(whatsappLink);
  });
  
  
  