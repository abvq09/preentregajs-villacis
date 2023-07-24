//base para calculo con funcion
function calculateMonthlyPayment(loanAmount, anualInterestRate, termMonths) {
    const monthlyInterestRate = anualInterestRate / 100 / 12;
    const monthlyPayment = (loanAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -termMonths));
    return monthlyPayment.toFixed(2);
}

//solicitud de datos , aqui uso prompt
let loanAmount, anualInterestRate, termMonths;

while (isNaN(loanAmount) || isNaN(anualInterestRate) || isNaN(termMonths) || loanAmount <= 0 || anualInterestRate <= 0 || termMonths <= 0) {
    const loanAmountInput = prompt("Ingrese el monto del préstamo ($):");
    const anualInterestRateInput = prompt("Ingrese la tasa de interés anual (%):");
    const termMonthsInput = prompt("Ingrese el plazo del préstamo (meses):");

    loanAmount = parseFloat(loanAmountInput);
    anualInterestRate = parseFloat(anualInterestRateInput);
    termMonths = parseInt(termMonthsInput);

//no permitir avanzar hasta tener datos válidos y numericos
    if (isNaN(loanAmount) || isNaN(anualInterestRate) || isNaN(termMonths) || loanAmount <= 0 || anualInterestRate <= 0 || termMonths <= 0) {
        alert("Debes ingresar valores numéricos válidos");
    }
}

const monthlyPayment = calculateMonthlyPayment(loanAmount, anualInterestRate, termMonths);
alert(`Cuota mensual a pagar: $${monthlyPayment}`);