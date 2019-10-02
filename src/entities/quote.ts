import { Dataway } from 'dataway';

export type ApiQuote = {
  title: string;
  content: string;
};

export type Quote = {
  label: string;
  content: string;
};

export type QuoteState = {
  quote: Dataway<Error, Quote>;
};

type QuoteFetchRequested = {
  type: 'QUOTE_FETCH_REQUESTED',
};

type QuoteFetchRetrieved = {
  type: 'QUOTE_FETCH_RETRIEVED',
  payload: {
    quote: Dataway<Error, Quote>,
  },
};

export type QuoteActionTypes =
  | QuoteFetchRequested
  | QuoteFetchRetrieved;
