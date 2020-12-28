import React, { useState, useRef, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Keyboard,
  ToastAndroid,
  Platform,
  AsyncStorage,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { GetNumberFromCommaSeparatedNumber } from 'number-formatter';
import { theme } from '../constants';
import { Tooltip } from 'react-native-elements';

const showToast = (msg) => {
  if (Platform.OS === 'android') {
    ToastAndroid.show(msg, ToastAndroid.SHORT);
  }
};

const SliderLabel = (props) => {
  useEffect(() => {
   
    showToolTip();
    //tooltipRef.current.toggleTooltip();
   
  }, []);
  const [editing, Isediting] = useState(false);
  const inputRef = useRef();
  const tooltipRef = useRef(null);

  async function showToolTip() {
    const tooltipBool = await AsyncStorage.getItem('show_tooltip_label');
    console.log(tooltipBool);
    if (!tooltipBool) {
      await AsyncStorage.setItem('show_tooltip_label', 'true');
      
        props.caption === 'Rs.' ? tooltipRef.current.toggleTooltip() : null;
      
    }
  }

  return (
   
    <View style={styles.measure}>
      <Text style={styles.caption}> {props.label}</Text>

      <View style={{ flexDirection: 'row',justifyContent:"space-between"}}>
        {props.caption === 'Rs.' ? <Text>Rs. </Text> : null}
        <TextInput
          value={`${props.value}`}
          keyboardType="numeric"
          numeric
          editable={editing}
          selectTextOnFocus={editing}
          ref={inputRef}
          style={{textAlignVertical: 'top',paddingVertical: 0, color:"gray"}}
          onChangeText={(text) => {
            let num = isNaN(parseInt(GetNumberFromCommaSeparatedNumber(text)))
              ? 0
              : parseInt(GetNumberFromCommaSeparatedNumber(text));
            num = props.caption === 'Rs. ' && num === 0 ? 1 : num;
            if (num > props.max) {
              num = props.max;
              showToast(
                `Maximum value allowed : ${props.caption === 'Rs' ? props.caption : ''} ${
                  props.max
                } ${props.caption != 'Rs' ? props.caption : ''}`
              );
            }
            num = num >= props.max ? props.max : num;
            props.onChange(parseFloat(num));
          }}
        />

        {props.caption !== 'Rs.' ? <Text>{props.caption} </Text> : null}
        {editing === false ? (
          <Tooltip
            backgroundColor={theme.colors.tertiary}
            height={70}
            popover={<Text style={{ color: 'white' }}> For better precision tap the pencil</Text>}
            ref={tooltipRef}
            toggleOnPress={false}
          >
            <Icon
              name="pencil"
              onPress={() => {
                Isediting(true);
                setTimeout(() => inputRef.current.focus(), 0);
              }}
              size={25}
              color={theme.colors.tertiary}
              style={{ marginLeft: theme.sizes.base }}
            />
          </Tooltip>
        ) : (
          <Icon
            name="check"
            onPress={() => {
              Keyboard.dismiss();
              Isediting(false);
            }}
            size={25}
            color={theme.colors.tertiary}
            style={{ marginLeft: theme.sizes.base }}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  caption: {
    marginBottom: 5,
    fontWeight: 'bold',
    fontSize: theme.sizes.font,
  },
  measure: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: theme.sizes.base * 0.5,
    marginLeft: theme.sizes.base,
    marginTop: theme.sizes.base,
  },
});
export { SliderLabel };
