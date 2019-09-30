import {
  TodoActionTypes,
  InitialState,
  TodoState,
} from "../entities/todoList";

import {
  TODO_FETCH_FAILURE,
  TODO_FETCH_SUCCESS,
} from "../actions/actionTypes";

const initialState: InitialState = {
  todos: [],
  error: '',
};

const initialReducer = (
  state: InitialState = initialState,
  action: TodoActionTypes
): TodoState => {
  switch (action.type) {
    case TODO_FETCH_FAILURE: {
      const { error } = action.payload;

      return {
        ...state,
        error,
      };
    }

    case TODO_FETCH_SUCCESS: {
      const { todos } = action.payload;

      return {
        ...state,
        todos,
      }
    }

    default: {
      return state;
    }
  }
};

export default initialReducer;