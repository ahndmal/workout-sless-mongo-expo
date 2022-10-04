import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { getWorkoutById } from "../../api/WorkoutService";

const WorkoutPage = ({ route }) => {
  const [workoutLoaded, setWorkoutLoaded] = useState(false);
  const [workout, setworkout] = useState(null);
  const [workoutTitle, setWorkoutTitle] = useState("");
  useEffect(() => {
    setWorkoutLoaded(true);
    setWorkoutTitle(route.params.workout.workout_type);
    // getColorByType(route.params.workout.workout_type);
  }, []);

  function getColorByType(type) {
    let workoutColor = "grey";
    switch (type) {
      case "TRICEPS":
        workoutColor = "purple";
        // setWorkoutTitle("TRICEPS");
        break;
      case "PECS":
        workoutColor = "blue";
        // setWorkoutTitle("PECS");
        break;
      case "BICEPS":
        workoutColor = "green";
        // setWorkoutTitle("BICEPS");
        break;
      case "DELTS":
        workoutColor = "orange";
        // setWorkoutTitle("DELTS");
        break;
      case "ABS":
        workoutColor = "black";
        // setWorkoutTitle("ABS");
        break;
      case "BACK":
        workoutColor = "red";
        // setWorkoutTitle("BACK");
        break;
      case "QUADS":
        workoutColor = "yellow";
        // setWorkoutTitle("QUADS");
        break;
      default:
        break;
    }
    return workoutColor;
  }

  return (
    <View style={styles.container}>
      {workoutLoaded && (
        <>
          <Button
            style={{ margin: 3 }}
            title={workoutTitle}
            color={getColorByType(route.params.workout.workout_type)}
          />
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
