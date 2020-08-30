import React, { Component } from "react";
import { StyleSheet, SafeAreaView, ScrollView, Text, View } from "react-native";
import { theme } from "../constants";

import { PieChart } from "../components/chart";
import {
  calculateResult,
  calculateEmi,
  calculateLumpSum,
  calculateWealth,
  calculateInsurance,
} from "../calculations/sip";
import { Sip } from "../components/sip";
import { SipDelay } from "../components/sipDelay";
import { Wealth } from "../components/wealth";
import { Lumpsum } from "../components/lumpsum";
import { Emicalc } from "../components/emi";
import { Insurance } from "../components/insurance";
import { Tabcomponent } from "../components/tabs";
import { BarChart } from "../components/barChart";
import { Header } from "../components/header";

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
    this.setState({ expense });
  };
  setActive = (active) => {
    this.setState({ active });
  };

  calculateResult() {
    let activeTab = this.state.active;
    let result = 0;

    switch (activeTab) {
      case "SIP":
        let graphicData = [
          { x: "Gain", y: 0 },
          { x: "Invested", y: 0 },
        ];
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

      case "EMI": {
        let graphicData = [
          { x: "Interest Paid", y: 0 },
          { x: "Loan Amount", y: 0 },
          {result:0}
        ];
        result = calculateEmi(
          this.state.investment.toFixed(0),
          this.state.returns.toFixed(0),
          this.state.period.toFixed(0)
        );
        graphicData[0]["y"] = result * 12 * this.state.period;
        graphicData[1]["y"] = this.state.investment;
        graphicData[2]["result"] = result;
        console.log(result);
        return graphicData;
      }

      case "Lumpsum": {
        let graphicData = [
          { x: "Gain", y: 0 },
          { x: "Invested", y: 0 },
        ];

        result = calculateLumpSum(
          this.state.investment,
          this.state.returns,
          this.state.period
        );
        graphicData[0]["y"] = result - this.state.investment;
        graphicData[1]["y"] = this.state.investment;

        return graphicData;
      }

      case "Wealth": {
        let graphicData = [
          { x: "Gain", y: 0 },
          { x: "Invested", y: 0 },
          {result:0},
        ];

        result = calculateWealth(
          this.state.investment,
          12,
          this.state.returns,
          this.state.period
        );
        graphicData[0]["y"] = result * 12 * this.state.period;
        graphicData[1]["y"] =
          this.state.investment - result * 12 * this.state.period;
        graphicData[2]['result'] = result;
        console.log(result);
        return graphicData;
      }

      case "Insurance": {
        let graphicData = [
          { x: "Nominal", y: 0 },
          { x: "Inflated", y: 0 },
        ];

        result = calculateInsurance(
          this.state.investment,
          this.state.age,
          this.state.retirementAge
        );

        graphicData[0]["y"] =
          result * 12 * (this.state.retirementAge - this.state.age);
        graphicData[1]["y"] = result;

        console.log(result);
        return graphicData;
      }
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
      <View style={{flex:1,backgroundColor:'white' }}>
      <Header text={this.state.active}></Header>
      <PieChart graphicData={resultData} active={this.state.active}></PieChart>

<Tabcomponent
  active={this.state.active}
  onChange={this.setActive}
></Tabcomponent>
        <ScrollView style={{flex:1}}>
          <View style={{paddingBottom:40,paddingTop:10}}>

          {this.renderScreen()}
          </View>
        </ScrollView>
      </View>
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
