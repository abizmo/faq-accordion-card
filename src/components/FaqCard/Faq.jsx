import React from 'react';
import PropTypes from 'prop-types';

const Faq = ({ question, answer }) => (
  <div>
    {question}
    {answer}
  </div>
);

Faq.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
};

export default Faq;
