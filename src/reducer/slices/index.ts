import { PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";
import bottomSheetSlice from "./bottomSheet/bottomSheetSlice";

const rootReducer = (state: any, action: PayloadAction<any>) => {
  switch (action.type) {
    case HYDRATE:
      return action.payload.global.init
        ? { ...state, ...action.payload }
        : { ...state };

    default: {
      const combineReducer = combineReducers({
        bottomSheet: bottomSheetSlice,
      });
      return combineReducer(state, action);
    }
  }
};

export default rootReducer;