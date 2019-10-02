import React from 'react';

import { Dataway, fold } from 'dataway';

import { CircularProgress } from '@material-ui/core';

import { Quote as QuoteType } from '../../entities/quote';

import styles from './Quote.module.scss';

type Props = {
  quote: Dataway<Error, QuoteType>;
  fetchQuote: () => void;
};

const Quote = (props: Props) => {
  const {
    quote,
    fetchQuote
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
        {fold(
          () => null,
          () => (
            <div className={styles.quoteLoading}>
              <CircularProgress />
            </div>
          ),
          (error) => <p className={styles.quoteError}>{error}</p>,
          (quoteValue) => (
            <>
              <h3>{quoteValue.label}</h3>
              <p>{quoteValue.content}</p>
            </>
          ),
          quote
        )}
      </div>
    </div>
  );
};

export default Quote;
