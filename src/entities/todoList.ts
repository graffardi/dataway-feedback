import { Dataway } from 'dataway';

export type Todo = {
  label: string;
  content: string;
};

export type TodoState = {
  todos: Todo[];
  currentTodo: Dataway<Error, Todo>;
};

type TodoFetchRequested = {
  type: 'TODO_FETCH_REQUESTED',
};

type TodoFetchRetrieved = {
  type: 'TODO_FETCH_RETRIEVED',
  payload: {
    todo: Dataway<Error, Todo>,
  },
};

export type TodoActionTypes =
  | TodoFetchRequested
  | TodoFetchRetrieved;
