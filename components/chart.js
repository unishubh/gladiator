import React from 'react';
import { VictoryPie, VictoryLabel } from 'victory-native';
import { View, StyleSheet, Dimensions } from 'react-native';
import Svg from 'react-native-svg';
import { ApproximateNumberInWords } from 'number-formatter';
import { theme } from '../constants';

import 'intl';
import 'intl/locale-data/jsonp/en';

const { width, height } = Dimensions.get('window');

const numberFormat = (value) =>
  new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
  }).format(value);

/*
renderTable(tableData){
    return (
    <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
    {

      //  add table data here

      tableData.map((rowData, index) => (
        <Row
          key={index}
          data={rowData}

          style={[styles.row, index%2 && {backgroundColor: '#F7F6E7'}]}
          textStyle={styles.text}
        />
      ))
    }
  </Table>
    )
}
*/
const PieChart = (props) => {
  let res = 0;
  let label = 'Total';
  if (props.active === 'EMI' || props.active === 'Wealth') {
    label = 'Per Month';
    res = props.graphicData[2].result;
    props.graphicData.pop();
  } else {
    res = props.graphicData[1].y + props.graphicData[0].y;
  }

  return (
    <View
      style={{
        flex: 1,

        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -height / 6,
      }}
    >
      <Svg width={width} height={300}>
        <VictoryPie
          data={props.graphicData}
          colorScale={[theme.colors.secondary, theme.colors.tertiary]}
          animate={{
            duration: 500,
          }}
          width={width}
          height={300}
          innerRadius={50}
          radius={90}
          labels={({ datum }) =>
            `${datum.x}\n \u20b9 ${datum.y.toFixed(0)<0?"-":""} ${ApproximateNumberInWords(Math.abs(datum.y.toFixed(0)))}`
          }
          style={{
            labels: {
              fill: 'black',
              fontSize: 12,
              padding: 15,
              fontWeight: 'bold',
            },
            parent: { overflow: 'visible' },
          }}
        />
        <VictoryLabel
          textAnchor="middle"
          style={{ fontSize: 12, fontWeight: 'bold' }}
          x={width / 2}
          y={150}
          text={`${label} \n \u20B9 ${res.toFixed(0)<0?"+":" "} ${ApproximateNumberInWords(Math.abs(res.toFixed(0)))}`}
        />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  text: { textAlign: 'center', fontWeight: '100' },
  row: { height: 40, backgroundColor: '#E7E6E1' },
});
export { PieChart };

//
