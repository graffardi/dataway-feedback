import {
  TodoActionTypes,
  TodoState,
} from "../entities/todoList";

import {
  TODO_FETCH_FAILURE,
  TODO_FETCH_SUCCESS,
  TODO_FETCH_REQUESTED,
} from "../actions/actionTypes";

const initialState: TodoState = {
  todos: [],
  isLoading: false,
  isError: false,
  error: '',
};

const initialReducer = (
  state: TodoState = initialState,
  action: TodoActionTypes
): TodoState => {
  switch (action.type) {
    case TODO_FETCH_REQUESTED: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case TODO_FETCH_FAILURE: {
      const { error } = action.payload;

      return {
        ...state,
        isError: true,
        error,
      };
    }

    case TODO_FETCH_SUCCESS: {
      const { todo } = action.payload;

      return {
        ...state,
        isLoading: false,
        todos: [todo, ...state.todos],
      }
    }

    default: {
      return state;
    }
  }
};

export default initialReducer;
