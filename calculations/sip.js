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

const calculateEmi = (amount, interest, timeInYears) => {
  interest = interest / 12;
  den = Math.pow(1 + interest / 100, timeInYears * 12) - 1;
  calc =
    (((amount * interest) / 100) *
      Math.pow(1 + interest / 100, timeInYears * 12)) /
    den;
  return calc;
};

const calculateLumpSum = (principle, interest, timeInYears) => {
  calc = principle * Math.pow(1 + interest / 100, timeInYears);
  console.log(calc);
  return calc;
};

const calculateWealth = (
  principle,
  numberOfInstallmentsPerYear,
  interest,
  timeInYears
) => {
  let actualRate = interest / numberOfInstallmentsPerYear / 100;
  let installments = numberOfInstallmentsPerYear * timeInYears;
  calc =
    (principle * actualRate) /
    ((Math.pow(1 + actualRate, installments) - 1) * (1 + actualRate));
  console.log(calc);
  return calc;
};

let calculateInsurance = (principle, cage, rage) => {
  let inflationRate = 6;
  let actualRate = inflationRate / 12 / 100;
  let installments = (rage - cage) * 12;
  calc =
    ((principle * (Math.pow(1 + actualRate, installments) - 1)) / actualRate) *
    (1 + actualRate);
  return calc;
};

export {
  calculateResult,
  calculateEmi,
  calculateLumpSum,
  calculateWealth,
  calculateInsurance,
};
