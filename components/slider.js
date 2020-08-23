import React, { Component } from "react";
import { TextInput, View, StyleSheet, Text } from "react-native";
import Slider from 'react-native-slider'
import { theme,config } from '../constants'


class SliderComp extends Component {
    state = {
        investment: 500,
        period:2,
        return:6
    }
    render() {
        return (
            <View>
                <View>
                    <View style={styles.measure}>
                        <Text style={styles.caption}> Monthly Investment</Text>
                        <Text>Rs. {this.state.investment.toFixed(0)}</Text>
                    </View>


                    <Slider
                        minimumValue={config.sliderMeasures.minInvestment}
                        maximumValue={config.sliderMeasures.maxInvestment}
                        style={{ height: 19 }}
                        thumbStyle={styles.thumb}
                        trackStyle={{ height: 6, borderRadius: 6 }}
                        minimumTrackTintColor={theme.colors.secondary}
                        maximumTrackTintColor="rgb(84, 234, 200)"
                        value={this.state.investment}
                        marginRight={theme.sizes.base}
                        marginLeft={theme.sizes.base}
                        marginTop={theme.sizes.base * 0.25}
                        onValueChange={value => this.setState({ investment: value })}
                    />
                </View>
                <View>
                    <View style={styles.measure}>
                        <Text style={styles.caption}> Investment Period</Text>
                        <Text>{this.state.period.toFixed(0)} years</Text>
                    </View>


                    <Slider
                        minimumValue={config.sliderMeasures.minPeriod}
                        maximumValue={config.sliderMeasures.maxPeriod}
                        style={{ height: 19 }}
                        thumbStyle={styles.thumb}
                        trackStyle={{ height: 6, borderRadius: 6 }}
                        minimumTrackTintColor={theme.colors.secondary}
                        maximumTrackTintColor="rgb(84, 234, 200)"
                        value={this.state.period}
                        marginRight={theme.sizes.base}
                        marginLeft={theme.sizes.base}
                        marginTop={theme.sizes.base * 0.25}
                        onValueChange={value => this.setState({ period: value })}
                    />
                </View>
                <View>
                    <View style={styles.measure}>
                        <Text style={styles.caption}> Expected Returns (annual)</Text>
                        <Text>{this.state.return.toFixed(0)}%</Text>
                    </View>


                    <Slider
                        minimumValue={config.sliderMeasures.minReturn}
                        maximumValue={config.sliderMeasures.maxReturn}
                        style={{ height: 19 }}
                        thumbStyle={styles.thumb}
                        trackStyle={{ height: 6, borderRadius: 6 }}
                        minimumTrackTintColor={theme.colors.secondary}
                        maximumTrackTintColor="rgb(84, 234, 200)"
                        value={this.state.return}
                        marginRight={theme.sizes.base}
                        marginLeft={theme.sizes.base}
                        marginTop={theme.sizes.base * 0.25}
                        onValueChange={value => this.setState({ return: value })}
                    />
                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    thumb: {
        width: theme.sizes.base * 1.25,
        height: theme.sizes.base * 1.25,
        borderRadius: theme.sizes.base,
        borderColor: theme.colors.tertiary,
        borderWidth: 3,
        backgroundColor: theme.colors.tertiary

    },
    caption: {
        marginBottom: 10,
        fontWeight: 'bold',
        fontSize: theme.sizes.font
    },
    value: {

    },
    measure: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: theme.sizes.base,
        marginLeft: theme.sizes.base,
        marginTop: theme.sizes.base
    }

});
export default SliderComp;
