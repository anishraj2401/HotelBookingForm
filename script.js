function updateSelectColor(selectElement) {
    if (selectElement.value === 'disabled selected') {
        selectElement.style.color = '#dde3e8'; // Change the color to your desired color
    } else {
        selectElement.style.color = '#000'; // Placeholder color
    }
}

const form = document.getElementById("bookingForm");
const roomTypeSelect = document.getElementById("roomType");
const amenitiesSelect = document.getElementById("amenities");
const advanceAmountInput = document.getElementById("advanceAmount");
const totalRoomCostSpan = document.getElementById("totalRoomCost");
const totalAmenitiesCostSpan = document.getElementById("totalAmenitiesCost");
const totalCostSpan = document.getElementById("totalCost");
const balanceSpan = document.getElementById("balance");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const roomRate = roomTypeSelect.value === "delux" ? 2500 : 4000;
    const amenitiesCost = [...amenitiesSelect.selectedOptions].reduce((total, option) => total + (option.value === "ac" ? 1000 : 300), 0);
    const totalRoomCost = roomRate * parseInt(document.getElementById("totalDays").value);
    const totalAmenitiesCost = amenitiesCost * parseInt(document.getElementById("totalDays").value);
    const totalCost = totalRoomCost + totalAmenitiesCost;
    const balance = totalCost - parseInt(advanceAmountInput.value);

    totalRoomCostSpan.textContent = totalRoomCost;
    totalAmenitiesCostSpan.textContent = totalAmenitiesCost;
    totalCostSpan.textContent = totalCost;
    balanceSpan.textContent = balance;
});