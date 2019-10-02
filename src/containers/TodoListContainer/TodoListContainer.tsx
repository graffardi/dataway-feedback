import { connect } from "react-redux";

import { TodoState } from "../../entities/todoList";

import { todoFetchRequested } from "../../actions/actions";

import TodoList from "../../components/TodoList/TodoList";

export const mapStateToProps = (state: TodoState) => ({
  todos: state.todos,
  isLoading: state.isLoading,
  isError: state.isError,
  error: state.error,
});

export const mapDispatchToProps = ({
  fetchTodo: todoFetchRequested,
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);