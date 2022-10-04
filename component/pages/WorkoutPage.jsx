import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { getWorkoutById } from "../../api/WorkoutService";

const WorkoutPage = (workoutProp) => {
  const [workoutLoaded, setWorkoutLoaded] = useState(false);
  const [workout, setworkout] = useState(null);
  useEffect(() => {
    getWorkoutById(workoutProp.id).then((res) => {
      setWorkoutLoaded(true);
    });
  }, []);

  return (
    <View>
      <Text style={styles.title}>Workout</Text>
      <Text>{workout.day}</Text>
      <Text>{workout.workout_type}</Text>
    </View>
  );
};

export default WorkoutPage;

const styles = StyleSheet.create({
  title: {
    fontSize: 15,
  },
});
