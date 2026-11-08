/*
    Projeto: Guia Tático VALORANT
    Disciplina: Desenvolvimento Front-End para Web
    Autores: João Manuel Ferreira Alduan e Isaque Almeida Costa
*/

let tacticalList = [];

function getAgentRole(agentName) {
    let agentRole = "";

    switch (agentName) {
        case "Iso":
        case "Jett":
        case "Neon":
        case "Phoenix":
        case "Raze":
        case "Reyna":
        case "Waylay":
        case "Yoru":
            agentRole = "Duelista";
            break;
        case "Astra":
        case "Brimstone":
        case "Clove":
        case "Harbor":
        case "Omen":
        case "Viper":
            agentRole = "Controlador (Smoke)";
            break;
        case "Breach":
        case "Fade":
        case "Gekko":
        case "KAY/O":
        case "Skye":
        case "Sova":
        case "Tejo":
            agentRole = "Iniciador";
            break;
        case "Chamber":
        case "Cypher":
        case "Deadlock":
        case "Killjoy":
        case "Sage":
        case "Vyse":
            agentRole = "Sentinela";
            break;
        default:
            agentRole = "Tático";
            break;
    }

    return agentRole;
}

function loadSavedTactics() {
    let storedData = localStorage.getItem("valorant_tactics");
    if (storedData !== null) {
        tacticalList = JSON.parse(storedData);
    } else {
        tacticalList = [];
    }

    renderTacticsTable();
}

function renderTacticsTable() {
    let tableBody = document.getElementById("tactics-table-body");
    tableBody.innerHTML = "";

    for (let i = 0; i < tacticalList.length; i++) {
        let item = tacticalList[i];
        let rowHtml = "<tr>" +
            "<td>" + item.map + "</td>" +
            "<td>" + item.agent + "</td>" +
            "<td>" + item.role + "</td>" +
            "<td>" + item.note + "</td>" +
            "<td><button type=\"button\" class=\"action-button\" onclick=\"deleteTactic(" + i + ")\">Excluir</button></td>" +
            "</tr>";
        tableBody.innerHTML = tableBody.innerHTML + rowHtml;
    }
}

function saveNewTactic() {
    let mapSelect = document.getElementById("map-select");
    let agentSelect = document.getElementById("agent-select");
    let strategyNote = document.getElementById("strategy-note");
    let feedbackMessage = document.getElementById("builder-feedback");

    let automaticRole = getAgentRole(agentSelect.value);

    let noteValue = "-";
    if (strategyNote.value !== "") {
        noteValue = strategyNote.value;
    }

    let newTactic = {
        map: mapSelect.value,
        agent: agentSelect.value,
        role: automaticRole,
        note: noteValue
    };

    tacticalList.push(newTactic);
    localStorage.setItem("valorant_tactics", JSON.stringify(tacticalList));
    renderTacticsTable();

    strategyNote.value = "";
    feedbackMessage.textContent = "Tática cadastrada! Agente " + agentSelect.value + " classificado automaticamente como " + automaticRole + ".";
    feedbackMessage.style.backgroundColor = "#143326";
}

function deleteTactic(index) {
    tacticalList.splice(index, 1);
    localStorage.setItem("valorant_tactics", JSON.stringify(tacticalList));
    renderTacticsTable();
}

function clearAllTactics() {
    let confirmation = confirm("Deseja realmente apagar todas as táticas salvas?");
    if (confirmation) {
        tacticalList = [];
        localStorage.removeItem("valorant_tactics");
        renderTacticsTable();

        let feedbackMessage = document.getElementById("builder-feedback");
        feedbackMessage.textContent = "Todas as táticas foram removidas do armazenamento local.";
        feedbackMessage.style.backgroundColor = "#000000";
    }
}

let saveTacticButton = document.getElementById("save-btn");
let clearTacticsButton = document.getElementById("clear-btn");

if (saveTacticButton && clearTacticsButton) {
    saveTacticButton.addEventListener("click", saveNewTactic);
    clearTacticsButton.addEventListener("click", clearAllTactics);
    loadSavedTactics();
}

function handleContactSubmit(event) {
    event.preventDefault();

    let playerName = document.getElementById("player-name");
    let riotId = document.getElementById("riot-id");
    let contactFeedback = document.getElementById("contact-feedback");
    let contactForm = document.getElementById("contact-form");

    alert("Mensagem enviada com sucesso! Obrigado pelo contato, " + playerName.value + " (" + riotId.value + ").");

    if (contactFeedback) {
        contactFeedback.textContent = "Mensagem recebida com sucesso! Entraremos em contato com " + playerName.value + " (" + riotId.value + ") em breve.";
        contactFeedback.style.backgroundColor = "#143326";
    }

    contactForm.reset();
}

let contactForm = document.getElementById("contact-form");
if (contactForm) {
    contactForm.addEventListener("submit", handleContactSubmit);
}
