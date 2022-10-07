import styles from "./LearnPractices.module.scss";
import Image from "next/image";
import { useState } from "react";


export const LearnPractices = () =>{
    const [email, setEmail] = useState('')
    const subscribeEmail = (e) =>{
        e.preventDefault();
        console.log(email);
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            subscribeEmail(event);
        }
      }

    return(
        <section className="section mb-4 mt-4 pt-100">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 aling-self-center">
                        <div className="d-flex justify-content-center align-content-center align-items-center">
                            <Image src="/img/contacts/open-envelope.svg"
                            width={92}
                            height={92}
                            layout="fixed"
                            />
                            <span className={styles.text}>Learn best practices from our team of experts</span>
                        </div>
                    </div>
                    <div className="col-11 mt-4 ">
                        <form className="d-flex justify-content-center aling-items-center">
                            <div className={`${styles.email} d-flex justify-content-center`}>
                                <input type="email" 
                                    placeholder="Your email:" 
                                    className={`${styles.input}`} 
                                    value={email}
                                    onChange={e => setEmail(e.target.value)
                                    }
                                    onKeyDown={handleKeyDown}
                                />
                            </div>
                            <button type="button" onClick={subscribeEmail} className={styles.btnsubmit}> Subscription</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );

};

export default LearnPractices;