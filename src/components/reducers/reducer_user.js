export default function(state = [], action) {
  switch (action.type) {
    case "fetch_user":
      return action.payload;
    default:
      console.log(action.type);
      console.log("inside reducer default");
      return state;
  }
}
