import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Emi from "./screens/emi";
import { NavigationContainer } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import * as eva from "@eva-design/eva";
import Sip from "./screens/sip";
import { ApplicationProvider } from "@ui-kitten/components";
const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
class App extends Component {
  constructor() {
    super();
  }

  SipStack() {
    return (
      <HomeStack.Navigator>
        <HomeStack.Screen
          name="SIP Calculator"
          component={Sip}
          headerTitle="SIP Calculator"
        />
      </HomeStack.Navigator>
    );
  }

  EMIStack() {
    return (
      <HomeStack.Navigator>
        <HomeStack.Screen
          name="EMI Calculator"
          component={Emi}
          headerTitle="EMI Calculator"
        />
      </HomeStack.Navigator>
    );
  }

  render() {
    return (
      <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer>
          <Tab.Navigator
            initialRouteName="SIP Calculator"
            tabBarOptions={{
              activeTintColor: "blue",
            }}
          >
            <Tab.Screen
              name="Home"
              component={this.SipStack}
              options={{
                tabBarLabel: "Home",
                title: "SIP Calculator",

                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons
                    name="calculator"
                    color={color}
                    size={size}
                  />
                ),
              }}
            />
            <Tab.Screen
              name="EMI"
              component={this.EMIStack}
              options={{
                tabBarLabel: "Emi",
                title: "EMI Calculator",

                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons
                    name="credit-card"
                    color={color}
                    size={size}
                  />
                ),
              }}
            />
            <Tab.Screen
              name="Fir se home"
              component={Sip}
              options={{
                tabBarLabel: "Insurance",
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons
                    name="home"
                    color={color}
                    size={size}
                  />
                ),
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </ApplicationProvider>
    );
  }
}

export default App;
// /export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text onPress={() => console.log("pressed")}>
//         Open up App.js to start working on your app!!!!!
//       </Text>
//       <Image
//         source={{
//           width: 300,
//           height: 300,
//           uri: "https://picsum.photos/id/1/200/300",
//         }}
//       ></Image>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    color: "red",
  },
});
