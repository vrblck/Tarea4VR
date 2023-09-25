document.addEventListener("DOMContentLoaded", function () {

    // Imagenes al hacer click
    const galleryImages = document.querySelectorAll(".gallery-image");
    const imageModal = document.querySelector(".image-modal");
    const modalImage = document.getElementById("modal-image");
    const modalDescription = document.getElementById("modal-description");

    galleryImages.forEach((image) => {
        image.addEventListener("click", () => {
            modalImage.src = image.src;
            modalDescription.textContent = image.getAttribute("data-description");
            imageModal.style.display = "";
        });
    });

    imageModal.addEventListener("click", () => {
        imageModal.style.display = "none";
    });

    // Formulario 
    const contactForm = document.getElementById("contact-form");
    const successMessage = document.getElementById("success-message");

    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const formData = new FormData(contactForm);
        const formDataObject = {};
        formData.forEach((value, key) => {
            formDataObject[key] = value;
        });

        // Almacena los datos del formulario en variables en lugar de enviarlos
        const name = formDataObject.name || "";
        const email = formDataObject.email || "";
        const subject = formDataObject.subject || "";
        const message = formDataObject.message || "";

        // Mostrarlos en la página
        successMessage.innerHTML = `
            <p>Nombre: ${name}</p>
            <p>Correo Electrónico: ${email}</p>
            <p>Asunto: ${subject}</p>
            <p>Mensaje: ${message}</p>
        `;

    });

    //Calculadora de edad
    const calculateAgeButton = document.getElementById("calculate-age");
    const userAgeInput = document.getElementById("user-age");
    const ageDifference = document.getElementById("age-difference");

    calculateAgeButton.addEventListener("click", () => {
        const userAge = parseInt(userAgeInput.value, 10);
        const ownerAge = 22; 
        const difference = userAge - ownerAge;
        ageDifference.textContent = `Nuestra diferencia de edad es ${difference} años.`;
    });

    // Calculadora de costo
    const calculateCostButton = document.getElementById("calculate-cost");
    const itemPriceInput = document.getElementById("item-price");
    const itemQuantityInput = document.getElementById("item-quantity");
    const totalCost = document.getElementById("total-cost");

    calculateCostButton.addEventListener("click", () => {
        const price = parseFloat(itemPriceInput.value);
        const quantity = parseInt(itemQuantityInput.value, 10);
        const cost = price * quantity;
        totalCost.textContent = `El costo total es $${cost.toFixed(2)}`;
    });

    // Calculadora de Conversión de Moneda desde CLP
    document.getElementById("calculate-currency").addEventListener("click", function () {
        const amount = parseFloat(document.getElementById("currency-amount").value);
        const currencyTo = document.getElementById("currency-to").value;

        // Define tasas de conversión (CLP a otras monedas)
        const tasasConversion = {
            usd: 0.0012, // Ejemplo: 1 CLP = 0.0012 USD
            eur: 0.0010, // Ejemplo: 1 CLP = 0.0010 EUR
            gbp: 0.00085, // Ejemplo: 1 CLP = 0.00085 GBP
            jpy: 0.14, // Ejemplo: 1 CLP = 0.14 JPY
            krw: 1.62, // Ejemplo: 1 CLP = 1.62 KRW
            cad: 0.0015, // Ejemplo: 1 CLP = 0.0015 CAD
            aud: 0.0017, // Ejemplo: 1 CLP = 0.0017 AUD
            cny: 0.0076, // Ejemplo: 1 CLP = 0.0076 CNY
            inr: 0.086, // Ejemplo: 1 CLP = 0.086 INR
            brl: 0.00057, // Ejemplo: 1 CLP = 0.00057 BRL
            mxn: 0.0024 // Ejemplo: 1 CLP = 0.0024 MXN
        };

        if (tasasConversion[currencyTo]) {
            const conversionRate = tasasConversion[currencyTo];
            const convertedAmount = amount * conversionRate;
            document.getElementById("currency-result").textContent = `Cantidad convertida: ${convertedAmount.toFixed(2)} ${currencyTo.toUpperCase()}`;
        } else {
            document.getElementById("currency-result").textContent = "Moneda de destino no válida";
        }
    });
    
    // Calculadora de IMC
    document.getElementById("calculate-imc").addEventListener("click", function () {
        const weight = parseFloat(document.getElementById("weight").value);
        const height = parseFloat(document.getElementById("height").value);

        if (weight > 0 && height > 0) {
            const imc = weight / (height * height);
            document.getElementById("imc-result").textContent = `Tu IMC es: ${imc.toFixed(2)}`;
        } else {
            document.getElementById("imc-result").textContent = "Por favor, ingresa valores válidos.";
        }
    });

    // Calculadora de Descuento
    document.getElementById("calculate-discount").addEventListener("click", function () {
        const originalPrice = parseFloat(document.getElementById("original-price").value);
        const discountPercent = parseFloat(document.getElementById("discount-percent").value);

        if (originalPrice >= 0 && discountPercent >= 0 && discountPercent <= 100) {
            const discountedPrice = originalPrice - (originalPrice * (discountPercent / 100));
            document.getElementById("discounted-price").textContent = `Precio con Descuento: $${discountedPrice.toFixed(2)}`;
        } else {
            document.getElementById("discounted-price").textContent = "Por favor, ingresa valores válidos.";
        }
    });
});