import { Todo } from "../entities/todoList";

const fetchTodo = (): Todo => {
  return {
    label: 'Present Dataway',
    content: 'Comment est votre blanquette?'
  };
};

export default {
  fetchTodo,
};
