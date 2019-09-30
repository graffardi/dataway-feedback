type Todo = {
  label: string;
  content: string;
};

type InitialState = {
  todos: Todo[];
  error: string;
};

type TodoState = {
  todos: Todo[];
  error: string;
};

type TodoFetchRequested = {
  type: 'TODO_FETCH_REQUESTED',
  payload: {
    todos: Todo[],
  },
};

type TodoFetchFailure = {
  type: 'TODO_FETCH_FAILURE',
  payload: {
    error: string,
  },
};

type TodoFetchSuccess = {
  type: 'TODO_FETCH_SUCCESS',
  payload: {
    todos: Todo[],
  },
};

type TodoActionTypes = TodoFetchRequested | TodoFetchFailure | TodoFetchSuccess;

const TODO_FETCH_REQUESTED = 'TODO_FETCH_REQUESTED';
const TODO_FETCH_FAILURE = 'TODO_FETCH_FAILURE';
const TODO_FETCH_SUCCESS = 'TODO_FETCH_SUCCESS';

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