import { SET_AUTH_USER } from "../actions/authUser.action";

export default function authUser(state = null, action) {
  switch (key) {
    case SET_AUTH_USER:
      return action.id;

    default:
      return state;
  }
}
