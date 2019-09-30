export type Todo = {
  label: string;
  content: string;
};

export type InitialState = {
  todos: Todo[];
  isLoading: boolean;
  isError: boolean;
  error: string;
};

export type TodoState = {
  todos: Todo[];
  isLoading: boolean;
  isError: boolean;
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

export type TodoActionTypes =
  | TodoFetchRequested
  | TodoFetchFailure
  | TodoFetchSuccess;
