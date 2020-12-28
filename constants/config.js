const sliderMeasures = {
  wealth: {
    maxAmount: 200000000,
    minAmount: 5000000,
    amountStep: 1000000,
    minPeriod: 1,
    maxPeriod: 50,
    periodStep: 1,
    minRoi: 1,
    maxRoi: 40,
    roiStep: 1,
    getWealthStep: (wealth) => {
      const wealthFirstChange = 20000000;
      const wealthStepBeforeFirstChange = 1000000;
      const wealthStepAfterFirstChange = 5000000;
      if (wealth < wealthFirstChange) return wealthStepBeforeFirstChange;
      return wealthStepAfterFirstChange;
    },
    getPeriodStep: (period) => {
      const periodFirstChange = 20;
      const periodStepBeforeFirstChange = 1;
      const periodStepAfterFirstChange = 5;
      if (period <= periodFirstChange) return periodStepBeforeFirstChange;
      return periodStepAfterFirstChange;
    },
    
  },
  sip: {
    minAmount: 1000,
    maxAmount: 200000,
    amountStep: 1000,
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
    minInflationRate:1,
    maxInflationRate:18,
  },
  lumpsum: {
    minAmount: 100000,
    maxAmount: 50000000,
    amountStep: 100000,
    minPeriod: 1,
    maxPeriod: 50,
    periodStep: 1,
    minReturn: 1,
    maxReturn: 40,
    roiStep: 10000,
    getAmountStep: (amount) => {
      const amountFirstChange = 1000000;
      const amountSecondChange = 5000000;
      const amountStepBeforeFirstChange = 50000;
      const amountStepAfterFirstChange = 100000;
      const amountStepAfterSecondChange = 500000;
      if (amount <= amountFirstChange) return amountStepBeforeFirstChange;
      if (amount > amountFirstChange && amount <= amountSecondChange)
        return amountStepAfterFirstChange;
      return amountStepAfterSecondChange;
    },
  },
  emi: {
    minAmount: 100000,
    maxAmount: 50000000,
    amountStep: 100000,
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
