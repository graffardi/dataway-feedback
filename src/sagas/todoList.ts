import { call, put, takeLatest } from 'redux-saga/effects';

import { TODO_FETCH_REQUESTED } from '../actions/actionTypes';
import { todoFetchSuccess, todoFetchFailure } from '../actions/actions';

import { Todo } from '../entities/todoList';

import fakeApi from '../services/fakeApi';

function* fetchTodo() {
  try {
    const todo: Todo = yield call(fakeApi.fetchTodo);

    yield put(todoFetchSuccess(todo));
  } catch (error) {
    yield put(todoFetchFailure(error));
  }
}

function* watchTodosRequest() {
  yield takeLatest(TODO_FETCH_REQUESTED, fetchTodo);
}

export default watchTodosRequest;