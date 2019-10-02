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
  quote: Quote | null;
  isLoading: boolean;
  isError: boolean;
  error: string;
};

type QuoteFetchRequested = {
  type: 'QUOTE_FETCH_REQUESTED',
};

type QuoteFetchFailure = {
  type: 'QUOTE_FETCH_FAILURE',
  payload: {
    error: string,
  },
};

type QuoteFetchSuccess = {
  type: 'QUOTE_FETCH_SUCCESS',
  payload: {
    quote: Quote,
  },
};

export type QuoteActionTypes =
  | QuoteFetchRequested
  | QuoteFetchFailure
  | QuoteFetchSuccess;
