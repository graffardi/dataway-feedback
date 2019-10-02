import React from 'react';

import { CircularProgress } from '@material-ui/core';

import { Quote as QuoteType } from '../../entities/quote';

import styles from './Quote.module.scss';

type Props = {
  quote: QuoteType | null;
  isLoading: boolean;
  isError: boolean;
  error: string;
  fetchQuote: () => void;
};

const Quote = (props: Props) => {
  const {
    quote,
    isLoading,
    isError,
    error,
    fetchQuote,
  } = props;

  const handleClick = () => {
    fetchQuote();
  }

  return (
    <div className={styles.quoteContainer}>
      <div className={styles.quoteHeader}>
        <h2>La citation</h2>

        <button
          className={styles.quoteButton}
          onClick={handleClick}
        >
          Go
        </button>
      </div>

      <div className={styles.quote}>
        {isError && <p className={styles.quoteError}>{error}</p>}

        {isLoading && (
          <div className={styles.quoteLoading}>
            <CircularProgress />
          </div>
        )}

        {quote && (
          <>
            <h3>{quote.label}</h3>
            <p>{quote.content}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Quote;
