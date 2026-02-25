let money = 0;

const moneyDisplay = document.getElementById("money");
const button = document.getElementById("clickBtn");

// 1️⃣ Load saved money when popup opens
chrome.storage.local.get(["money"], (result) => {
    if (result.money !== undefined) {
        money = result.money;
        moneyDisplay.textContent = money;
    }
});

// 2️⃣ When button clicked, update + save
button.addEventListener("click", () => {
    money++;
    moneyDisplay.textContent = money;

    // Save to Chrome storage
    chrome.storage.local.set({ money: money });
});