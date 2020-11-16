import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux";

function User() {
  const userData = useSelector((state) => state.user);
  const dispatch = useDispatch();
  return userData.loading ? (
    <h1>Loading</h1>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <div>
      <ul>
        {userData &&
          userData.users &&
          userData.users.map((user) => <li>{user.name}</li>)}
      </ul>
      <button
        onClick={() => {
          dispatch(fetchUsers());
        }}
      >
        Fetch
      </button>
    </div>
  );
}

export default User;
