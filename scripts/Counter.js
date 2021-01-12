const contentTarget = document.querySelector('.counter')
const eventHub = document.querySelector('#state-fair')

let ticketCount = 0;
contentTarget.innerHTML = `<div class="ticketCount">Total tickets purchased: ${ticketCount}</div>`

const increaseCount = () => {
    ticketCount += 1;
    contentTarget.innerHTML = `<div class="ticketCount">Total tickets purchased: ${ticketCount}</div>`
}

eventHub.addEventListener('foodTicketBought', increaseCount)
eventHub.addEventListener('rideTicketBought', increaseCount)
eventHub.addEventListener('showTicketBought', increaseCount)
eventHub.addEventListener('supremeTicketBought', increaseCount)
eventHub.addEventListener('gameTicketBought', increaseCount)



