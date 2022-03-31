import React from 'react';

import styles from './Result.module.css';

const Result = () => {
  return (
    <main className={styles.result}>
      <img
        src="../img/illustration-thank-you.svg"
        alt=""
        className={styles.result__img}
      />
      <p className={styles.result__feedback}>You selected X out of 5</p>
      <h1 className={styles.result__heading}>Thank you!</h1>
      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </main>
  );
};

export default Result;
