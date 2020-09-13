import React from 'react';
import { View, StyleSheet } from 'react-native';
import { numberWithCommas } from '../utils/formatter';
import { config } from '../constants';
import { SliderLabel } from './SliderLabel';
import { SliderComp } from './slider';

const Emicalc = (props) => {
  return (
    <View>
      <SliderLabel
        value={numberWithCommas(props.investment.toFixed(0))}
        label="Loan Amount"
        caption="Rs."
        max={config.sliderMeasures.emi.maxAmount}
        onChange={props.setInvestment}
      />
      <SliderComp
        min={config.sliderMeasures.emi.minAmount}
        max={config.sliderMeasures.emi.maxAmount}
        value={props.investment}
        step={config.sliderMeasures.emi.getAmountStep(props.investment.toFixed(0))}
        onChange={props.setInvestment}
      />
      <SliderLabel
        value={props.period.toFixed(0)}
        caption="years"
        onChange={props.setPeriod}
        max={config.sliderMeasures.emi.maxPeriod}
        label="Tenure"
      />
      <SliderComp
        min={config.sliderMeasures.emi.minPeriod}
        max={config.sliderMeasures.emi.maxPeriod}
        value={props.period}
        onChange={props.setPeriod}
        step={config.sliderMeasures.emi.periodStep}
      />
      <SliderLabel
        value={props.returns.toFixed(0)}
        caption="%"
        onChange={props.setReturn}
        max={config.sliderMeasures.emi.maxReturn}
        label="Interest Rate (annual)"
      />
      <SliderComp
        min={config.sliderMeasures.emi.minReturn}
        max={config.sliderMeasures.emi.maxReturn}
        value={props.returns}
        onChange={props.setReturn}
        step={config.sliderMeasures.emi.roiStep}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
export { Emicalc };
