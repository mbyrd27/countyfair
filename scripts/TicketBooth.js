const contentTarget = document.querySelector(".entry");
const eventHub = document.querySelector("#state-fair");

eventHub.addEventListener('click', event => {
    if (event.target.id === 'rideTicket') {
        const rideEvent = new CustomEvent("rideTicketBought");
        eventHub.dispatchEvent(rideEvent);
    }
    else if (event.target.id ==='foodTicket') {
        const foodEvent = new CustomEvent('foodTicketBought');
        eventHub.dispatchEvent(foodEvent);
    }
    else if (event.target.id ==='gameTicket') {
        const gameEvent = new CustomEvent('gameTicketBought');
        eventHub.dispatchEvent(gameEvent);
    }
    else if (event.target.id==='showTicket') {
        const showEvent = new CustomEvent('showTicketBought');
        eventHub.dispatchEvent(showEvent);
    }
    else if (event.target.id==='fullPackage') {
        const mainEvent = new CustomEvent('supremeTicketBought');
        eventHub.dispatchEvent(mainEvent);
    }
    
})

export const TicketBooth = () => {
    contentTarget.innerHTML += `
        <div class="ticketBooth">
            <button id="rideTicket">Ride Ticket</button>
            <button id="foodTicket">Food Ticket</button>
            <button id="gameTicket">Game Ticket</button>
            <button id="showTicket">Sideshow Ticket</button>
            <button id="fullPackage">Full Package Ticket</button>
        </div>
    `
}

