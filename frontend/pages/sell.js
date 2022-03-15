import PropTypes from 'prop-types';

const SellPage = ({ someStr, children }) => <div>Sell</div>;

export default SellPage;

SellPage.propTypes = {
  someStr: PropTypes.string,
  children: PropTypes.any,
};
