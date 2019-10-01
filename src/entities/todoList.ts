export type Todo = {
  label: string;
  content: string;
};

export type TodoState = {
  todos: Todo[];
  isLoading: boolean;
  isError: boolean;
  error: string;
};

type TodoFetchRequested = {
  type: 'TODO_FETCH_REQUESTED',
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
    todo: Todo,
  },
};

export type TodoActionTypes =
  | TodoFetchRequested
  | TodoFetchFailure
  | TodoFetchSuccess;
