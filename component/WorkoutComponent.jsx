import React from "react";
import { View, StyleSheet, Text, Image, Button } from "react-native";

const Workout = ({ workout, navigation }) => {
  let url = "";
  let workoutColor;
  let workoutTitle = "";
  switch (workout.workout_type) {
    case "TRICEPS":
      url = ImageType.trics;
      workoutColor = "pink";
      workoutTitle = "TRICEPS";
      break;
    case "PECS":
      url = ImageType.pecs;
      workoutColor = "blue";
      workoutTitle = "PECS";
      break;
    case "BICEPS":
      url = ImageType.bics;
      workoutColor = "green";
      workoutTitle = "BICEPS";
      break;
    case "DELTS":
      url = ImageType.delts;
      workoutColor = "orange";
      workoutTitle = "DELTS";
      break;
    case "ABS":
      url = ImageType.abs;
      workoutColor = "black";
      workoutTitle = "ABS";
      break;
    case "BACK":
      url = ImageType.back;
      workoutColor = "red";
      workoutTitle = "BACK";
      break;
    case "QUADS":
      url = ImageType.quads;
      workoutColor = "yellow";
      workoutTitle = "QUADS";
      break;
    default:
      break;
  }

  return (
    <View style={styles.item}>
      <Button
        style={{ margin: 3 }}
        title={workoutTitle}
        color={workoutColor}
        onPress={() =>
          navigation.navigate({
            name: "WorkoutPage",
            params: { workout: workout },
            merge: true,
          })
        }
      />
      {/* <Image
        // source={"images/colors/back_new.png"}
        source={{
          uri: url,
        }}
        style={{ width: 92, height: 20 }}
        // onPress={() => navigation.navigate("WorkoutPage")}
      /> */}
      <Text style={styles.workout}>Day: {workout.day}</Text>
      <Text style={styles.workout}>Date: {workout.workout_date}</Text>
    </View>
  );
};

const ImageType = {
  abs: "https://raw.githubusercontent.com/AndriiMaliuta/workout-app-sb-postgres/1-4-0-new-sb/src/main/resources/static/images/colors/abs_new.png",
  back: "https://raw.githubusercontent.com/AndriiMaliuta/workout-app-sb-postgres/1-4-0-new-sb/src/main/resources/static/images/colors/back_new.png",
  pecs: "https://raw.githubusercontent.com/AndriiMaliuta/workout-app-sb-postgres/1-4-0-new-sb/src/main/resources/static/images/colors/pecs_new.png",
  trics:
    "https://raw.githubusercontent.com/AndriiMaliuta/workout-app-sb-postgres/1-4-0-new-sb/src/main/resources/static/images/colors/trics_new.png",
  delts:
    "https://raw.githubusercontent.com/AndriiMaliuta/workout-app-sb-postgres/1-4-0-new-sb/src/main/resources/static/images/colors/delts_new.png",
  calves:
    "https://raw.githubusercontent.com/AndriiMaliuta/workout-app-sb-postgres/1-4-0-new-sb/src/main/resources/static/images/colors/calves_new.png",
  bics: "https://raw.githubusercontent.com/AndriiMaliuta/workout-app-sb-postgres/1-4-0-new-sb/src/main/resources/static/images/colors/bics_new.png",
  farms:
    "https://raw.githubusercontent.com/AndriiMaliuta/workout-app-sb-postgres/1-4-0-new-sb/src/main/resources/static/images/colors/forearms_new.png",
  quads:
    "https://raw.githubusercontent.com/AndriiMaliuta/workout-app-sb-postgres/1-4-0-new-sb/src/main/resources/static/images/colors/quads_new.png",
};

export default Workout;

const styles = StyleSheet.create({
  item: {
    color: "#e8e3d5",
    // backgroundColor: "#e5cece",
    padding: 4,
    margin: 3,
    width: 150,
    borderRadius: 50,
    border: "1px solid blue",
  },
  workout: {
    fontSize: 18,
  },
});
