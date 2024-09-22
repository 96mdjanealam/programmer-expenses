// Utilities
function getInputNumberById(id) {
    const value = document.getElementById(id).value;


    if (value === '') {
        return 0;
    }

    const number = parseFloat(value);

    if (isNaN(number) || number < 0) {
        return false;
    }

    return number;
}

function showSection(id) {
    document.getElementById("assistant-section").classList.add("hidden");
    document.getElementById("history-section").classList.add("hidden");

    document.getElementById(id).classList.remove("hidden");
}

// Tab actions
document.getElementById("assistant").addEventListener("click", function(){
    showSection("assistant-section");
});
document.getElementById("history").addEventListener("click", function(){
    showSection("history-section");
});

// Calculate button action
document.getElementById("calculate").addEventListener("click", function () {
    const income = getInputNumberById("income");
    const software = getInputNumberById("software");
    const courses = getInputNumberById("courses");
    const internet = getInputNumberById("internet");

    if (income === false || software === false || courses === false || internet === false) {
        alert("Please enter valid inputs.");
        return;
    }

    const totalExpenses = software + courses + internet;
    const balance = income - totalExpenses;

    document.getElementById("total-expenses").innerText = totalExpenses;
    document.getElementById("balance").innerText = balance;
});

// Calculate Savings button action
document.getElementById("calculate-saving").addEventListener("click", function () {
    const savingPercentage = getInputNumberById("saving");

    if (savingPercentage === false) {
        return alert ("Please enter valid inputs.");
    }

    const balance = parseFloat(document.getElementById("balance").innerText);
    const savingAmount = (savingPercentage * balance) / 100;

    document.getElementById("saving-amount").innerText = savingAmount;

    const remainingBalance = balance - savingAmount;
    
    document.getElementById("remaining-balance").innerText = remainingBalance;

    const income = getInputNumberById("income");
    const expenses = parseFloat(document.getElementById("total-expenses").innerText);

    let currentDate = new Date();
    let cDate = currentDate.toLocaleDateString();
    let cTime = currentDate.toLocaleTimeString();

    const newDiv = document.createElement("div");
    
    newDiv.innerHTML = `
        <p class="text-sm">Date: ${cDate} Time: ${cTime}</p>
        <p>Income: <span class="font-bold">${income}</span> Taka</p>
        <p>Expenses: <span class="font-bold">${expenses}</span> Taka</p>
        <p>Saving: <span class="font-bold">${savingAmount}</span> Taka</p>
        <p>Balance: <span class="font-bold">${remainingBalance}</span> Taka</p>
    `
    document.getElementById("history-items").appendChild(newDiv);

    document.getElementById("no-history").classList.add("hidden");
})
