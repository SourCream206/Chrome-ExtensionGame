let money = 0;

document.addEventListener("DOMContentLoaded", () => {
    const moneyDisplay = document.getElementById("money");
    const button = document.getElementById("clickBtn");

    button.addEventListener("click", () => {
        money++;
        moneyDisplay.textContent = money;
    });
});