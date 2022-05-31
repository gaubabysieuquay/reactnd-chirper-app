import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formatTweet } from '../utils/helpers';

class Tweet extends Component {
  render() {
    console.log(this.props);
    return <div className="tweet"></div>;
  }
}

const mapStateToProps = ({ authUser, users, tweets }, { id }) => {
  const tweet = tweets[id];

  return {
    authUser,
    tweet: formatTweet(tweet, users[tweet.author], authUser),
  };
};

export default connect(mapStateToProps)(Tweet);
