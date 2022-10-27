import styles from './FormContacts.module.scss';
import React from 'react';
import {useForm} from 'react-hook-form';
import axios from 'axios';
import CalendlyDialog from '../CalendlyDialog/CalendlyDialog';
import telMask from '../../utils/telMask';
import Image from 'next/image';
import { useRouter } from "next/router";

function FormContacts() {
  const router = useRouter();
  const  { utm_medium, utm_source, utm_term,  utm_content, utm_campaign } = router.query
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
            console.log(data)
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


  const page = router.pathname.split('/').pop();
  
  React.useEffect(() => {
    const body = document.querySelector('html');
    body.style.overflow = calendlyOpen ? 'hidden' : 'auto';
  }, [calendlyOpen]);
  
  return (
    <section className={`section ${styles.contactform} `}>
    <div className="container">
      <div className={`row ${styles.block_height}`}>
          <div className="col-12 col-md-6 my-auto">
            <div className={`col-12 col-md-10 col-lg-8 col-xl-6 mx-auto my-auto ${styles.divfree}`}>
              <div className={`col-8 col-md-12 ${styles.block_img}`}>
              <Image src="/img/contacts/free.svg"
                width={90}
                height={90}
                layout="fixed"
                className={styles.free}
                />
                <span className={`${styles.text_free} col`}>Speak With Expert Team</span>
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
                      <input type="hidden" value={page} name="page" {...register('Page')}/>
                      <input type="hidden" name="utm_medium" {...register('utm_medium',{value: utm_medium })}/>
                      <input type="hidden" name="utm_source"  {...register('utm_source', {value: utm_source})}/>
                      <input type="hidden" name="utm_term" {...register('utm_term', {value: utm_term})}/>
                      <input type="hidden" name="utm_content" {...register('utm_content', {value: utm_content})}/>
                      <input type="hidden" name="utm_campaign" {...register('utm_campaign', {value: utm_campaign})}/>

                    </div>
                    <div className={styles.submit}>
                      <input className="button CTA" type="submit" value="DISCUSS YOUR PROJECT"/>
                    </div>
                    <div className={styles.copy}>
                      <span className={styles.text}>
                       By submitting this form you agree<br /> with terms of privacy policy
                      </span>
                    </div>
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
