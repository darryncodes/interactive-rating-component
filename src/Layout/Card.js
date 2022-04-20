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
    </main>
  );
};

export default Card;
