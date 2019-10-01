import { Todo } from "../entities/todoList";

const fetchTodo = async (): Promise<Todo> => {

  const todoPromise: Todo = await new Promise((resolve, reject) => {
    const randError = Math.ceil(Math.random() * 10) % 5;

    if (randError === 4) {
      setTimeout(
        () => reject('Ben elle va marcher beaucoup moins bien, forcément !'),
        1000
      );
    }

    setTimeout(
      () => resolve({
        label: 'Faire un film sur le cyclimse',
        content: 'Surtout ne pas confondre la coquetterie et la classe',
      }),
      1500
    );
  });

  return todoPromise;
};

export default {
  fetchTodo,
};
