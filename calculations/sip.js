const calculateResult = (
  principle,
  numberOfInstallmentsPerYear,
  interest,
  timeInYears,
  reductionMonths = 0
) => {
  let actualRate = interest / numberOfInstallmentsPerYear / 100;
  let installments =
    numberOfInstallmentsPerYear * timeInYears - reductionMonths;
  calc =
    ((principle * (Math.pow(1 + actualRate, installments) - 1)) / actualRate) *
    (1 + actualRate);
  return calc;
};

export { calculateResult };
