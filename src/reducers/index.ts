import { notAsked, loading, fold } from "dataway";

import {
  TodoActionTypes,
  TodoState,
} from "../entities/todoList";

import {
  TODO_FETCH_RETRIEVED,
  TODO_FETCH_REQUESTED,
} from "../actions/actionTypes";

const initialState: TodoState = {
  todos: [],
  currentTodo: notAsked,
};

const initialReducer = (
  state: TodoState = initialState,
  action: TodoActionTypes
): TodoState => {
  switch (action.type) {
    case TODO_FETCH_REQUESTED: {
      return {
        ...state,
        currentTodo: loading,
      };
    }

    case TODO_FETCH_RETRIEVED: {
      const { todo } = action.payload;

      const todoAsArray = fold(
        () => [],
        () => [],
        (_) => [],
        (value) => [value],
        todo
      );

      state.todos.push(...todoAsArray);

      return {
        ...state,
        currentTodo: todo,
      }
    }

    default: {
      return state;
    }
  }
};

export default initialReducer;
