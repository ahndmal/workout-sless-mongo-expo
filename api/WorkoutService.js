const getWorkoutById = async (record) => {
  const url = `https://us-central1-workouts-app-363616.cloudfunctions.net/GetWorkout?record=${record}`;
  const resp = await fetch(url);
  return await resp.json();
};

const getWorkouts = async () => {
  const resp = await fetch(
    "https://us-central1-workouts-app-363616.cloudfunctions.net/go_gcp_cfunc_mongo_workouts"
  );
  return await resp.json();
};

export { getWorkoutById, getWorkouts };
