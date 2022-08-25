import styles from './LetsTalk.module.scss';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import CalendlyDialog from '../CalendlyDialog/CalendlyDialog';

function LetsTalk({ contentSide }) {
  const [calendlyOpen, setCalenlyOpen] = React.useState(false);

  const showDialog = () => {
    setCalenlyOpen(true);
  };

  useEffect(() => {
    const body = document.querySelector('html');
    body.style.overflow = calendlyOpen ? 'hidden' : 'auto';
  }, [calendlyOpen]);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) =>
    axios
      .post('https://hook.eu1.make.com/gnsrx5v9ojaht18h8pftfzj4qvihkslo', data)
      .then((response) => {
        reset();
        showDialog();
      })
      .catch((error) => {
        console.log(error);
      });

  return (
    <section className={`section section--title-${contentSide} mb-80 mb-md-0`}>
      <div className="container p-0">
        <div className="row">
          <div className="col-12 col-md-5 mb-50 mb-md-0 order-md-1 col-xl-5 offset-xl-2">
            <div className="section__title-box p-20 pt-120 pb-120 pt-md-100 pt-xl-280 pb-xl-280">
              <h2 className="section__title section__title--large ta-left">
                LET&apos;S
                <br />
                TALK
              </h2>
            </div>
          </div>
          <div
            className={`col-10 col-md-5 col-xl-4 offset-1 offset-md-1 pt-md-60 pb-md-60 ${
              contentSide === 'left' ? 'order-md-1' : ''
            }  offset-xl-1 pt-xl-100`}>
            <div className={`${styles.letsTalk} m-auto`}>
              <h3 className={styles.title}>
                Speak With <br /> Expert Team
              </h3>
              <span className={styles.label}>FREE!</span>
              <h4 className="h3 mb-30">For $3k+ work budgets:</h4>
              <ul className={`${styles.list} mb-50`}>
                <li>Product audit</li>
                <li>Customer & market research</li>
                <li>Competitive analysis</li>
                <li>Sales and ads channels audit</li>
                <li>Business model optimization</li>
              </ul>
            </div>
            <div className={styles.form}>
              <form onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <div className={`${styles.field} ${errors.Name && styles.error}`}>
                  <input placeholder="Your Name:" {...register('Name', { required: true })} />
                </div>
                <div className={`${styles.field} ${errors.PhoneNumber && styles.error}`}>
                  <input
                    placeholder="WhatsApp phone number:"
                    type="tel"
                    pattern="[0-9]*"
                    {...register('PhoneNumber', {
                      required: true,
                    })}
                  />
                </div>
                <div className={`${styles.field} ${errors.Email && styles.error}`}>
                  <input
                    placeholder="Your email:"
                    {...register('Email', {
                      required: true,
                    })}
                  />
                </div>
                <div className={styles.submit}>
                  <input className="button CTA" type="submit" value="TELL US ABOUT YOUR PROJECT" />
                </div>
                <p className={styles.copy}>
                  By submitting this form you agree <br /> with terms of privacy policy
                </p>
              </form>
            </div>
          </div>
          {calendlyOpen && <CalendlyDialog closeModal={() => setCalenlyOpen(false)} />}
        </div>
      </div>
    </section>
  );
}

export default LetsTalk;
