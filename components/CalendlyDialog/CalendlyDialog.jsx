import styles from './CalendlyDialog.module.scss';
import React from 'react';
import { InlineWidget } from 'react-calendly';

function CalendlyDialog({ closeModal }) {
  return (
    <div onClick={closeModal} className={styles.calendlyDialog}>
      <div className={styles.content}>
        <button onClick={closeModal} className={styles.close}>
          X
        </button>
        <InlineWidget url="https://calendly.com/ltvcac/demo-call-with-ltvcac?text_color=514e4e&primary_color=3725a2" />
      </div>
    </div>
  );
}

export default CalendlyDialog;
