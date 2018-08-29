import { FETCH_USER } from "./types";

export const fetchUser = () => async dispatch => {
  const res = await axios.get("http://192.168.1.2:8080/api/users/");

  dispatch({ type: FETCH_USER, payload: "testing" });
};
