import { TodoActionTypes, Todo } from "../entities/todoList";

import {
  TODO_FETCH_REQUESTED,
  TODO_FETCH_FAILURE,
  TODO_FETCH_SUCCESS,
} from "../actions/actionTypes";


export const todoFetchRequested = (): TodoActionTypes => ({
  type: TODO_FETCH_REQUESTED,
});

export const todoFetchFailure = (error: string): TodoActionTypes => ({
  type: TODO_FETCH_FAILURE,
  payload: {
    error,
  },
});

export const todoFetchSuccess = (todo: Todo): TodoActionTypes => ({
  type: TODO_FETCH_SUCCESS,
  payload: {
    todo,
  },
});
