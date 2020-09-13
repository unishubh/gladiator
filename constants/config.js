const sliderMeasures = {
  wealth: {
    maxAmount: 200000000,
    minAmount: 5000000,
    amountStep: 1000000,
    minPeriod: 35,
    maxPeriod: 70,
    periodStep: 1,
    minRoi: 1,
    maxRoi: 40,
    roiStep: 1,
  },
  sip: {
    minAmount: 500,
    maxAmount: 200000,
    amountStep: 100,
    minPeriod: 1,
    maxPeriod: 50,
    periodStep: 1,
    minReturn: 1,
    maxReturn: 40,
    roiStep: 1,
    getAmountStep: (amount) => {
      const amountFirstChange = 25000;
      const amountStepbeforeFirstChange = 1000;
      const amountStepafterFirstChange = 5000;
      if (amount < amountFirstChange) return amountStepbeforeFirstChange;
      return amountStepafterFirstChange;
    },
  },
  lumpsum: {
    minAmount: 10000,
    maxAmount: 20000000,
    amountStep: 100,
    minPeriod: 1,
    maxPeriod: 50,
    periodStep: 1,
    minReturn: 1,
    maxReturn: 40,
    roiStep: 1,
    getAmountStep: (amount) => {
      const amountFirstChange = 200000;
      const amountSecondChange = 1000000;
      const amountStepBeforeFirstChange = 10000;
      const amountStepAfterFirstChange = 50000;
      const amountStepAfterSecondChange = 100000;
      if (amount < amountFirstChange) return amountStepBeforeFirstChange;
      if (amount > amountFirstChange && amount < amountSecondChange)
        return amountStepAfterFirstChange;
      return amountStepAfterSecondChange;
    },
  },
  emi: {
    minAmount: 100000,
    maxAmount: 20000000,
    amountStep: 100,
    minPeriod: 1,
    maxPeriod: 50,
    periodStep: 1,
    minReturn: 1,
    maxReturn: 40,
    roiStep: 1,
    getAmountStep: (amount) => {
      const amountFirstChange = 2500000;
      const amountStepBeforeFirstChange = 100000;
      const amountStepAfterFirstChange = 500000;
      if (amount < amountFirstChange) return amountStepBeforeFirstChange;
      return amountStepAfterFirstChange;
    },
  },
};

// eslint-disable-next-line import/prefer-default-export
export { sliderMeasures };
