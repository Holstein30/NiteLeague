import axios from "axios";
require("babel-polyfill");
import { FETCH_USER, DELETE_USER } from "./types";

export const fetchUser = usernum => async dispatch => {
  const res = await axios.get(`http://192.168.1.2:8080/api/users/${usernum}`);
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const deleteUser = usernum => async dispatch => {
  const res = await axios.delete(
    `http://192.168.1.2:8080/api/users/${usernum}`
  );
  if (res.data) {
    dispatch({ type: DELETE_USER, payload: res.status });
  } else {
    dispatch({ type: DELETE_USER, payload: "user deleted" });
  }
};
