import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text,Dimensions } from 'react-native';
import { GetNumberWithCommas } from 'number-formatter';
import { config,theme } from '../constants';
import { SliderLabel } from './SliderLabel';
import { SliderComp } from './slider';
import { ModalComp } from './modal';
const { width, height } = Dimensions.get('window');

const Lumpsum = (props) => {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };
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
      <TouchableOpacity style={styles.modalBtn} onPress={() => setShowModal(true)}>
        <Text style={styles.modalBtnText}>Expected values for next 30 years</Text>
      </TouchableOpacity>
      <ModalComp
        inputValue={props.investment}
        rateValue={props.returns}
        futureReturn={showModal}
        setFutureReturn={closeModal}
        calculation="lumpsum"
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
export { Lumpsum };
