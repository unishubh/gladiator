import React from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  Modal,
  ScrollView,
  Text,
  Dimensions,
  Button,
  TouchableOpacity,
} from 'react-native';
import { theme, config } from '../constants';

import { TableComp } from './table';
import { BarChart } from './barChart';

const { width, height } = Dimensions.get('window');

const ModalComp = (props) => {
  return (
    <Modal
      animationType="slide"
      // eslint-disable-next-line react/destructuring-assignment
      // eslint-disable-next-line react/prop-types
      visible={props.futureReturn}
      // eslint-disable-next-line react/prop-types
      onRequestClose={() => props.setFutureReturn()}
      transparent
    >
      <View style={styles.modalContainer}>
        <Text style={{ margin: 10 }}>
          Calculations based on investment of Rs. {props.inputValue} at {props.rateValue}% return
        </Text>
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          showsVerticalScrollIndicator
          style={{ marginVertical: 10 }}
        >
          <View style={{ margin: 10 }}>
            <TableComp
              inputValue={props.inputValue}
              rateValue={props.rateValue}
              calculation={props.calculation}
            />
          </View>
          <Text style={{ margin: 5,color:"gray",}}>
          *Inflation was not considered while doing the calculations
        </Text>
        </ScrollView>
        <TouchableOpacity style={styles.modalBtn} onPress={() => props.setFutureReturn()}>
          <Text style={styles.modalBtnText}>Got it!</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: 'white',
    marginTop: height / 4,
    borderColor: theme.colors.tertiary,
    borderWidth: 3,
    flex: 1,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    paddingRight: 10,
    paddingLeft: 10,
  },
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
export { ModalComp };
