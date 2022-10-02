import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

const Workout = ({ workout }) => {
  let url = "";
  switch (workout.workout_type) {
    case "TRICEPS":
      url = ImageType.trics;
      break;
    case "PECS":
      url = ImageType.pecs;
      break;
    case "BICEPS":
      url = ImageType.bics;
      break;
    case "DELTS":
      url = ImageType.delts;
      break;
    case "ABS":
      url = ImageType.abs;
      break;
    case "BACK":
      url = ImageType.back;
      break;
    case "QUADS":
      url = ImageType.quads;
      break;
    default:
      break;
  }
  return (
    <View style={styles.item}>
      <Image
        // source={"images/colors/back_new.png"}
        source={{
          uri: url,
        }}
        style={{ width: 92, height: 20 }}
      />
      <Text>Day: {workout.day}</Text>
      <Text>Date: {workout.workout_date}</Text>
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
    backgroundColor: "#e5cece",
    padding: 4,
    margin: 3,
    width: 150,
  },
});
