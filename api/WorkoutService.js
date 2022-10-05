const getWorkoutById = async (record) => {
  const url = `https://us-central1-workouts-app-363616.cloudfunctions.net/GetWorkout?record=${record}`;
  const resp = await fetch(url);
  return await resp.json();
};

const getWorkouts = async (wType, wDate, month, year) => {
  if (wType !== undefined) {
    const resp = await fetch(
      `https://us-central1-workouts-app-363616.cloudfunctions.net/go_gcp_cfunc_mongo_workouts?wType=${wType}`
    );
    return await resp.json();
  } else if (wDate !== undefined) {
    const resp = await fetch(
      `https://us-central1-workouts-app-363616.cloudfunctions.net/go_gcp_cfunc_mongo_workouts?wDate=${wDate}`
    );
    return await resp.json();
  }
  const resp = await fetch(
    `https://us-central1-workouts-app-363616.cloudfunctions.net/go_gcp_cfunc_mongo_workouts`
  );
  return await resp.json();
};

async function createWorkout(data) {
  let dataBody = JSON.stringify(data);
  console.log(dataBody);
  const response = await fetch(
    "https://create-workout-mongo-python-lysuchhuma-uc.a.run.app/",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-cache",
      body: dataBody,
    }
  );
  return response.text();
}

export { getWorkoutById, getWorkouts, createWorkout };
