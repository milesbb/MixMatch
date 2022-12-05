import { ThunkAction } from "@reduxjs/toolkit";
import { HookCallbacks } from "async_hooks";
import { AnyAction, Dispatch } from "redux";
import { RootState } from "../store";

export const SET_USER_INFO = "SET_USER_INFO";

export const getProfileInfo = (
  config: RequestInit,
  setLoading: any,
  setError: any
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch: any, getState: any) => {
    try {
      const url = process.env.REACT_APP_BE_URL + "/users/session";
      const response = await fetch(url, config);

      if (response.ok) {
        const tokens = await response.json();

        localStorage.setItem("accessToken", tokens.accessToken);
        localStorage.setItem("refreshToken", tokens.refreshToken);

        dispatch({
          type: SET_USER_INFO,
          payload: tokens.user,
        });
      } else {
        setError(true);
      }
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };
};
