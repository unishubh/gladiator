import React from "react";
import { theme, config } from "../constants";
import { VictoryPie, VictoryLabel } from "victory-native";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import Slider from "react-native-slider";
import { calculateResult } from "../calculations/sip";
import Svg from "react-native-svg";
const { width } = Dimensions.get("window");

import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
  Cols,
  Cell,
} from "react-native-table-component";

import "intl";
import "intl/locale-data/jsonp/en";

const numberFormat = (value) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(value);

    const approximate = (value) =>  {
        if (value <= 1000) {
            return Math.round(value)
        }
        if (value >= 1000 && value < 100000) {
            return Math.round((value / 1000) * 100) / 100 + "K"
        }
        else if (value >= 100000 && value < 10000000) {
            return Math.round((value / 100000) * 100) / 100 + " L"
        }
        else if (value >= 10000000) {
            return Math.round((value / 10000000) * 100) / 100 + " Cr"
        }
    }

/*
renderTable(tableData){
    return (
    <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
    {

      //  add table data here

      tableData.map((rowData, index) => (
        <Row
          key={index}
          data={rowData}

          style={[styles.row, index%2 && {backgroundColor: '#F7F6E7'}]}
          textStyle={styles.text}
        />
      ))
    }
  </Table>
    )
}
*/
const PieChart = (props) => {



    return (
        <View style={{ flex: 1,
          
            justifyContent: 'center',
            alignItems: 'center', marginTop:30}}>

                <Svg width={width} height={300}>
                <VictoryPie
                   
                    data={props.graphicData}
                    colorScale={[theme.colors.secondary, theme.colors.tertiary]}
                    animate={{
                        duration: 500
                    }}
                    width={width}
                    height={300}
                    innerRadius={50}
                    radius={90}
                    labels={({datum})=>`${datum.x}\n \u20b9 ${approximate((datum.y).toFixed(0))}`}
                    

                    
                    style={{
                        labels: {
                            fill: 'black', fontSize: 12, padding:15, fontWeight: 'bold'
                        }, parent: { overflow: "visible" }
                       
                    }}
                />
                <VictoryLabel
                    textAnchor="middle"
                    style={{ fontSize: 12, fontWeight: "bold" }}
                    x={width/2} y={150}
                    text={`Total \n \u20B9 ${approximate((props.graphicData[0]["y"]+props.graphicData[1]["y"]).toFixed(0))}`}
                />
                </Svg>
                



               
            
        </View>
    );
};

const styles = StyleSheet.create({
  text: { textAlign: "center", fontWeight: "100" },
  row: { height: 40, backgroundColor: "#E7E6E1" },
});
export { PieChart };

//
