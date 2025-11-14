export function calculateInvestmentResults({ initialInvestment, duration, annualInvestment, expectedReturn }) {

  const yearlyData = [];

  let valueEndOfYear = initialInvestment;
  let investedCapital = initialInvestment;
  let interestSum = 0;

  for (let year = 1; year <= duration; year++) {

    // 1. Intérêts calculés AVANT ajout de l'investissement annuel
    const interest = valueEndOfYear * (expectedReturn / 100);

    // 2. Mise à jour de la valeur de fin d'année
    valueEndOfYear += interest + annualInvestment;

    // 3. Mise à jour du capital investi
    investedCapital += annualInvestment;

    // 4. Mise à jour du cumul d'intérêts
    interestSum += interest;

    yearlyData.push({
      year,
      interest: Math.round(interest),
      valueEndOfYear: Math.round(valueEndOfYear),
      annualInvestment,
      investedCapital,
      interestSum: Math.round(interestSum)
    });
  }

  return yearlyData;
}


// The browser-provided Intl API is used to prepare a formatter object
// This object offers a "format()" method that can be used to format numbers as currency
// Example Usage: formatter.format(1000) => yields "$1,000"
export const formatter = new Intl.NumberFormat('fr-FR', {
  style: 'currency',
  currency: 'EUR',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});
