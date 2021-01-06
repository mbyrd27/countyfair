const contentTarget = document.querySelector(".rides")
const eventHub = document.querySelector("#state-fair")

const RideTicketHolders = () => {
    contentTarget.innerHTML += `<div class="person rider"></div>`
}

const BigSpender = () => {
    contentTarget.innerHTML += `<div class="person bigSpender"></div>`
}

eventHub.addEventListener('rideTicketBought', RideTicketHolders);
eventHub.addEventListener('supremeTicketBought', BigSpender);
