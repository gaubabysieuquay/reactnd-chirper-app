export const RECEIVE_USERS = "RECEIVE_USERS";

export const receiveUser = (users) => {
  return {
    type: RECEIVE_USERS,
    users,
  };
};
