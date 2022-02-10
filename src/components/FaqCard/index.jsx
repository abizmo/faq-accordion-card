/* eslint-disable max-len */
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import Faq from './Faq';

const FaqCard = ({ faqs }) => {
  const [showArray, setShowArray] = useState(faqs.map(() => false));

  const onClick = (index) => setShowArray(showArray
    .map((e, i) => (index === i ? !showArray[i] : false)));

  return (
    <div className="bg-white w-mobw xl:w-desw h-mobh mx-auto relative rounded shadow-2xl flex flex-col xl:flex-row justify-end">
      <div className="h-16u xl:h-full relative rounded xl:flex-1 bg-pattern-mobile xl:bg-pattern-desktop bg-auto bg-no-repeat bg-top xl:bg-right">
        <div className="bg-woman-mobile scale-150 xl:scale-100 xl:bg-woman-desktop absolute xl:top-4 z-10 bg-no-repeat bg-top -top-2/3 xl:bg-right bg-contain xl:bg-auto h-full w-full" />
      </div>
      <img
        className="hidden xl:block h-1/2 w-auto absolute -left-72 top-2/3 -translate-y-2/3 translate-x-1/4 z-20"
        src={`${process.env.PUBLIC_URL}/images/illustration-box-desktop.svg`}
        alt="box"
      />
      <div className="flex-1 pb-6u px-3u xl:pt-28 w-full xl:w-1/2 xl:mx-16 xl:max-w-lg">
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
