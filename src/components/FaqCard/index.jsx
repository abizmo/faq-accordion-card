import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Faq from './Faq';

const FaqCard = ({ faqs }) => {
  const [showArray, setShowArray] = useState(faqs.map(() => false));

  const onClick = (index) => setShowArray(showArray
    .map((e, i) => (index === i ? !showArray[i] : false)));

  return (
    <div className="bg-white w-mobw xl:w-desw h-mobh mx-auto pb-6u px-3u rounded shadow-2xl flex flex-col xl:flex-row">
      <div className="flex flex-col items-center h-16u w-full xl:w-1/2 relative">
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
      </div>
      <div className="flex-1 xl:pr-16 xl:pt-28">
        <h1 className="text-h1 text-center xl:text-left font-bold mb-2u">FAQ</h1>
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
