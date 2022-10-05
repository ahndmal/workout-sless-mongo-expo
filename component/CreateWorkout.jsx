import React, { useState } from "react";
import { Text, TextInput, View, StyleSheet, Button } from "react-native";
import { createWorkout } from "../api/WorkoutService";

const CreateWorkout = ({ navigation }) => {
  const today = new Date().toISOString(); //2022-10-05T14:53:07.787Z'
  const todayFormatted = today.split("T")[0];
  const [type, onChangeType] = useState("PECS");
  const [date, onChangeDate] = useState(todayFormatted);
  const [comments, onChangeComments] = useState("");

  const handleCreatePress = () => {
    createWorkout({
      sets: 0,
      comments: comments,
      workout_date: date,
      workout_type: type,
      // creation_date: today,
      // day: Info.weekdays("long")[today.day],
      // day: "Wednesday",
      // week: 2,
      user_id: 1,
      // month: Info.months("long")[today.month],
      // month: "October",
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.error(err));
    // navigation.navigate("WorkoutsPage");
  };

  return (
    <View style={styles.mainContainer}>
      <View>
        <Text styel={styles.mainTitle}>Create</Text>
      </View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeType}
        value={type}
        placeholder="type"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeDate}
        value={date}
        placeholder="enter date"
        keyboardType="text"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeComments}
        value={comments}
        placeholder="comments"
        keyboardType="text"
      />
      <Button
        style={{ margin: 5, width: 100 }}
        title={"Create"}
        color={"green"}
        onPress={handleCreatePress}
      />
    </View>
  );
};

export default CreateWorkout;

const styles = StyleSheet.create({
  mainTitle: {
    fontSize: 25,
    alignItems: "center",
  },
  mainContainer: {
    margin: 10,
  },
  text: {
    fontSize: 25,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
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
