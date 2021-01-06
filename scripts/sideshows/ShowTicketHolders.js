const contentTarget = document.querySelector(".sideshow")
const eventHub = document.querySelector("#state-fair")

const ShowTicketHolders = () => {
    contentTarget.innerHTML += `<div class="person gawker"></div>`
}

const BigSpender = () => {
    contentTarget.innerHTML += `<div class="person bigSpender"></div>`
}

eventHub.addEventListener("showTicketBought", ShowTicketHolders);
eventHub.addEventListener('supremeTicketBought', BigSpender);