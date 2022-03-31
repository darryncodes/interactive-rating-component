import React from 'react';

import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.attribution}>
      <p>
        Challenge by{' '}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
          className={styles.attribution__link}
        >
          Frontend Mentor
        </a>
        . Coded by{' '}
        <a
          href="https://www.darryncodes.co.uk/"
          target="_blank"
          rel="noreferrer"
          className={styles.attribution__link}
        >
          @darryncodes
        </a>
        .
      </p>
    </footer>
  );
};

export default Footer;
