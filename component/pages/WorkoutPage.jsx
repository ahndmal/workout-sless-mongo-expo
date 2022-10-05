import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
// import { getWorkoutById } from "../../api/WorkoutService";

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
          <Image
            source={"images/colors/back_new.png"}
            // source={{
            //   uri: url,
            // }}
            style={{ width: 100, height: 100 }}
            // onPress={() => navigation.navigate("WorkoutPage")}
          />
          <View>
            <Button
              style={{ margin: 5, width: 200 }}
              title={workoutTitle}
              color={getColorByType(route.params.workout.workout_type)}
            />
          </View>
          <Text style={styles.title}>{route.params.workout.day}</Text>
          <Text style={styles.title}>
            Date: {route.params.workout.workout_date}
          </Text>
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
