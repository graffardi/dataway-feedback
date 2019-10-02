import React from 'react';

import { Todo } from '../../entities/todoList';

import styles from './TodoList.module.scss';

type Props = {
  todos: Todo[],
  fetchTodo: () => void,
};

const TodoList = (props: Props) => {
  const { todos, fetchTodo } = props;

  const handleClick = () => {
    fetchTodo();
  }

  console.log(todos);

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
    </div>
  );
};

export default TodoList;
