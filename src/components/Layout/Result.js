import React from 'react';

<<<<<<< HEAD
import illustration from '../../img/illustration-thank-you.svg';
import styles from './Result.module.css';

const Result = props => {
  return (
    <main className={styles.result}>
      <img src={illustration} alt="" className={styles.result__img} />
      <p className={styles.result__feedback}>
        You selected {props.rating} out of 5
      </p>
=======
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
>>>>>>> 90eb7576f7521085899b425e815c1427d5f87132
      <h1 className={styles.result__heading}>Thank you!</h1>
      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </main>
  );
};

export default Result;
