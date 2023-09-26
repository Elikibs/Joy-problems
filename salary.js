// readline module for inputing the user's inputs
const readline = require("readline");

function calculateNetSalary() {
  const taxRates = [
    { upperLimit: 24000, rate: 0.1 },
    { upperLimit: 32333, rate: 0.25 },
    { upperLimit: 40467, rate: 0.3 },
    { upperLimit: Infinity, rate: 0.35 },
  ];

  const nhifRates = [
    { upperLimit: 5999, amount: 150 },
    { upperLimit: 7999, amount: 300 },
    // Add more rate tiers as per NHIF rates from the link
  ];

  const nssfRate = 0.06; // Replace with actual NSSF rate

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("Enter basic salary: ", function (basicSalaryInput) {
    rl.question("Enter benefits: ", function (benefitsInput) {
      rl.close();

      const basicSalary = parseFloat(basicSalaryInput);
      const benefits = parseFloat(benefitsInput);

      const grossSalary = basicSalary + benefits;

      let payee = 0;
      for (const rate of taxRates) {
        if (grossSalary <= rate.upperLimit) {
          payee = grossSalary * rate.rate;
          break;
        }
      }

      let nhifDeductions = 0;
      for (const rate of nhifRates) {
        if (grossSalary <= rate.upperLimit) {
          nhifDeductions = rate.amount;
          break;
        }
      }

      const nssfDeductions = grossSalary * nssfRate;
      const netSalary = grossSalary - payee - nhifDeductions - nssfDeductions;

      console.log(`Net Salary: KES ${netSalary.toFixed(2)}`);
    });
  });
}

calculateNetSalary();
