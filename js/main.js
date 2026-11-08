/*
    Projeto: Guia Tático VALORANT
    Disciplina: Desenvolvimento Front-End para Web
    Autores: João Manuel Ferreira Alduan e Isaque Almeida Costa
*/

function toggleAgentTips() {
    let tipsBox = document.getElementById("extra-tips-section");
    tipsBox.classList.toggle("hidden-element");
}

function calculateRoundBuy() {
    let creditsInput = document.getElementById("credits-input");
    let resultDisplay = document.getElementById("buy-result-text");
    let currentCredits = Number(creditsInput.value);

    if (creditsInput.value === "" || currentCredits < 0) {
        resultDisplay.textContent = "Por favor, digite um valor válido de créditos (entre 0 e 9000).";
        resultDisplay.style.backgroundColor = "#3b1219";
    } else if (currentCredits > 9000) {
        resultDisplay.textContent = "Atenção: O limite máximo de créditos no VALORANT é 9000!";
        resultDisplay.style.backgroundColor = "#3b1219";
    } else if (currentCredits >= 6100) {
        resultDisplay.textContent = "Compra de Operator ou Full Buy Sobra (6100+): Operator (4700) + Escudo Pesado (1000) + Habilidades (~400-600), ou Vandal/Phantom com dinheiro de sobra para dropar para o time.";
        resultDisplay.style.backgroundColor = "#143326";
    } else if (currentCredits >= 4500) {
        resultDisplay.textContent = "Compra Completa Ideal / Full Buy (4500+): Vandal ou Phantom (2900) + Escudo Pesado (1000) + Kit Completo de Habilidades (média de 600 créditos).";
        resultDisplay.style.backgroundColor = "#143326";
    } else if (currentCredits >= 3900) {
        resultDisplay.textContent = "Compra Completa Adaptada (3900 a 4499): Vandal/Phantom (2900) + Escudo Leve (400) + Todas as Habilidades (~600), ou Escudo Pesado (1000) comprando só as habilidades principais.";
        resultDisplay.style.backgroundColor = "#1f4233";
    } else if (currentCredits >= 2600) {
        resultDisplay.textContent = "Meia Compra / Half Buy (2600 a 3899): Compre Spectre (1600) ou Bulldog (2050) + Escudo Leve (400) + Habilidades (~600), ou gaste só até sobrar ~2000 créditos para garantir Full Buy no próximo round.";
        resultDisplay.style.backgroundColor = "#382f14";
    } else if (currentCredits >= 1500) {
        resultDisplay.textContent = "Eco Controlado (1500 a 2599): Compre no máximo Ghost (500) ou Sheriff (800) sem escudo para guardar ~2000 créditos e somar com o bônus mínimo de derrota (+1900).";
        resultDisplay.style.backgroundColor = "#3b1219";
    } else {
        resultDisplay.textContent = "Full Eco / Round Pistola (Abaixo de 1500): Em round normal, jogue de Classic gratuita e economize tudo. Se for Pistol Round (800), compre Ghost/Frenzy ou Escudo Leve + Habilidades.";
        resultDisplay.style.backgroundColor = "#3b1219";
    }
}

let toggleTipsButton = document.getElementById("toggle-tips-btn");
if (toggleTipsButton) {
    toggleTipsButton.addEventListener("click", toggleAgentTips);
}

let calculateBuyButton = document.getElementById("calc-btn");
if (calculateBuyButton) {
    calculateBuyButton.addEventListener("click", calculateRoundBuy);
}
