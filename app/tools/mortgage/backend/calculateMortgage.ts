export type MortgageInput = {
  principal: number;
  annualRate: number;
  years: number;
};

export type MortgageResult = {
  monthlyPayment: number;
  totalPayments: number;
  totalInterest: number;
};

export function calculateMortgage({
  principal,
  annualRate,
  years,
}: MortgageInput): MortgageResult {
  const monthlyRate = annualRate / 100 / 12;
  const payments = years * 12;

  if (monthlyRate === 0) {
    const monthlyPayment = principal / payments;

    return {
      monthlyPayment,
      totalPayments: monthlyPayment * payments,
      totalInterest: 0,
    };
  }

  const monthlyPayment =
    (principal *
      monthlyRate *
      Math.pow(1 + monthlyRate, payments)) /
    (Math.pow(1 + monthlyRate, payments) - 1);

  const totalPayments = monthlyPayment * payments;

  return {
    monthlyPayment,
    totalPayments,
    totalInterest: totalPayments - principal,
  };
}
