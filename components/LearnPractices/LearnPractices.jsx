import styles from "./LearnPractices.module.scss";
import Image from "next/image";
import { useState } from "react";
import React from 'react';
import {useForm} from "react-hook-form";
import axios from "axios";
import CalendlyDialog from '../CalendlyDialog/CalendlyDialog';


export const LearnPractices = () =>{
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
    const [email, setEmail] = useState('')
/*    const subscribeEmail = (e) =>{
        e.preventDefault();
        console.log(email);
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            subscribeEmail(event);
        }
      }*/

    return(
        <section className="section mb-4 mt-4 pt-100">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 aling-self-center">
                        <div className="d-flex justify-content-center align-content-center align-items-center">
                            <div className={styles.img}>
                                <Image src="/img/contacts/open-envelope.svg"
                                       width={92}
                                       height={92}
                                       layout="responsive"
                                />
                            </div>
                            <span className={styles.text}>Learn best practices from our team of experts</span>
                        </div>
                    </div>
                    <div className="col-12 mt-4 ">
                        <form className={`d-flex justify-content-center aling-items-center ${styles.form}`}>
                            <div className={`${styles.email} ${errors.Email && styles.error} d-flex justify-content-center`}>
                                <input type="email"
                                       placeholder="Your email:"
                                       {...register('Email', {
                                           required: true,
                                       })}
                                />

                            </div>
                            <button type="submit" className={styles.btnsubmit}> Subscription</button>
                        </form>
                    </div>
                    {calendlyOpen && <CalendlyDialog closeModal={() => setCalenlyOpen(false)} />}
                </div>
            </div>
        </section>
    );

};

export default LearnPractices;