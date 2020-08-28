import React from "react";
import { TextInput, View, StyleSheet } from "react-native";
import Slider from "react-native-slider";
import { theme, config } from "../constants";
import { SliderLabel } from "./SliderLabel";
import { SliderComp } from "./slider";

const Wealth = (props) => {
  return (
    <View>
      <SliderLabel
        value={props.investment.toFixed(0)}
        label="Wealth Desired"
        caption="Rs."
        max={config.sliderMeasures.maxInvestment}
        onChange={props.setInvestment}
      ></SliderLabel>
      <SliderComp
        min={config.sliderMeasures.minInvestment}
        max={config.sliderMeasures.maxInvestment}
        value={props.investment}
        onChange={props.setInvestment}
        step={config.sliderMeasures.amountStep}
      ></SliderComp>
      <SliderLabel
        value={props.period.toFixed(0)}
        caption="years"
        max={config.sliderMeasures.maxPeriod}
        onChange={props.setPeriod}
        label="Tenure"
      ></SliderLabel>
      <SliderComp
        min={config.sliderMeasures.minPeriod}
        max={config.sliderMeasures.maxPeriod}
        value={props.period}
        onChange={props.setPeriod}
        step={config.sliderMeasures.timeStep}
      ></SliderComp>
      <SliderLabel
        value={props.returns.toFixed(0)}
        caption="%"
        onChange={props.setReturn}
        max={config.sliderMeasures.maxReturn}
        label="Expected Returns (annual)"
      ></SliderLabel>
      <SliderComp
        min={config.sliderMeasures.minReturn}
        max={config.sliderMeasures.maxReturn}
        value={props.returns}
        onChange={props.setReturn}
        step={config.sliderMeasures.roiStep}
      ></SliderComp>
    </View>
  );
};

const styles = StyleSheet.create({});
export { Wealth };
