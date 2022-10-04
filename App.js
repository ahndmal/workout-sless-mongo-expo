import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Homescreen from "./component/Homescreen";
import Workouts from "./component/pages/WorkoutsPage";
import WorkoutsMonth from "./component/WorkoutsMonth";
import WorkoutsByType from "./component/WorkoutsByType";
import WorkoutPage from "./component/pages/WorkoutPage";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Homescreen} />
        <Stack.Screen name="Workouts" component={Workouts} />
        <Stack.Screen name="WorkoutsMonth" component={WorkoutsMonth} />
        <Stack.Screen name="WorkoutsByType" component={WorkoutsByType} />
        <Stack.Screen name="WorkoutPage" component={WorkoutPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  mainTitle: {
    // fontFamily: "Noto Sans Mono', monospace",
    paddingTop: 40,
    color: "#889",
    fontSize: 23,
    marginHorizontal: 15,
    marginBottom: 10,
  },
});
