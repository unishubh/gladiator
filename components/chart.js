import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { theme, config } from "../constants";
import { VictoryPie, VictoryLabel } from "victory-native";
import Svg from "react-native-svg";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import Slider from "react-native-slider";
import { theme, config } from "../constants";
import { calculateResult } from "../calculations/sip";
import { VictoryPie, VictoryLabel, VictoryLegend } from "victory-native";
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
    <View
      style={{
        flex: 1,

        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <VictoryPie
        data={props.graphicData}
        colorScale={[theme.colors.secondary, theme.colors.tertiary]}
        animate={{
          duration: 500,
        }}
        width={width}
        height={250}
        innerRadius={60}
        radius={50}
        labels={({ datum }) =>
          `${datum.x}\n ${numberFormat(datum.y.toFixed(0))}`
        }
        style={{
          labels: {
            fill: "black",
            fontSize: 12,
            padding: 30,
            fontWeight: "bold",
          },
          parent: { overflow: "visible" },
        }}
      />
      <VictoryLabel
        textAnchor="middle"
        style={{ fontSize: 14, fontWeight: "bold" }}
        x={width / 4}
        y={150}
        text={`Total : ${numberFormat((23400).toFixed(0))}`}
      />
      <Text
        style={{
          fontSize: 12,
          fontWeight: "bold",
          borderColor: theme.colors.tertiary,
          borderWidth: 3,
          padding: 10,
          borderRadius: 3,
        }}
      >
        {`Total : ${numberFormat((23400).toFixed(0))}`}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: { textAlign: "center", fontWeight: "100" },
  row: { height: 40, backgroundColor: "#E7E6E1" },
});
export { PieChart };

//
