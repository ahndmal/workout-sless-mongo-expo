import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { getWorkoutById } from "../../api/WorkoutService";

const WorkoutPage = ({ route }) => {
  const [workoutLoaded, setWorkoutLoaded] = useState(true);
  const [workout, setworkout] = useState(null);
  //   useEffect(() => {
  //     getWorkoutById(record).then((res) => {
  //       setWorkoutLoaded(true);
  //       setworkout(res);
  //       console.log(res);
  //     });
  //   }, []);

  console.log(route.params.workout.record);

  return (
    <View style={styles.container}>
      {workoutLoaded && (
        <>
          <Text style={styles.title}>Workout</Text>
          <Text>{route.params.workout.day}</Text>
          <Text>{route.params.workout.workout_type}</Text>
        </>
      )}
    </View>
  );
};

export default WorkoutPage;

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
  },
  container: {
    margin: 3,
    padding: 3,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
