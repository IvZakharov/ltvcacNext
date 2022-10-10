import styles from './FormContacts.module.scss';
import React from 'react';
import {useForm} from 'react-hook-form';
import axios from 'axios';
import CalendlyDialog from '../CalendlyDialog/CalendlyDialog';
import telMask from '../../utils/telMask';
import Image from 'next/image';

function FormContacts() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: {errors},
  } = useForm();
  const onSubmit = (data) =>
      axios
          .post('https://hook.eu1.make.com/gnsrx5v9ojaht18h8pftfzj4qvihkslo', data)
          .then(() => {
            reset();
            showDialog();
          })
          .catch((error) => {
            console.log(error);
          });
  const [calendlyOpen, setCalenlyOpen] = React.useState(false);
  const telInputRef = React.useRef(null);
  const {ref, ...rest} = register('phoneNumber');
  
  React.useEffect(() => {
    telMask(telInputRef);
  }, []);
  
  const showDialog = () => {
    setCalenlyOpen(true);
  };
  
  React.useEffect(() => {
    const body = document.querySelector('html');
    body.style.overflow = calendlyOpen ? 'hidden' : 'auto';
  }, [calendlyOpen]);
  
  return (
    <section className={`section ${styles.contactform} `}>
    <div className="container">
      <div className={`row ${styles.block_height}`}>
          <div className="col-12 col-md-6 my-auto">
            <div className={`col-12 col-md-6 mx-auto my-auto ${styles.divfree}`}>
              <div className={`col-8 ${styles.block_img}`}>
              <Image src="/img/contacts/free.svg"
                width={90}
                height={90}
                layout="fixed"
                className={styles.free}
                />
                <span className={`${styles.text_free} col-8`}>Speak With Expert Team</span>
              </div>
              <div className={styles.list_label}>
                <span className={styles.label_list}>For $3k+ work budgets:</span>
                <ul className={styles.list}>
                  <li>Product audit</li>
                  <li>Customer & market audit</li>
                  <li>Competitive audit</li>
                  <li>Sales and ads channels audit</li>
                  <li>Business model audit</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 my-auto">
                <div className={styles.form}>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    {/* register your input into the hook by invoking the "register" function */}
                    <div className={`${styles.field} ${errors.Name && styles.error}`}>
                      <input placeholder="Your Name:" {...register('Name')} />
                    </div>
                    <div className={`${styles.field} ${errors.PhoneNumber && styles.error}`}>
                      <input
                          placeholder="WhatsApp phone number:"
                          required={true}
                          {...rest}
                          ref={(e) => {
                            ref(e);
                            telInputRef.current = e; // you can still assign to ref
                          }}
                      />
                    </div>
                    <div className={`${styles.field} ${errors.Email && styles.error}`}>
                      <input placeholder="Your email:" {...register('Email')} />
                    </div>
                    <div className={styles.submit}>
                      <input className="button CTA" type="submit" value="DISCUSS YOUR PROJECT"/>
                    </div>
                    <p className={styles.copy}>
                      By submitting this form you agree with terms of privacy policy
                    </p>
                  </form>
              {calendlyOpen && <CalendlyDialog closeModal={() => setCalenlyOpen(false)}/>}
            </div>
          </div>
        </div>
    </div>
  </section>
     
  );
}

export default FormContacts;
