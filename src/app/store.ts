import { configureStore } from "@reduxjs/toolkit";
import { Action } from "redux";
import { combineEpics, createEpicMiddleware } from "redux-observable";

import { horseDefsReducer, horseDefsEpic } from "../features/horse-defs";
import { indicatorReducer } from "../features/indicator";

const dependencies = {};
const epicMiddleware = createEpicMiddleware<
  Action,
  Action,
  void,
  typeof dependencies
>({
  dependencies,
});

export const store = configureStore({
  reducer: {
    horseDefs: horseDefsReducer,
    indicator: indicatorReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: false,
    }).concat([epicMiddleware]),
});

epicMiddleware.run(combineEpics(horseDefsEpic) as any);

export type RootState = ReturnType<typeof store.getState>;
export type Dependencies = typeof dependencies;
