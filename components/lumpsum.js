import React from 'react';
import { View, StyleSheet } from 'react-native';
import { GetNumberWithCommas } from 'number-formatter';
import { config } from '../constants';
import { SliderLabel } from './SliderLabel';
import { SliderComp } from './slider';

const Lumpsum = (props) => {
  return (
    <View>
      <SliderLabel
        value={GetNumberWithCommas(props.investment.toFixed(0))}
        onChange={props.setInvestment}
        label="Total One Tme Investment"
        max={config.sliderMeasures.lumpsum.maxAmount}
        caption="Rs."
      />
      <SliderComp
        min={config.sliderMeasures.lumpsum.minAmount}
        max={config.sliderMeasures.lumpsum.maxAmount}
        value={props.investment}
        onChange={props.setInvestment}
        step={config.sliderMeasures.lumpsum.getAmountStep(props.investment.toFixed(0))}
      />
      <SliderLabel
        value={props.period.toFixed(0)}
        label="Investment Period"
        caption="years"
        max={config.sliderMeasures.lumpsum.maxPeriod}
        onChange={props.setPeriod}
      />
      <SliderComp
        min={config.sliderMeasures.lumpsum.minPeriod}
        max={config.sliderMeasures.lumpsum.maxPeriod}
        value={props.period}
        onChange={props.setPeriod}
        step={config.sliderMeasures.lumpsum.periodStep}
      />
      <SliderLabel
        value={props.returns.toFixed(0)}
        label="Expected Returns (annual)"
        caption="%"
        max={config.sliderMeasures.lumpsum.maxReturn}
        onChange={props.setReturn}
      />
      <SliderComp
        min={config.sliderMeasures.lumpsum.minReturn}
        max={config.sliderMeasures.lumpsum.maxReturn}
        value={props.returns}
        onChange={props.setReturn}
        step={config.sliderMeasures.lumpsum.roiStep}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
export { Lumpsum };
