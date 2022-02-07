import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Faq from './Faq';

const FaqCard = ({ faqs }) => {
  const [showArray, setShowArray] = useState(faqs.map(() => false));

  const onClick = (index) => setShowArray(showArray
    .map((e, i) => (index === i ? !showArray[i] : false)));

  return (
    <div className="bg-white w-mobw h-mobh mx-auto pb-6u px-3u rounded shadow-2xl">
      <div className="flex flex-col items-center mb-2u pt-16u relative">
        <img
          alt="woman"
          className="absolute -top-32 w-3/4 z-10"
          src={`${process.env.PUBLIC_URL}/images/illustration-woman-online-mobile.svg`}
        />
        <img
          alt="shadow"
          className="absolute top-1 w-3/4 z-0"
          src={`${process.env.PUBLIC_URL}/images/bg-pattern-mobile.svg`}
        />
        <h1 className="text-h1 font-bold">FAQ</h1>
      </div>
      <div>
        {
      faqs.map(({ question, answer }, i) => (
        <Faq
          key={question}
          answer={answer}
          onClick={() => onClick(i)}
          question={question}
          show={showArray[i]}
        />
      ))
    }
      </div>
    </div>
  );
};

FaqCard.propTypes = {
  faqs: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default FaqCard;
