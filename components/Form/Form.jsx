import styles from './Form.module.scss';
import React from 'react';
import {useForm} from 'react-hook-form';
import axios from 'axios';
import CalendlyDialog from '../CalendlyDialog/CalendlyDialog';
import telMask from '../../utils/telMask';
import {useRouter} from "next/router";

function Form({ contentSide }) {
  const router = useRouter()
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
    const page = router.pathname.split('/').pop();

    React.useEffect(() =>{
        const { utm_medium, utm_source, utm_term, utm_content, utm_campaign} = router.query

        if(router.isReady){
            register('utm_medium', {value:utm_medium})
            register('utm_source', {value: utm_source})
            register('utm_term', {value:utm_term})
            register('utm_content', {value: utm_content})
            register('utm_campaign', {value:utm_campaign})
            register('Page', {value: (!page) ? 'home' : page})
        }
    })

  
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
      <div className={`${styles.form} ${ contentSide === 'left' ? ' ml-120': 'mr-120'}`}>
        <form onSubmit={handleSubmit(onSubmit)} className={ contentSide === 'right' ? styles.FloatRight: ''}>
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
            <input placeholder="Your email:"
                   required={true}
                   type="email"
                   {...register('Email')} />
          </div>
          <div className={styles.submit}>
            <input className="button CTA" type="submit" value="TELL US ABOUT YOUR PROJECT"/>
          </div>
          <p className={styles.copy}>
            By submitting this form you agree <br/> with terms of privacy policy
          </p>
        </form>
        {calendlyOpen && <CalendlyDialog closeModal={() => setCalenlyOpen(false)}/>}
      </div>
  );
}

export default Form;
