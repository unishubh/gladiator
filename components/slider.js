import React, { useEffect, useRef } from 'react';
import { Text, View, StyleSheet, AsyncStorage } from 'react-native';
import Slider from 'react-native-slider';
import { theme, config } from '../constants';
import { Tooltip } from 'react-native-elements';

const SliderComp = (props) => {
  useEffect(() => {
    showToolTip();
    //tooltipRef.current.toggleTooltip();
  }, []);
  const tooltipRef = useRef(null);

  async function showToolTip() {
    const tooltipBool = await AsyncStorage.getItem('show_tooltip_slider');

    if (!tooltipBool) {
      console.log('tooltipBool');
      await AsyncStorage.setItem('show_tooltip_slider', 'true');
      props.showToolTip ? tooltipRef.current.toggleTooltip() : null;
    }
  }

  return (
    <View>
      <Tooltip
        backgroundColor={theme.colors.tertiary}
        height={60}
        popover={<Text style={{ color: 'white' }}>Use the slider to input your values</Text>}
        toggleOnPress={false}
        ref={tooltipRef}
      >
        <Slider
          minimumValue={props.min}
          maximumValue={props.max}
          style={{ height: 19 }}
          thumbStyle={styles.thumb}
          trackStyle={{ height: 6, borderRadius: 6 }}
          minimumTrackTintColor={theme.colors.secondary}
          maximumTrackTintColor="rgb(84, 234, 200)"
          value={props.value}
          marginRight={theme.sizes.base}
          marginLeft={theme.sizes.base}
          marginTop={theme.sizes.base * 0.25}
          step={props.step}
          onSlidingComplete={(value) => props.onChange(value)}
        />
      </Tooltip>
    </View>
  );
};

const styles = StyleSheet.create({
  thumb: {
    width: theme.sizes.base * 1.25,
    height: theme.sizes.base * 1.25,
    borderRadius: theme.sizes.base,
    borderColor: theme.colors.tertiary,
    borderWidth: 3,
    backgroundColor: theme.colors.tertiary,
  },
  tooltip: {
    backgroundColor: theme.colors.tertiary,
    height: 120,
  },
});
export { SliderComp };
