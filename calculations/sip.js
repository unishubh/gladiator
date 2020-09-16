const calculateResult = (
  principle,
  numberOfInstallmentsPerYear,
  interest,
  timeInYears,
  reductionMonths = 0
) => {
  const actualRate = interest / numberOfInstallmentsPerYear / 100;
  const installments = numberOfInstallmentsPerYear * timeInYears - reductionMonths;
  const calc =
    ((principle * (Math.pow(1 + actualRate, installments) - 1)) / actualRate) * (1 + actualRate);
  return calc;
};

const calculateEmi = (amount, interest, timeInYears) => {
  interest /= 12;
  const den = Math.pow(1 + interest / 100, timeInYears * 12) - 1;
  const calc = (((amount * interest) / 100) * Math.pow(1 + interest / 100, timeInYears * 12)) / den;
  return calc;
};

const calculateLumpSum = (principle, interest, timeInYears) => {
  const calc = principle * Math.pow(1 + interest / 100, timeInYears);
  console.log(calc);
  return calc;
};

const calculateWealth = (principle, numberOfInstallmentsPerYear, interest, timeInYears) => {
  const actualRate = interest / numberOfInstallmentsPerYear / 100;
  const installments = numberOfInstallmentsPerYear * timeInYears;
  const calc =
    (principle * actualRate) / ((Math.pow(1 + actualRate, installments) - 1) * (1 + actualRate));
  console.log(calc);
  return calc;
};

const calculateInsurance = (principle, cage, rage) => {
  const inflationRate = 6;
  const actualRate = inflationRate / 12 / 100;
  const installments = (rage - cage) * 12;
  const calc =
    ((principle * (Math.pow(1 + actualRate, installments) - 1)) / actualRate) * (1 + actualRate);
  return calc;
};

export { calculateResult, calculateEmi, calculateLumpSum, calculateWealth, calculateInsurance };
