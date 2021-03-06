import React, { Component } from 'react';
import {
  TiArrowBackOutline,
  TiHeartFullOutline,
  TiHeartOutline,
} from 'react-icons/ti/index';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { handleToggleTweet } from '../actions/tweets.action';
import { formatDate, formatTweet } from '../utils/helpers';
class Tweet extends Component {
  handleLike = (e) => {
    e.preventDefault();

    const { dispatch, tweet, authUser } = this.props;

    dispatch(
      handleToggleTweet({
        id: tweet.id,
        hasLiked: tweet.hasLiked,
        authUser,
      })
    );
  };

  toParent = (e, id) => {
    e.preventDefault();
    this.props.history.push(`/tweet/${id}`);
  };
  render() {
    const { tweet } = this.props;

    if (tweet === null) {
      return <p>This Tweet doesn't existed</p>;
    }

    const {
      name,
      avatar,
      timestamp,
      text,
      hasLiked,
      likes,
      replies,
      id,
      parent,
    } = tweet;

    return (
      <Link to={`/tweet/${id}`} className="tweet">
        <img src={avatar} alt={`Avatar of ${name}`} className="avatar" />
        <div className="tweet-info">
          <span>{name}</span>
          <div>{formatDate(timestamp)}</div>
          {parent && (
            <button
              className="replying-to"
              onClick={(e) => this.toParent(e, parent.id)}
            >
              Replying to @{parent.author}
            </button>
          )}
          <p>{text}</p>
        </div>
        <div className="tweet-icons">
          <TiArrowBackOutline className="tweet-icon" />
          <span>{replies !== 0 && replies}</span>
          <button className="heart-button" onClick={this.handleLike}>
            {hasLiked === true ? (
              <TiHeartFullOutline color="#e0245e" className="tweet-icon" />
            ) : (
              <TiHeartOutline className="tweet-icon" />
            )}
          </button>
          <span>{likes !== 0 && likes}</span>
        </div>
      </Link>
    );
  }
}

const mapStateToProps = ({ authUser, users, tweets }, { id }) => {
  const tweet = tweets[id];
  const parentTweet = tweet ? tweets[tweet.replyingTo] : null;

  return {
    authUser,
    tweet: formatTweet(tweet, users[tweet.author], authUser, parentTweet),
  };
};

export default withRouter(connect(mapStateToProps)(Tweet));
