import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { SliderComp } from "../components/slider";
import { theme, config } from "../constants";
import { SliderLabel } from "../components/SliderLabel";

const { width } = Dimensions.get("window")

class Emi extends Component {
  state = {
    investment: 500,
    period: 2,
    returns: 6,
    active: 'SIP'
  }
  setInvestment = (investment) => {
    this.setState({ investment });
  }

  setPeriod = (period) => {
    this.setState({ period });
  }
  setReturn = (returns) => {
    this.setState({ returns }), 'Wealth', 'Lumpsum', 'EMI', 'Insurance'
  }
  renderTab(tab) {
    const { active } = this.state
    const isActive = active === tab
    return (
      <TouchableOpacity
        key={`tab-${tab}`}
        onPress={() => this.handleTab(tab)}
        style={[styles.tab,
        isActive ? styles.active : null]}>

        <Text style={styles.tabText}>{tab}</Text>
      </TouchableOpacity>
    )
  }
  handleTab = tab => {

    this.setState({ active: tab })
  }
  render() {
    const tabs = ['SIP', 'SIP Delay', 'Wealth', 'Lumpsum', 'EMI', 'Insurance']

    return (
      <View>
        <View style={styles.tabs}>
          {tabs.map(tab => this.renderTab(tab))}
        </View>
        <View>
          <SliderLabel
            value={"Rs. " + this.state.investment.toFixed(0)}
            label="Monthly Investment">
          </SliderLabel>
          <SliderComp
            min={config.sliderMeasures.minInvestment}
            max={config.sliderMeasures.maxInvestment}
            value={this.state.investment} onChange={this.setInvestment}>
          </SliderComp>
          <SliderLabel
            value={this.state.period.toFixed(0) + " years"}
            label="Investment Period">
          </SliderLabel>
          <SliderComp
            min={config.sliderMeasures.minPeriod}
            max={config.sliderMeasures.maxPeriod}
            value={this.state.period} onChange={this.setPeriod}>
          </SliderComp>
          <SliderLabel
            value={this.state.returns.toFixed(0) + "%"}
            label="Expected Returns (annual)">
          </SliderLabel>
          <SliderComp
            min={config.sliderMeasures.minReturn}
            max={config.sliderMeasures.maxReturn}
            value={this.state.returns} onChange={this.setReturn}>
          </SliderComp>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  tabs: {
    marginTop: theme.sizes.base,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: theme.colors.tertiary,
    justifyContent: "space-between",
    height: theme.sizes.base * 3,
  },
  active: {

    borderColor: "white",
    borderWidth: 2,
    backgroundColor: theme.colors.secondary,
  },
  tab: {
    height: theme.sizes.base * 3,
    justifyContent: "center",
    alignItems: "center",
    width: width / 6,
    fontSize: 2,
    padding: theme.sizes.base * 0.05
  },
  tabText: {
    color: "white",
    fontSize: theme.sizes.font - 2,

  }
})

export default Emi;
