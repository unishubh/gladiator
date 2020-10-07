import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {
  VictoryPie,
  VictoryLabel,
  VictoryArea,
  VictoryChart,
  VictoryAxis,
  VictoryTheme,
} from 'victory-native';
import Svg from 'react-native-svg';
import { theme } from '../constants';
import { ApproximateNumberInWords } from 'number-formatter';

const BarChart = (props) => {
  return (
    <View style={{ alignSelf: 'center' }}>
      <VictoryChart width={390} domainPadding={{ x: [30, 30] }} theme={VictoryTheme.material}>
        <VictoryAxis />
        <VictoryArea
          style={{ data: { fill: theme.colors.secondary }, labels: { color: 'white' } }}
          data={props.graphicData}
          labels={({ data, index }) => ApproximateNumberInWords(data[index]['y'])}
        />
      </VictoryChart>
    </View>
  );
};

export { BarChart };
