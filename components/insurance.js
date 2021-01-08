import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import Slider from 'react-native-slider';
import { theme, config } from '../constants';
import { SliderLabel } from './SliderLabel';
import { SliderComp } from './slider';

const Insurance = (props) => {
  return (
    <View>
      <SliderLabel
        value={props.expense.toFixed(0)}
        label="Monthly expense"
        caption="Rs."
        max={config.sliderMeasures.maxExpense}
        onChange={props.setExpense}
      />
      <SliderComp
        min={config.sliderMeasures.minExpense}
        max={config.sliderMeasures.maxExpense}
        step={config.sliderMeasures.amountStep}
        value={props.expense}
        onChange={props.setExpense}
      />
      <SliderLabel
        value={props.age.toFixed(0)}
        caption="years"
        onChange={props.setAge}
        max={config.sliderMeasures.maxAge}
        label="Current age"
      />
      <SliderComp
        min={config.sliderMeasures.minAge}
        max={config.sliderMeasures.maxAge}
        step={config.sliderMeasures.timeStep}
        value={props.age}
        onChange={props.setAge}
      />
      <SliderLabel
        value={props.retirementAge.toFixed(0)}
        caption="years"
        onChange={props.setRetirementAge}
        max={config.sliderMeasures.maxRetirementAge}
        label="Desired retirement age"
      />
      <SliderComp
        min={config.sliderMeasures.minRetirementAge}
        max={config.sliderMeasures.maxRetirementAge}
        step={config.sliderMeasures.timeStep}
        value={props.retirementAge}
        onChange={props.setRetirementAge}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
export { Insurance };
