import React, { Component } from 'react';
import { View, Switch, StyleSheet, Text } from 'react-native';
import { theme } from '../constants';

const SwitchComp = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.switchLabel}>
        {props.inflationMode === true ? 'Disable' : 'Enable'} inflation mode
      </Text>
      <Switch
        onValueChange={props.setInflationMode}
        value={props.inflationMode}
        trackColor={{  true: theme.colors.secondary }}
        thumbColor={theme.colors.tertiary}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  switchLabel: {
    fontWeight: 'bold',
    marginRight: 5,
  },
});

export { SwitchComp };
