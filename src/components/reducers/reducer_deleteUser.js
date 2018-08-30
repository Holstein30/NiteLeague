export default function(state = null, action) {
  switch (action.type) {
    case "delete_user":
      return action.payload;
    default:
      return state;
  }
}
