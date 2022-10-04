import React from "react";
import { View, FlatList, StyleSheet, Text, Button } from "react-native";
import { useState, useEffect } from "react";
import Workout from "./WorkoutComponent";
import { getWorkoutById, getWorkouts } from "../api/WorkoutService";

const WorkoutsMonth = () => {
  const [workouts, setWorkouts] = useState([]);
  const [workLoaded, setWorkLoaded] = useState(false);

  const renderItem = ({ item }) => <Workout workout={item} style={styles} />;

  useEffect(() => {
    getWorkouts().then((res) => {
      setWorkLoaded(true);
      setWorkouts(res);
    });
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={workouts}
        renderItem={renderItem}
        keyExtractor={(item) => item.record}
      />
    </View>
  );
};

export default WorkoutsMonth;

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
