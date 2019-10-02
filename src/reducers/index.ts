import {
  QuoteActionTypes,
  QuoteState,
} from "../entities/quote";

import {
  QUOTE_FETCH_SUCCESS,
  QUOTE_FETCH_FAILURE,
  QUOTE_FETCH_REQUESTED,
} from "../actions/actionTypes";

const initialState: QuoteState = {
  quote: null,
  isLoading: false,
  isError: false,
  error: '',
};

const initialReducer = (
  state: QuoteState = initialState,
  action: QuoteActionTypes
): QuoteState => {
  switch (action.type) {
    case QUOTE_FETCH_REQUESTED: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case QUOTE_FETCH_FAILURE: {
      const { error } = action.payload;

      return {
        ...state,
        isError: true,
        error,
      };
    }

    case QUOTE_FETCH_SUCCESS: {
      const { quote } = action.payload;

      return {
        ...state,
        isLoading: false,
        quote,
      }
    }

    default: {
      return state;
    }
  }
};

export default initialReducer;
