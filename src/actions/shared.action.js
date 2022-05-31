import { getInitialData } from "../utils/api";
import { setAuthUser } from "./authUser.action";
import { receiveTweets } from "./tweets.action";
import { receiveUser } from "./users.action";

const AUTH_ID = "tylermcginnis";

export const handleInitialData = () => {
  return (dispatch) => {
    return getInitialData().then(({ users, tweets }) => {
      dispatch(receiveUser(users));
      dispatch(receiveTweets(tweets));
      dispatch(setAuthUser(AUTH_ID));
    });
  };
};
