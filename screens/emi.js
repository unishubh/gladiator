import React, { Component } from "react";
import { Text, View } from "react-native";
import { SliderComp } from "../components/slider";
import { theme, config } from "../constants";
import { SliderLabel } from "../components/SliderLabel";

class Emi extends Component {
  state = {
    investment: 500,
    period: 2,
    returns: 6
  }
  setInvestment = (investment) => {
    this.setState({ investment });
  }

  setPeriod = (period) => {
    this.setState({ period });
  }
  setReturn = (returns) => {
    this.setState({ returns })
  }
  render() {
    return (
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
    );
  }
};

export default Emi;
