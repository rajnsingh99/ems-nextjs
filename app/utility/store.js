import { createStore } from "redux";

const appReducer = (
  state = {
    empDetail: {
      firstName: "",
      lastName: "",
      photo: "boy.png",
    },
    empList: [],
    isLoading: false,
  },
  action
) => {
  if (action == "updateProfile") {
    state.empDetail = update;
  }
  return state;
};

const store = createStore(appReducer);

export default store;
