import { connect } from "react-redux";

import { QuoteState } from "../../entities/quote";

import { quoteFetchRequested } from "../../actions/actions";

import Quote from "../../components/Quote/Quote";

export const mapStateToProps = (state: QuoteState) => ({
  quote: state.quote,
});

export const mapDispatchToProps = ({
  fetchQuote: quoteFetchRequested,
});

export default connect(mapStateToProps, mapDispatchToProps)(Quote);