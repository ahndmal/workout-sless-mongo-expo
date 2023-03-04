// Functions URLs
const GET_ALL_WORKOUTS =
  "https://us-central1-workouts-app2.cloudfunctions.net/go_gcp_cfunc_mongo_workouts";
const GET_WORKOUT = "https://get-workout-go-zj35iavtfa-uc.a.run.app";
const CREATE_WORKOUT =
  "https://create-workout-mongo-python-zj35iavtfa-uc.a.run.app/"; // Python

// APIs
const getWorkoutById = async (record) => {
  const url = `${GET_WORKOUT}?record=${record}`;
  const resp = await fetch(url);
  return await resp.json();
};

const getWorkouts = async (wType, wDate, month, year) => {
  if (wType !== undefined) {
    const resp = await fetch(`${GET_ALL_WORKOUTS}?wType=${wType}`);
    return await resp.json();
  } else if (wDate !== undefined) {
    const resp = await fetch(`${GET_ALL_WORKOUTS}?wDate=${wDate}`);
    return await resp.json();
  }
  const resp = await fetch(GET_ALL_WORKOUTS);
  return await resp.json();
};

async function createWorkout(data) {
  let dataBody = JSON.stringify(data);
  console.log(dataBody);
  const response = await fetch(CREATE_WORKOUT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-cache",
    body: dataBody,
  });
  return response.text();
}

export { getWorkoutById, getWorkouts, createWorkout };
