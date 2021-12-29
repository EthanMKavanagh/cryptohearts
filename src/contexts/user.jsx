import { useState } from "react";
import { useRequest } from "ahooks";
import { me } from "../api";
import Loader from "../components/loader/loader";
import React from "react";
import { useRecoilState } from "recoil";
import { currentLoadingState } from "../state";

export const defaultUser = null;

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE":
      return action.user;
    case "RESET":
      return defaultUser;
    default:
      return state;
  }
};

const UserContext = React.createContext([defaultUser, () => {}]);

export const UserProvider = ({ children }) => {
  const [loading, setLoading] = useRecoilState(currentLoadingState);
  const [state, dispatch] = React.useReducer(reducer, defaultUser);

  useRequest(me, {
    initialData: defaultUser,
    onSuccess: async (result) => {
      if (result) {
        dispatch({ type: "SIGN_IN", user: result });
      }
      setTimeout(() => {
        setLoading(false);
      }, 300);
    },
  });

  return (
    <UserContext.Provider value={[state, dispatch]}>
      <Loader loading={loading}>{children}</Loader>
    </UserContext.Provider>
  );
};

export const useUser = () => React.useContext(UserContext);
