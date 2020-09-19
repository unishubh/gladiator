import React from 'react';
import { View, StyleSheet } from 'react-native';
import { GetNumberWithCommas } from 'number-formatter';
import { config } from '../constants';
import { SliderLabel } from './SliderLabel';
import { SliderComp } from './slider';

const Wealth = (props) => {
  return (
    <View>
      <SliderLabel
        value={GetNumberWithCommas(props.investment.toFixed(0))}
        label="Wealth Desired"
        caption="Rs."
        max={config.sliderMeasures.wealth.maxAmount}
        onChange={props.setInvestment}
      />
      <SliderComp
        min={config.sliderMeasures.wealth.minAmount}
        max={config.sliderMeasures.wealth.maxAmount}
        value={props.investment}
        onChange={props.setInvestment}
        step={config.sliderMeasures.wealth.amountStep}
      />
      <SliderLabel
        value={props.period.toFixed(0)}
        caption="years"
        max={config.sliderMeasures.wealth.maxPeriod}
        onChange={props.setPeriod}
        label="Tenure"
      />
      <SliderComp
        min={config.sliderMeasures.wealth.minPeriod}
        max={config.sliderMeasures.wealth.maxPeriod}
        value={props.period}
        onChange={props.setPeriod}
        step={config.sliderMeasures.wealth.periodStep}
      />
      <SliderLabel
        value={props.returns.toFixed(0)}
        caption="%"
        onChange={props.setReturn}
        max={config.sliderMeasures.wealth.maxRoi}
        label="Expected Returns (annual)"
      />
      <SliderComp
        min={config.sliderMeasures.wealth.minRoi}
        max={config.sliderMeasures.wealth.maxRoi}
        value={props.returns}
        onChange={props.setReturn}
        step={config.sliderMeasures.wealth.roiStep}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
export { Wealth };
