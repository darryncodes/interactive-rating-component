import React from 'react';

import illustration from '../../img/illustration-thank-you.svg';
import styles from './Result.module.css';

const Result = props => {
  return (
    <div className={styles.result}>
      <img src={illustration} alt="" className={styles.result__img} />
      <p className={styles.result__feedback}>
        You selected {props.rating} out of 5
      </p>
      <h1 className={styles.result__heading}>Thank you!</h1>
      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
};

export default Result;
