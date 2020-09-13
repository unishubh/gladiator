import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { VictoryPie, VictoryLabel, VictoryArea } from 'victory-native';
import Svg from 'react-native-svg';
import { theme } from '../constants';

import 'intl';
import 'intl/locale-data/jsonp/en';

const BarChart = (props) => {
  return (
    <View style={{ alignSelf: 'center' }}>
      <Svg width={350} height={300}>
        <VictoryArea
          style={{ data: { fll: theme.colors.secondary } }}
          data={[
            { x: 1, y: 2, y0: 0 },
            { x: 2, y: 3, y0: 1 },
            { x: 3, y: 5, y0: 1 },
            { x: 4, y: 4, y0: 2 },
            { x: 5, y: 6, y0: 2 },
          ]}
        />
      </Svg>
    </View>
  );
};

export { BarChart };
