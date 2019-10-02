import { success, failure, map } from 'dataway';

import { call, put, takeLatest } from 'redux-saga/effects';

import { QUOTE_FETCH_REQUESTED } from '../actions/actionTypes';
import { quoteFetchRetrieved } from '../actions/actions';

import { ApiQuote } from '../entities/quote';

import fakeApi from '../services/fakeApi';

const quoteDecoder = (quote: ApiQuote) => ({
  label: quote.title,
  content: quote.content,
});

function* fetchQuote() {
  try {
    const apiQuote: ApiQuote = yield call(fakeApi.fetchQuote);

    yield put(quoteFetchRetrieved(map(quoteDecoder)(success(apiQuote))));
  } catch (error) {
    yield put(quoteFetchRetrieved(failure(error)));
  }
}

function* watchQuotesRequest() {
  yield takeLatest(QUOTE_FETCH_REQUESTED, fetchQuote);
}

export default watchQuotesRequest;