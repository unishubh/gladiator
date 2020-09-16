import React from 'react';
import { Text, View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Slider from 'react-native-slider';
import { theme, config } from '../constants';
import { SliderLabel } from './SliderLabel';
import { SliderComp } from './slider';

const { width, height } = Dimensions.get('window');

renderTab = (tab, props) => {
  const isActive = props.active === tab;
  return (
    <TouchableOpacity
      key={`tab-${tab}`}
      onPress={() => handleTab(tab, props)}
      style={[styles.tab, isActive ? styles.active : null]}
    >
      <Text style={styles.tabText}>{tab}</Text>
    </TouchableOpacity>
  );
};
handleTab = (tab, props) => {
  props.onChange(tab);
};

const Tabcomponent = (props) => {
  const tabs = ['SIP', 'Wealth', 'Lumpsum', 'EMI'];

  return <View style={styles.tabs}>{tabs.map((tab) => renderTab(tab, props))}</View>;
};

const styles = StyleSheet.create({
  tabs: {
    marginTop: theme.sizes.base * 0.025,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.tertiary,
    justifyContent: 'space-between',
    height: theme.sizes.base * 3,
  },
  active: {
    borderColor: 'white',
    borderWidth: 2,
    backgroundColor: theme.colors.secondary,
  },
  tab: {
    height: theme.sizes.base * 3,
    justifyContent: 'center',
    alignItems: 'center',
    width: width / 4,
    fontSize: 2,
    padding: theme.sizes.base * 0.05,
  },
  tabText: {
    color: 'white',
    fontSize: theme.sizes.font,
    fontWeight: 'bold',
  },
});
export { Tabcomponent };
