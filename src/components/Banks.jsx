import React from "react";
import BanksTable from "./tables/BanksTable";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { GET_ALL_BANKS } from "./../actions/bankActions";

const Banks = () => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch({ type: GET_ALL_BANKS });
  // }, []);
  // const banks = useSelector((state) => state.bankReducer);
  // console.log(banks);
  return (
    <div>
      <BanksTable />
    </div>
  );
};

export default Banks;
