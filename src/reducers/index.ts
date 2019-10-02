import { notAsked, loading } from "dataway";

import {
  QuoteActionTypes,
  QuoteState,
} from "../entities/quote";

import {
  QUOTE_FETCH_RETRIEVED,
  QUOTE_FETCH_REQUESTED,
} from "../actions/actionTypes";

const initialState: QuoteState = {
  quote: notAsked,
};

const initialReducer = (
  state: QuoteState = initialState,
  action: QuoteActionTypes
): QuoteState => {
  switch (action.type) {
    case QUOTE_FETCH_REQUESTED: {
      return {
        ...state,
        quote: loading,
      };
    }

    case QUOTE_FETCH_RETRIEVED: {
      const { quote } = action.payload;

      return {
        ...state,
        quote,
      }
    }

    default: {
      return state;
    }
  }
};

export default initialReducer;
