import { StatusBar } from "expo-status-bar";
import { View, FlatList, StyleSheet, Text } from "react-native";
import { useState, useEffect } from "react";
import * as Battery from "expo-battery";
import Workout from "./component/Workout";
import { getWorkoutById, getWorkouts } from "./api/WorkoutService";

export default function App() {
  const [workouts, setWorkouts] = useState([]);
  const [workLoaded, setWorkLoaded] = useState(false);
  const [batteryLevel, setBatteryLevel] = useState(null);

  useEffect(() => {
    getWorkouts().then((workouts) => {
      setWorkouts(workouts);
      setWorkLoaded(true);
      getBatteryLevel();
    });
  }, []);

  async function getBatteryLevel(params) {
    const batteryLevel = await Battery.getBatteryLevelAsync();
    setBatteryLevel(batteryLevel);
    const subscription = Battery.addBatteryLevelListener(({ batteryLevel }) => {
      setBatteryLevel(batteryLevel);
      console.log("batteryLevel level changed", batteryLevel);
    });
  }

  const renderItem = ({ item }) => <Workout workout={item} style={styles} />;

  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>Workouts</Text>

      {batteryLevel && <Text>Current Battery Level: {batteryLevel}</Text>}
      <FlatList
        data={workouts}
        renderItem={renderItem}
        keyExtractor={(item) => item.record}
      />
      {/* {workLoaded &&
        workouts.map((w) => <Workout workout={w} styles={styles} />)} */}
    </View>
  );
}

const styles = StyleSheet.create({
  //<style>@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Mono:wght@300&display=swap');</style>
  mainTitle: {
    // fontFamily: "Noto Sans Mono', monospace",
    paddingTop: 40,
    color: "#889",
    fontSize: 23,
    marginHorizontal: 15,
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
