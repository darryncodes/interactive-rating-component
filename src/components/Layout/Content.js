import React from 'react';
import RatingForm from '../Rating/RatingForm';

<<<<<<< HEAD
import icon from '../../img/icon-star.svg';
=======
>>>>>>> 90eb7576f7521085899b425e815c1427d5f87132
import styles from './Content.module.css';

const Content = props => {
  const saveRatingDataHandler = enteredRatingData => {
    const ratingData = {
      ...enteredRatingData,
<<<<<<< HEAD
=======
      id: Math.random().toString(),
>>>>>>> 90eb7576f7521085899b425e815c1427d5f87132
    };
    props.onAddRating(ratingData);
  };

  return (
    <>
      <div className={styles.content__icon}>
<<<<<<< HEAD
        <img src={icon} alt="" />
=======
        <img src="../img/icon-star.svg" alt="" />
>>>>>>> 90eb7576f7521085899b425e815c1427d5f87132
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
