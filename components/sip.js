import React from 'react';
import { View, StyleSheet } from 'react-native';
import { numberWithCommas } from '../utils/formatter';
import { config } from '../constants';
import { SliderLabel } from './SliderLabel';
import { SliderComp } from './slider';
import Accordian from './accordian';
import data from '../data/sip.json';

const renderAccordians = () => {
  const items = [];
  data.map((item) => {
    items.push(<Accordian key={item.title} title={item.title} data={item.data} />);
  });

  return items;
};

const Sip = (props) => {
  return (
    <View>
      <View>
        <SliderLabel
          value={numberWithCommas(props.investment.toFixed(0))}
          onChange={props.setInvestment}
          label="Monthly Investment"
          caption="Rs."
          max={config.sliderMeasures.sip.maxAmount}
        />
        <SliderComp
          step={config.sliderMeasures.sip.getAmountStep(props.investment.toFixed(0))}
          min={config.sliderMeasures.sip.minAmount}
          max={config.sliderMeasures.sip.maxAmount}
          value={props.investment}
          onChange={props.setInvestment}
        />
        <SliderLabel
          value={props.period.toFixed(0)}
          label="Investment Period"
          caption="years"
          onChange={props.setPeriod}
          max={config.sliderMeasures.sip.maxPeriod}
        />
        <SliderComp
          step={config.sliderMeasures.sip.periodStep}
          min={config.sliderMeasures.sip.minPeriod}
          max={config.sliderMeasures.sip.maxPeriod}
          value={props.period}
          onChange={props.setPeriod}
        />
        <SliderLabel
          value={props.returns}
          label="Expected Returns (annual)"
          caption="%"
          onChange={props.setReturn}
          max={config.sliderMeasures.sip.maxReturn}
        />
        <SliderComp
          step={config.sliderMeasures.sip.roiStep}
          min={config.sliderMeasures.sip.minReturn}
          max={config.sliderMeasures.sip.maxReturn}
          value={props.returns}
          onChange={props.setReturn}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});
export { Sip };
