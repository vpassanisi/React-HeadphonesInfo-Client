import React, { useReducer } from "react";
import {
  GETHEADPHONES_SUCCESS,
  GETHEADPHONES_FAIL,
  CLEARHPERRORS,
} from "../types";

import headphonesContext from "./headphonesContext";
import headphonesReducer from "./headphonesReducer";

const HeadphonesState = (props) => {
  const initialstate = {
    headphones: [],
    error: null,
  };

  const [state, dispatch] = useReducer(headphonesReducer, initialstate);

  const getHeadphones = async () => {
    try {
      const req = await fetch(`/headphones`, {
        method: "GET",
      });

      const res = await req.json();

      const status = await req.status;

      if (status) {
        dispatch({
          type: GETHEADPHONES_SUCCESS,
          payload: res,
        });
      } else {
        dispatch({
          type: GETHEADPHONES_FAIL,
          payload: "Something went wrong",
        });

        setTimeout(() => {
          clearErr();
        }, 5000);
      }
    } catch (err) {
      console.log(err);
      dispatch({
        type: GETHEADPHONES_FAIL,
        payload: "Something went wrong",
      });
      setTimeout(() => {
        clearErr();
      }, 5000);
    }
  };

  const clearErr = () => {
    dispatch({
      type: CLEARHPERRORS,
    });
  };

  return (
    <headphonesContext.Provider
      value={{
        headphones: state.headphones,
        error: state.error,
        getHeadphones,
      }}
    >
      {props.children}
    </headphonesContext.Provider>
  );
};

export default HeadphonesState;
