import React from 'react';

import { Dataway, fold } from 'dataway';

import { CircularProgress } from '@material-ui/core';

import { Todo } from '../../entities/todoList';

import styles from './TodoList.module.scss';

import TodoListItem from '../TodoListItem/TodoListItem';

type Props = {
  todos: Todo[];
  currentTodo: Dataway<Error, Todo>,
  fetchTodo: () => void;
};

const TodoList = (props: Props) => {
  const {
    todos,
    currentTodo,
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

      <ul>
        {fold(
          () => { },
          () => (
            <div className={styles.todoListLoading}>
              <CircularProgress />
            </div>
          ),
          (error) => <li className={styles.todoListError}>{`${error}`}</li>,
          (value) => { },
          currentTodo
        )}

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
