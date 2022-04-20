import React from 'react';
import RatingForm from '../Rating/RatingForm';

import styles from './Content.module.css';

const Content = props => {
  const saveRatingDataHandler = enteredRatingData => {
    const ratingData = {
      ...enteredRatingData,
      id: Math.random().toString(),
    };
    props.onAddRating(ratingData);
  };

  return (
    <>
      <div className={styles.content__icon}>
        <img src="../img/icon-star.svg" alt="" />
      </div>
      <h1 className={styles.content__heading}>How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <RatingForm onSubmitRatingData={saveRatingDataHandler} />
    </>
  );
};

export default Content;
