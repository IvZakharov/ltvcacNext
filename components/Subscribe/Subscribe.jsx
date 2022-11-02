import styles from './Subscribe.module.scss';
import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import CalendlyDialog from '../CalendlyDialog/CalendlyDialog';

function Subscribe() {
  const [calendlyOpen, setCalenlyOpen] = React.useState(false);

  React.useEffect(() => {
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
      .post('https://hook.eu1.make.com/2xc4g4d8f652ak1gtoxzhjkv25no7i8l', data)
      .then((response) => {
        reset();
        showDialog();
      })
      .catch((error) => {
        console.log(error);
      });

  return (
    <section className={`section section--title-left1 mb-80 mb-md-0`}>
      <div className="container p-0">
        <div className="row">
          <div className="col-12 col-md-5 mb-50 mb-md-0 order-md-1 col-xl-5 offset-xl-1">
            <div className="section__title-box p-20 pt-120 pb-120 pt-md-100 pt-xl-280 pb-xl-280">
              <h2 className="section__title section__title--small ta-left">
                SUBSCRIBE
                <br />
                AND LEARN MORE
              </h2>
            </div>
          </div>

          <div
            className={`col-10 col-md-5 col-xl-4 offset-1 offset-md-1 pt-md-60 pb-md-60 order-md-1  offset-xl-1 pt-xl-100`}>
            <div className={`${styles.subscribe} m-auto`}>
              <h3 className={styles.title}>
                Learn best <br /> practices from our <br />
                team of experts
              </h3>

              <h4 className="h3 mb-30 ta-center">For $3k+ work budgets:</h4>
              <ul className={`${styles.list} mb-50`}>
                <li>Marketing & Analytics</li>
                <li>Product life hacks</li>
                <li>Customer & market research methods</li>
                <li>Competitive audits</li>
                <li>Sales and ads channels insights</li>
              </ul>
            </div>
            <div className={styles.form}>
              <form onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}

                <div className={`${styles.field} ${errors.Email && styles.error}`}>
                  <input
                    placeholder="Your email:"
                    {...register('Email', {
                      required: true,
                    })}
                  />
                </div>

                <div className={styles.submit}>
                  <input className="button CTA" type="submit" value="SUBSCRIBE" />
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

export default Subscribe;
