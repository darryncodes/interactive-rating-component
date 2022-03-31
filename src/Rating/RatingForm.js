import React, { useState } from 'react';

import styles from './RatingForm.module.css';

const RatingForm = props => {
  const [enteredRating, setEnteredRating] = useState('');

  const ratingChangeHandler = event => {
    setEnteredRating(event.target.value);
  };

  const submitHandler = event => {
    event.preventDefault();

    const ratingData = {
      rating: enteredRating,
      isSubmitted: true,
    };

    props.onSubmitRatingData(ratingData);
  };

  return (
    <form onSubmit={submitHandler}>
      <fieldset>
        <label htmlFor={['input-1']}>
          <input
            type="radio"
            id={['input-1']}
            value="1"
            name="input"
            required
            onChange={ratingChangeHandler}
          />
          <span className={styles.btn}>1</span>
        </label>
        <label htmlFor={['input-2']}>
          <input
            type="radio"
            id={['input-2']}
            value="2"
            name="input"
            onChange={ratingChangeHandler}
          />
          <span className={styles.btn}>2</span>
        </label>
        <label htmlFor={['input-3']}>
          <input
            type="radio"
            id={['input-3']}
            value="3"
            name="input"
            onChange={ratingChangeHandler}
          />
          <span className={styles.btn}>3</span>
        </label>
        <label htmlFor={['input-4']}>
          <input
            type="radio"
            id={['input-4']}
            value="4"
            name="input"
            onChange={ratingChangeHandler}
          />
          <span className={styles.btn}>4</span>
        </label>
        <label htmlFor={['input-5']}>
          <input
            type="radio"
            id={['input-5']}
            value="5"
            name="input"
            onChange={ratingChangeHandler}
          />
          <span className={styles.btn}>5</span>
        </label>
      </fieldset>
      <input
        type="submit"
        name="Submit"
        value="Submit"
        className={styles.submit}
      />
    </form>
  );
};

export default RatingForm;
