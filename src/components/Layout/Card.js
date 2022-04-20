<<<<<<< HEAD
import React, { useState } from 'react';

import Content from './Content';
import Result from './Result';
import styles from './Card.module.css';

const Card = () => {
  const [ratingData, setRatingData] = useState({
    rating: null,
    isSubmitted: false,
  });

  //   const addRatingHandler = rating => {
  //     console.log('In Card.js');
  //     console.log(rating);
  //     return rating;
  //   };

  if (ratingData.isSubmitted === true) {
    return (
      <main className={styles.card}>
        <Result {...ratingData} />
      </main>
    );
  }

  return (
    <main className={styles.card}>
      <Content onAddRating={setRatingData} />
=======
import React from 'react';

import Content from './Content';
// import Result from './Result';
import styles from './Card.module.css';

const Card = () => {
  const addRatingHandler = rating => {
    console.log('In Card.js');
    console.log(rating);
    return rating;
  };

  //   if (addRatingHandler.isSubmitted === true) {
  //     <main className={styles.card}>
  //       <Result />;
  //     </main>;
  //   }

  return (
    <main className={styles.card}>
      <Content onAddRating={addRatingHandler} />
>>>>>>> 90eb7576f7521085899b425e815c1427d5f87132
    </main>
  );
};

export default Card;
