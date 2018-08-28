export function getUser(state = {}, action) {
  switch (action.type) {
    case "FETCH_USER":
      return action.fetchUser;
    default:
      return state;
  }
}
