import React from 'react';

import { CircularProgress } from '@material-ui/core';

import { Todo } from '../../entities/todoList';

import styles from './TodoList.module.scss';

import TodoListItem from '../TodoListItem/TodoListItem';

type Props = {
  todos: Todo[];
  isLoading: boolean;
  isError: boolean;
  error: string;
  fetchTodo: () => void;
};

const TodoList = (props: Props) => {
  const {
    todos,
    isLoading,
    isError,
    error,
    fetchTodo
  } = props;

  const handleClick = () => {
    fetchTodo();
  }

  return (
    <div className={styles.todoListContainer}>
      <div className={styles.todoListHeader}>
        <h2>La liste de trucs à faire</h2>

        <button
          className={styles.todoListButton}
          onClick={handleClick}
        >
          Go
        </button>
      </div>

      {isLoading && (
        <div className={styles.todoListLoading}>
          <CircularProgress />
        </div>
      )}

      <ul>
        {isError && <li className={styles.todoListError}>{`${error}`}</li>}

        {todos.map((todo: Todo, i: number) => (
          <TodoListItem
            {...todo}
            key={`todo-${i}`}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
