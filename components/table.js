import React from 'react';
import { TextInput, View, StyleSheet, Modal, ScrollView, Text, Dimensions } from 'react-native';
import Slider from 'react-native-slider';
import { Table, TableWrapper, Row } from 'react-native-table-component';
import { theme, config } from '../constants';
import { SliderLabel } from './SliderLabel';
import { SliderComp } from './slider';
import { ApproximateNumberInWords } from 'number-formatter';

import { calculateResult, calculateLumpSum } from '../calculations/sip';
import { BarChart } from './barChart';

const TableComp = (props) => {
  const tableHead = ['Duration', 'Value'];
  const tableData = [];
  const graphData = [];
  for (let i = 0; i < 6; i += 1) {
    const rowData = [];
    const curData = {
      x: (i + 1) * 5,
      y:
        props.calculation === 'sip'
          ? calculateResult(props.inputValue, 12, props.rateValue, (i + 1) * 5)
          : calculateLumpSum(props.inputValue, props.rateValue, (i + 1) * 5),
    };
    for (let j = 0; j < 2; j += 1) {
      if (j === 0) {
        rowData.push(`${(i + 1) * 5} years`);
      } else
        rowData.push(
          props.calculation === 'sip'
            ? ApproximateNumberInWords(
                calculateResult(props.inputValue, 12, props.rateValue, (i + 1) * 5)
              )
            : ApproximateNumberInWords(
                calculateLumpSum(props.inputValue, props.rateValue, (i + 1) * 5)
              )
        );
    }
    graphData.push(curData);
    tableData.push(rowData);
  }
  return (
    <View>
      <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
        <Row data={tableHead} style={styles.header} textStyle={styles.headerText} />
      </Table>
      <ScrollView style={styles.dataWrapper} contentContainerStyle={{ flexGrow: 1 }}>
        <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
          {tableData.map((rowData, index) => (
            <Row
              key={index}
              data={rowData}
              style={[styles.row, index % 2 && { backgroundColor: 'white' }]}
              textStyle={styles.text}
            />
          ))}
        </Table>
      </ScrollView>
      <BarChart graphicData={graphData} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  header: { height: 50, backgroundColor: theme.colors.tertiary },
  text: { textAlign: 'center', fontWeight: '100' },
  dataWrapper: { marginTop: -1, flex: 1 },
  row: { height: 40, backgroundColor: '#E7E6E1' },
  headerText: { textAlign: 'center', fontWeight: 'bold', color: 'white' },
});
export { TableComp };
