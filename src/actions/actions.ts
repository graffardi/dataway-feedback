import { Dataway } from "dataway";

import { TodoActionTypes, Todo } from "../entities/todoList";

import {
  TODO_FETCH_REQUESTED,
  TODO_FETCH_RETRIEVED,
} from "../actions/actionTypes";


export const todoFetchRequested = (): TodoActionTypes => ({
  type: TODO_FETCH_REQUESTED,
});

export const todoFetchRetrieved = (todo: Dataway<Error, Todo>): TodoActionTypes => ({
  type: TODO_FETCH_RETRIEVED,
  payload: {
    todo,
  },
});
