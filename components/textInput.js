import React from "react";
import { TextInput, View, StyleSheet } from "react-native";
import { Text, Input } from "@ui-kitten/components";

const FormText = (props) => {
  return (
    <View>
      <Text style={style.Label} category="h1">
        {props.label}
      </Text>
      <Input
        onChangeText={(text) => props.onChange(text)}
        accessoryRight={props.icon}
      ></Input>
    </View>
  );
};

const style = StyleSheet.create({
  View: {
    padding: 10,
    margin: 20,
  },
  Label: {
    fontSize: 15,
    margin: 5,
  },
  TextInput: {
    paddingHorizontal: 5,
  },
});
export { FormText };
