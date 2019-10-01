import React from 'react';

import { Todo } from '../../entities/todoList';

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
    <div>
      TodoList component

      <button onClick={handleClick}>BONJOUR</button>
    </div>
  );
};

export default TodoList;
