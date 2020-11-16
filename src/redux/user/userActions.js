import axios from "axios";
import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE
} from "./userTypes";

export const fetchUsersRequest = () => ({
  type: FETCH_USER_REQUEST
});

export const fetchUsersRequestSuccess = (users) => ({
  type: FETCH_USER_SUCCESS,
  payload: users
});

export const fetchUsersRequestFailed = (error) => ({
  type: FETCH_USER_FAILURE,
  payload: error
});

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequest);

    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        const fetchedUsers = res.data;
        dispatch(fetchUsersRequestSuccess(fetchedUsers));
      })
      .catch((err) => {
        const errorMsg = err.message;
        dispatch(fetchUsersRequestFailed(errorMsg));
      });
  };
};
