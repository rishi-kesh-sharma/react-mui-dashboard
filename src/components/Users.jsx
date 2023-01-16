import React, { useEffect } from "react";
import { getAllUsers } from "../apiCalls/user";
import UsersTable from "./tables/UsersTable";
import { useDispatch } from "react-redux";
import { SET_USERS } from "../actions/userActions";

const Users = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getUsersInfo = async () => {
      const usersInfo = await getAllUsers();
      dispatch({ type: SET_USERS, payload: usersInfo });
    };
    getUsersInfo();
  }, []);
  return (
    <div>
      <UsersTable />
    </div>
  );
};

export default Users;
