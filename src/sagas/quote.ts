import { call, put, takeLatest } from 'redux-saga/effects';

import { QUOTE_FETCH_REQUESTED } from '../actions/actionTypes';
import { quoteFetchSuccess, quoteFetchFailure } from '../actions/actions';

import { ApiQuote } from '../entities/quote';

import fakeApi from '../services/fakeApi';

const quoteDecoder = (quote: ApiQuote) => ({
  label: quote.title,
  content: quote.content,
});

function* fetchQuote() {
  try {
    const apiQuote: ApiQuote = yield call(fakeApi.fetchQuote);

    yield put(quoteFetchSuccess(quoteDecoder(apiQuote)));
  } catch (error) {
    yield put(quoteFetchFailure(error));
  }
}

function* watchQuotesRequest() {
  yield takeLatest(QUOTE_FETCH_REQUESTED, fetchQuote);
}

export default watchQuotesRequest;