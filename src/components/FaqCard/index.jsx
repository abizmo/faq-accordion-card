import PropTypes from 'prop-types';
import React from 'react';
import Faq from './Faq';

const FaqCard = ({ faqs }) => (
  <div className="bg-white max-w-mobile mx-auto pb-6u px-3u rounded shadow-2xl">
    <div className="flex flex-col items-center mb-2u">

      <h1 className="text-h1 font-bold">FAQ</h1>
    </div>
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
