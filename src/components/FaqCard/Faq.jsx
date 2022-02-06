import React from 'react';
import PropTypes from 'prop-types';

const Faq = ({
  answer, question, onClick, show,
}) => (
  <div className="border-b py-2u w-full">
    <p
      className="cursor-pointer flex justify-between items-center text-darkGrayishBlue hover:text-softRed text-q"
    >
      <button className={show ? 'font-bold' : null} onClick={onClick} type="button">{question}</button>
      <span className={show ? 'rotate-180' : null}>
        <img src={`${process.env.PUBLIC_URL}/images/icon-arrow-down.svg`} alt="arrow-down" />
      </span>
    </p>
    <p className={`${!show ? 'hidden ' : ''}mt-1u pr-3u text-grayishBlue`}>
      {answer}
    </p>
  </div>
);

Faq.propTypes = {
  answer: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  question: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
};

export default Faq;
