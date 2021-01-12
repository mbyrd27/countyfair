
const contentTarget = document.querySelector(".food")
const eventHub = document.querySelector("#state-fair")

const FoodTicketHolder = () => {
    contentTarget.innerHTML += `<div class="person eater"></div>`
}

const BigSpender = () => {
    contentTarget.innerHTML += `<div class="person bigSpender"></div>`
}

eventHub.addEventListener('foodTicketBought', FoodTicketHolder);
eventHub.addEventListener('supremeTicketBought', BigSpender);