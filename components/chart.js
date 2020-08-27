import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Slider from 'react-native-slider'
import { theme, config } from '../constants'
import { calculateResult } from "../calculations/sip";
import { VictoryPie, VictoryLabel } from "victory-native"
import Svg from 'react-native-svg'

import 'intl'
import 'intl/locale-data/jsonp/en';

const numberFormat = (value) =>
    new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR'
    }).format(value);


const PieChart = (props) => {


    return (
        <View style={{ alignSelf: 'center' }}>

            <Svg width={350} height={300}>
                <VictoryPie

                    data={props.graphicData}
                    colorScale={[theme.colors.secondary, theme.colors.tertiary]}
                    animate={{
                        duration: 500
                    }}
                    width={350}
                    height={300}
                    innerRadius={60}

                    labels={({ datum }) => `${datum.x}: ${numberFormat((datum.y).toFixed(0))}`}
                    style={{
                        labels: {
                            fill: 'black', fontSize: 15, padding: 7, fontWeight: 'bold'
                        },
                    }}
                />
                <VictoryLabel
                    textAnchor="middle"
                    style={{ fontSize: 14, fontWeight: "bold" }}
                    x={175} y={150}
                    text={`Total : ${numberFormat((1234).toFixed(0))}`}
                />
            </Svg>

        </View>
    );
};

const styles = StyleSheet.create({


});
export { PieChart };
