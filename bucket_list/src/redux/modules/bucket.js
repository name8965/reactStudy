// bucket.js

// Actions
// const LOAD = "my-app/widgets/LOAD";
const CREATE = "bucket/CREATE";
// const UPDATE = "my-app/widgets/UPDATE";
// const REMOVE = "my-app/widgets/REMOVE";
const initialState = {
  List: ["영화관 가기", "매일 책읽기", "수영 배우기"],
};

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    // do reducer stuff
    case "bucket/CREATE": {
      const new_bucket_list = [...state.list, action.bucket];
      return { list: new_bucket_list };
    }
    default:
      return state;
  }
}

// // Action Creators
export function createBucket(bucket) {
  return { type: CREATE, bucket };
}

// export function loadWidgets() {
//   return { type: LOAD };
// }

// export function createWidget(widget) {
//   return { type: CREATE, widget };
// }

// export function updateWidget(widget) {
//   return { type: UPDATE, widget };
// }

// export function removeWidget(widget) {
//   return { type: REMOVE, widget };
// }

// side effects, only as applicable
// e.g. thunks, epics, etc
// export function getWidget() {
//   return (dispatch) =>
//     get("/widget").then((widget) => dispatch(updateWidget(widget)));
// }
