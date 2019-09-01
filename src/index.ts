import React from "react";

enum ActionType {
  ADD,
  DELETE
}

interface IAction<T> {
  type: ActionType;
  key: string;
  value?: T;
}

interface IKV<V> {
  [path: string]: V;
}

const reducer = <V>(state: IKV<V>, action: IAction<V>): IKV<V> => {
  const newState = { ...state };
  switch (action.type) {
    case ActionType.ADD:
      newState[action.key] = action.value!;
      break;
    case ActionType.DELETE:
      delete newState[action.key];
      break;
  }
  return newState;
};

export const useKV = <T>(): [
  IKV<T>,
  (k: string, v: T) => void,
  (k: string) => void
] => {
  const [nextState, dispatch] = React.useReducer(
    (state: IKV<T>, action: IAction<T>) => reducer(state, action),
    {}
  );
  const add = (key: string, value: T) =>
    dispatch({ type: ActionType.ADD, key, value });
  const del = (key: string) => dispatch({ type: ActionType.DELETE, key });
  return [nextState, add, del];
};
