import { RideTicketHolders } from './rides/RideTicketHolders.js'

const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")

eventHub.addEventListener('click', event => {
    const rideEvent = new CustomEvent("rideTicketBought")
    eventHub.dispatchEvent(rideEvent);
})

export const TicketBooth = () => {
    contentTarget.innerHTML += `
        <div class="ticketBooth">
            <button id="rideTicket">Ride Ticket</button>
        </div>
    `
}

