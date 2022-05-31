import { getInitialData } from '../utils/api';
import { setAuthUser } from './authUser.action';
import { receiveTweets } from './tweets.action';
import { receiveUsers } from './users.action';

const AUTH_ID = 'tylermcginnis';

export const handleInitialData = () => {
  return (dispatch) => {
    return getInitialData().then(({ users, tweets }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveTweets(tweets));
      dispatch(setAuthUser(AUTH_ID));
    });
  };
};
