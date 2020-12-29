const contentTarget = document.querySelector(".food")
const eventHub = document.querySelector("#state-fair")

export const FoodTicketHolder = () => {
eventHub.addEventListener('foodTicketBought', (customEvent) => {
    contentTarget.innerHTML += `<div class="person eater"></div>`
});
}