import { StatusBar } from "expo-status-bar";
import { View, FlatList, StyleSheet, Text } from "react-native";
import { useState, useEffect } from "react";
import { TouchableWithoutFeedback } from "react-native-web";
import * as Battery from "expo-battery";
// import Workout from "./component/Workout";

export default function App() {
  const [workouts, setWorkouts] = useState([]);
  const [workLoaded, setWorkLoaded] = useState(false);
  const [batteryLevel, setBatteryLevel] = useState(null);

  useEffect(() => {
    //https://us-central1-workouts-app-363616.cloudfunctions.net/GetWorkout?record=76
    fetch(
      "https://us-central1-workouts-app-363616.cloudfunctions.net/go_gcp_cfunc_mongo_workouts"
    )
      .then((res) => res.json())
      .then((res) => {
        setWorkouts(res);
        setWorkLoaded(true);
        getBatteryLevel();
      });
  }, []);

  async function getBatteryLevel(params) {
    const batteryLevel = await Battery.getBatteryLevelAsync();
    setBatteryLevel(batteryLevel);
    const subscription = Battery.addBatteryLevelListener(({ batteryLevel }) => {
      setBatteryLevel(batteryLevel);
      console.log("batteryLevel changed!", batteryLevel);
    });
  }

  const Workout = ({ workout }) => (
    <View style={styles.item}>
      <Text>{workout.day}</Text>
      <Text>{workout.workout_type}</Text>
    </View>
  );

  const renderItem = ({ item }) => <Workout workout={item} />;

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
  item: {
    color: "#e8e3d5",
    backgroundColor: "#e5cece",
    padding: 4,
    margin: 3,
    width: 150,
  },
});
