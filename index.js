
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

    document.getElementById("balance").innerText = balance;
});

document.getElementById("calculate-saving").addEventListener("click", function () {
    const savingPercentage = getInputNumberById("saving");
    const balance = parseFloat(document.getElementById("balance").innerText);
    const savingAmount = (savingPercentage * balance) / 100;
    document.getElementById("saving-amount").innerText = savingAmount;
    const remainingBalance = balance - savingAmount;
    document.getElementById("remaining-balance").innerText = remainingBalance;
})
