import { Dataway } from "dataway";

import { QuoteActionTypes, Quote } from "../entities/quote";

import {
  QUOTE_FETCH_REQUESTED,
  QUOTE_FETCH_RETRIEVED,
} from "../actions/actionTypes";


export const quoteFetchRequested = (): QuoteActionTypes => ({
  type: QUOTE_FETCH_REQUESTED,
});

export const quoteFetchRetrieved = (quote: Dataway<Error, Quote>): QuoteActionTypes => ({
  type: QUOTE_FETCH_RETRIEVED,
  payload: {
    quote,
  },
});
