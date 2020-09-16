import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Text } from '@ui-kitten/components';

const ResultComponent = (props) => {
  return (
    <Card header={props.header}>
      <View style={style.Row}>
        <View>
          <Text category="h5" style={style.Banner}>
            Summary
          </Text>
          <View style={style.Row}>
            <Text style={style.Cell}>A</Text>
            <Text style={style.Cell}>B</Text>
          </View>
          <View style={style.Row}>
            <Text style={style.Cell}>A</Text>
            <Text style={style.Cell}>B</Text>
          </View>
        </View>
        <View>
          <Text category="h5" style={style.Banner}>
            Pending
          </Text>
        </View>
      </View>
    </Card>
  );
};

const style = StyleSheet.create({
  Row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  Cell: {
    flex: 1,
    flexDirection: 'row',
  },
  Banner: {
    backgroundColor: '#a3b7d9',
    padding: 2,
  },
});
export { ResultComponent };
