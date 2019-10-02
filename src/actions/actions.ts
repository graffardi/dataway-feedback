import { QuoteActionTypes, Quote } from "../entities/quote";

import {
  QUOTE_FETCH_REQUESTED,
  QUOTE_FETCH_FAILURE,
  QUOTE_FETCH_SUCCESS,
} from "../actions/actionTypes";


export const quoteFetchRequested = (): QuoteActionTypes => ({
  type: QUOTE_FETCH_REQUESTED,
});

export const quoteFetchFailure = (error: string): QuoteActionTypes => ({
  type: QUOTE_FETCH_FAILURE,
  payload: {
    error,
  },
});

export const quoteFetchSuccess = (quote: Quote): QuoteActionTypes => ({
  type: QUOTE_FETCH_SUCCESS,
  payload: {
    quote,
  },
});
