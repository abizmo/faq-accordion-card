import PropTypes from 'prop-types';
import React from 'react';
import Faq from './Faq';

const FaqCard = ({ faqs }) => (
  <div>
    <h1>FAQ</h1>
    <div>
      {
      faqs.map(({ question, answer }) => (
        <Faq key={question} question={question} answer={answer} />
      ))
    }
    </div>
  </div>
);

FaqCard.propTypes = {
  faqs: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default FaqCard;
