import React, { useState } from 'react';
import { View, StyleSheet, Button, TouchableOpacity, Dimensions, Text } from 'react-native';
import { GetNumberWithCommas } from 'number-formatter';
import { config, theme } from '../constants';
import { SliderLabel } from './SliderLabel';
import { SliderComp } from './slider';
import Accordian from './accordian';
import data from '../data/sip.json';
import { ModalComp } from './modal';
import {SwitchComp} from './switch'

const { width, height } = Dimensions.get('window');

const renderAccordians = () => {
  const items = [];
  data.map((item) => {
    items.push(<Accordian key={item.title} title={item.title} data={item.data} />);
  });

  return items;
};

const Sip = (props) => {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };

  const showInflationSlider=()=>{
    if(props.inflationSwitch){
      return(
        <View>
        <SliderLabel
          value={props.inflationRate.toFixed(0)}
          label="Expected Inflation Rate"
          caption="%"
          onChange={props.setInflationRate}
          max={config.sliderMeasures.sip.maxInflationRate}
        />
        <SliderComp
          min={config.sliderMeasures.sip.minInflationRate}
          max={config.sliderMeasures.sip.maxInflationRate}
          value={props.inflationRate}
          onChange={props.setInflationRate}
        />
        </View>
      )
    }
    
    return null
  }

  return (
    <View>
      <View>
        <SwitchComp
          inflationMode={props.inflationSwitch}
        setInflationMode={props.setInflationSwitch}
        />
        <SliderLabel
          value={GetNumberWithCommas(props.investment.toFixed(0))}
          onChange={props.setInvestment}
          label="Monthly Investment"
          caption="Rs."
          max={config.sliderMeasures.sip.maxAmount}
        />
        <SliderComp
          min={config.sliderMeasures.sip.minAmount}
          max={config.sliderMeasures.sip.maxAmount}
          value={props.investment}
          onChange={props.setInvestment}
          step={config.sliderMeasures.sip.amountStep}
          showToolTip
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
        {showInflationSlider()}

      </View>
      <TouchableOpacity style={styles.modalBtn} onPress={() => setShowModal(true)}>
        <Text style={styles.modalBtnText}>Expected values for next 30 years</Text>
      </TouchableOpacity>

      <ModalComp
        inputValue={props.investment.toFixed(0)}
        rateValue={props.returns - (props.inflationSwitch ? props.inflationRate.toFixed(0) : 0)}
        futureReturn={showModal}
        inflationMode={props.inflationSwitch}
        inputValue={props.investment}
        rateValue={props.returns}
        futureReturn={showModal}
        setFutureReturn={closeModal}
      />
    </View>
  );       

};

const styles = StyleSheet.create({
  modalBtn: {
    backgroundColor: theme.colors.tertiary,
    width: width / 1.25,
    alignItems: 'center',
    height: theme.sizes.base * 3,
    alignSelf: 'center',
    margin: theme.sizes.base,
    justifyContent: 'center',
  },
  modalBtnText: {
    color: 'white',
    fontSize: theme.sizes.font,
    fontWeight: 'bold',
  },
});
export { Sip };
