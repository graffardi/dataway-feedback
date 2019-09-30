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
  isLoading: false,
  isError: false,
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
        isLoading: false,
        isError: true,
        error,
      };
    }

    case TODO_FETCH_SUCCESS: {
      const { todos } = action.payload;

      return {
        ...state,
        isLoading: false,
        todos,
      }
    }

    default: {
      return state;
    }
  }
};

export default initialReducer;