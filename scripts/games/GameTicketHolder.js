const contentTarget = document.querySelector(".games")
const eventHub = document.querySelector("#state-fair")

const GameTicketHolder = () => {
    contentTarget.innerHTML += `<div class="person player"></div>`
}

const BigSpender = () => {
    contentTarget.innerHTML += `<div class="person bigSpender"></div>`
}

eventHub.addEventListener('gameTicketBought', GameTicketHolder);
eventHub.addEventListener('supremeTicketBought', BigSpender);