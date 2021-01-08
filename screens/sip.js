import React, { Component } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Button } from "@ui-kitten/components";
import { Avatar, Title, Paragraph } from "react-native-paper";
import { FormText } from "../components/textInput";
import { calculateResult } from "../calculations/sip";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Card, Text } from "@ui-kitten/components";
import { ResultComponent } from "../components/result";
const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

class Sip extends Component {
  state = {
    name: "",
    amount: 0,
    rate: 0,
    time: 0,
    result: 0,
  };

  header() {
    return (
      <Text style={{ alignSelf: "center" }} category="h2">
        Result
      </Text>
    );
  }
  amountVector() {
    return <MaterialCommunityIcons name="home"></MaterialCommunityIcons>;
  }

  rateVector() {
    return <MaterialCommunityIcons name="percent"></MaterialCommunityIcons>;
  }

  timeVector() {
    return <MaterialCommunityIcons name="calendar"></MaterialCommunityIcons>;
  }

  setAmount = (amount) => {
    this.setState({ amount });
  };

  setTime = (time) => {
    this.setState({ time });
    console.log(time);
  };

  setRate = (rate) => {
    this.setState({ rate });
    console.log(rate);
  };
  onPressHandler = async () => {
    try {
      let { amount, rate, time } = this.state;
      let result = await calculateResult(amount, 12, rate, time);
      this.setState({ result });
      alert(this.state.result);
    } catch (e) {
      console.log(e);
    }
  };
  render() {
    ///if (this.state.result == 0) {
    return (
      <ScrollView>
        <View style={style.View}>
          <Card style={style.Card}>
            <FormText
              label="Amount"
              onChange={this.setAmount}
              icon={this.amountVector}
            ></FormText>
            <FormText
              label="Rate"
              onChange={this.setRate}
              icon={this.rateVector}
            ></FormText>
            <FormText
              label="Time"
              onChange={this.setTime}
              icon={this.timeVector}
            ></FormText>
            <Button style={style.Button} onPress={this.onPressHandler}>
              Submit
            </Button>
          </Card>

          <ResultComponent
            parentStyle={style.Card}
            header={this.header}
          ></ResultComponent>
        </View>
      </ScrollView>
    );
  }
}
const style = StyleSheet.create({
  Card: {
    paddingTop: 100,

    flex: 1,
    textAlignVertical: "center",
  },

  Content: {
    flex: 1,
    //    justifyContent: "space-between",
  },
  Button: {
    marginTop: 20,
  },
  View: {
    flex: 1,
    alignContent: "center",
  },
});
export default Sip;
