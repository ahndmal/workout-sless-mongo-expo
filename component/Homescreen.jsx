import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { useState, useEffect } from "react";
import * as Battery from "expo-battery";

function Homescreen({ navigation }) {
  const [batteryLevel, setBatteryLevel] = useState(null);
  useEffect(() => {
    getBatteryLevel();
  }, []);

  async function getBatteryLevel(params) {
    const batteryLevel = await Battery.getBatteryLevelAsync();
    setBatteryLevel(batteryLevel);
    const subscription = Battery.addBatteryLevelListener(({ batteryLevel }) => {
      setBatteryLevel(batteryLevel);
      console.log("batteryLevel level changed", batteryLevel);
    });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>Workouts</Text>
      {/* {batteryLevel && <Text>Current Battery Level: {batteryLevel}</Text>} */}
      <Button
        title="Workouts"
        onPress={() => navigation.navigate("Workouts")}
      />
      <View styles={{ margin: 3 }}>
        <Button
          style={{ margin: 3 }}
          title="Workouts Month"
          color="#841584"
          onPress={() => navigation.navigate("WorkoutsMonth")}
        />
      </View>
      <View styles={{ margin: 3 }}>
        <Button
          style={{ margin: 3 }}
          color="#00cc66"
          title="Workouts by type"
          onPress={() => navigation.navigate("WorkoutsByType")}
        />
      </View>
    </View>
  );
}

export default Homescreen;

const styles = StyleSheet.create({
  mainTitle: {
    // fontFamily: "Noto Sans Mono', monospace",
    color: "blue",
    fontSize: 26,
    marginHorizontal: 12,
    marginBottom: 10,
  },
  container: {
    // color: "white",
    margin: 3,
    padding: 3,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 15,
  },
});
