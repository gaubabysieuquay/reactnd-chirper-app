import { hideLoading, showLoading } from 'react-redux-loading';
import { saveLikeToggle, saveTweet } from '../utils/api';

export const RECEIVE_TWEETS = 'RECEIVE_TWEETS';
export const TOGGLE_TWEET = 'TOGGLE_TWEET';
export const ADD_TWEET = 'ADD_TWEET';

const addTweet = (tweet) => {
  return {
    type: ADD_TWEET,
    tweet,
  };
};

export const handleAddTweet = (text, replyingTo) => {
  return (dispatch, getState) => {
    const { authUser } = getState();

    dispatch(showLoading());

    return saveTweet({
      text,
      author: authUser,
      replyingTo,
    })
      .then((tweet) => dispatch(addTweet(tweet)))
      .then(() => dispatch(hideLoading()));
  };
};

export const receiveTweets = (tweets) => {
  return {
    type: RECEIVE_TWEETS,
    tweets,
  };
};

const toggleTweet = ({ id, authUser, hasLiked }) => {
  return {
    type: TOGGLE_TWEET,
    id,
    authUser,
    hasLiked,
  };
};

export const handleToggleTweet = (info) => {
  return (dispatch) => {
    dispatch(toggleTweet(info));

    return saveLikeToggle(info).catch((e) => {
      console.warn('Error in handleToggleTweet: ', e);
      dispatch(toggleTweet(info));
      alert('There was an error liking the tweet. Try again.');
    });
  };
};
