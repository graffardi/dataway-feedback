import { TodoActionTypes } from "../entities/todoList";

import {
  TODO_FETCH_REQUESTED,
  TODO_FETCH_FAILURE,
  TODO_FETCH_SUCCESS,
} from "../actions/actionTypes";


export const todoFetchRequested = (): TodoActionTypes => ({
  type: TODO_FETCH_REQUESTED,
  payload: {
    todos: [],
  },
});

export const todoFetchFailure = (): TodoActionTypes => ({
  type: TODO_FETCH_FAILURE,
  payload: {
    error: 'c tout kc',
  },
});

export const todoFetchSuccess = (): TodoActionTypes => ({
  type: TODO_FETCH_SUCCESS,
  payload: {
    todos: [],
  },
});
