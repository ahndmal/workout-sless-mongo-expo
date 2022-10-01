// import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from "react-native";
import { useState, useEffect } from "react";

export default function App() {
  const [workouts, setWorkouts] = useState([]);
  const [workLoaded, setWorkLoaded] = useState(false);

  useEffect(() => {
    fetch(
      "https://us-central1-workouts-app-363616.cloudfunctions.net/go_gcp_cfunc_mongo_workouts"
    )
      .then((res) => res.json())
      .then((res) => {
        setWorkouts(res);
        setWorkLoaded(true);
      });
  }, []);

  const Workout = (workout) => (
    <View style={styles.item}>
      <Text style={styles.title}>{workout.day}</Text>
    </View>
  );

  const renderItem = ({ item }) => <Workout title={item.day} />;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text>Workouts</Text>
        <FlatList
          data={workouts}
          renderItem={renderItem}
          keyExtractor={(item) => item.record}
        />
        {/* {workLoaded &&
          workouts.map((w) => (
            <Text key={w.record}>
              <Text>{w.comments}</Text>
              <Text>{w.sets}</Text>
            </Text>
          ))} */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
