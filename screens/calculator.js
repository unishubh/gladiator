import React, { Component } from "react";
import { StyleSheet, SafeAreaView, ScrollView, Text, View } from "react-native";
import { theme } from "../constants";

import { PieChart } from "../components/chart";
import { calculateResult } from "../calculations/sip";
import { Sip } from "../components/sip";
import { SipDelay } from "../components/sipDelay";
import { Wealth } from "../components/wealth";
import { Lumpsum } from "../components/lumpsum";
import { Emicalc } from "../components/emi";
import { Insurance } from "../components/insurance";
import { Tabcomponent } from "../components/tabs";

class Calculator extends Component {
  state = {
    investment: 10,
    period: 2,
    returns: 6,
    active: "SIP",
    delay: 2,
    age: 40,
    expense: 10,
    retirementAge: 60,
  };
  setInvestment = (investment) => {
    this.setState({ investment });
  };

  setPeriod = (period) => {
    this.setState({ period });
  };
  setDelay = (delay) => {
    this.setState({ delay });
  };
  setReturn = (returns) => {
    this.setState({ returns });
  };
  setAge = (age) => {
    this.setState({ age });
  };
  setRetirementAge = (retirementAge) => {
    this.setState({ retirementAge });
  };
  setExpense = (expense) => {
    this.setExpense({ expense });
  };
  setActive = (active) => {
    this.setState({ active });
  };

  calculateResult() {
    let activeTab = this.state.active;
    let result = 0;

    let graphicData = [
      { x: "Gain", y: 0 },
      { x: "Invested", y: 0 },
    ];
    switch (activeTab) {
      case "SIP":
        result = calculateResult(
          this.state.investment.toFixed(0),
          12,
          this.state.returns.toFixed(0),
          this.state.period.toFixed(0)
        );
        graphicData[0]["y"] =
          result - this.state.investment * 12 * this.state.period;
        graphicData[1]["y"] = this.state.investment * 12 * this.state.period;
        console.log(result);
        // resultData = {
        //     graphicData :graphicData,
        //     result: result
        // }
        return graphicData;

        break;
    }
  }

  renderScreen() {
    let activeTab = this.state.active;
    switch (activeTab) {
      case "SIP":
        return (
          <Sip
            investment={this.state.investment}
            period={this.state.period}
            returns={this.state.returns}
            setInvestment={this.setInvestment}
            setPeriod={this.setPeriod}
            setReturn={this.setReturn}
          ></Sip>
        );
        break;
      case "SIP Delay":
        return (
          <SipDelay
            investment={this.state.investment}
            period={this.state.period}
            returns={this.state.returns}
            delay={this.state.delay}
            setInvestment={this.setInvestment}
            setPeriod={this.setPeriod}
            setReturn={this.setReturn}
            setDelay={this.setDelay}
          ></SipDelay>
        );
        break;
      case "Wealth":
        return (
          <Wealth
            investment={this.state.investment}
            period={this.state.period}
            returns={this.state.returns}
            setInvestment={this.setInvestment}
            setPeriod={this.setPeriod}
            setReturn={this.setReturn}
          ></Wealth>
        );
        break;
      case "Lumpsum":
        return (
          <Lumpsum
            investment={this.state.investment}
            period={this.state.period}
            returns={this.state.returns}
            setInvestment={this.setInvestment}
            setPeriod={this.setPeriod}
            setReturn={this.setReturn}
          ></Lumpsum>
        );
      case "EMI":
        return (
          <Emicalc
            investment={this.state.investment}
            period={this.state.period}
            returns={this.state.returns}
            setInvestment={this.setInvestment}
            setPeriod={this.setPeriod}
            setReturn={this.setReturn}
          ></Emicalc>
        );
        break;
      case "Insurance":
        return (
          <Insurance
            expense={this.state.expense}
            age={this.state.age}
            retirementAge={this.state.retirementAge}
            setExpense={this.setExpense}
            setAge={this.setAge}
            setRetirementAge={this.setRetirementAge}
          ></Insurance>
        );
    }
  }

  render() {
    const resultData = this.calculateResult();
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView>
          <PieChart graphicData={resultData}></PieChart>

          <Tabcomponent
            active={this.state.active}
            onChange={this.setActive}
          ></Tabcomponent>
          {this.renderScreen()}

          <View>
            <Text style={styles.title}>
              Value of your investment in next 30 years
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: theme.sizes.font,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Calculator;
