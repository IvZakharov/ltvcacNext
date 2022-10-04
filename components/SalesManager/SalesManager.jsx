import styles from './SalesManager.module.scss';
import Link from 'next/link';
import useMediaQuery from "../../lib/useMediaQuery";
import Image from "next/image";

export const SalesManager = () =>{
    return(
        <section className="section"  >
            <div className="container">
                <div className="row">
                    <div className="col-6 col-md-7 ml-50 mb-40 mb-xl-0">
                        <div className="d-flex justify-content-center">
                            <div className={styles.img}>
                            <Image src="/img/contacts/Ruslan.png"
                                   width={539}
                                   height={699}
                                   layout="fixed"
                            />
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-md-4 mb-40 mb-xl-0 align-self-center">
                        <div className="row justify-content-center">
                            <div className="col-12 align-self-center">
                                <span className={styles.color}>RUSLAN AKHANOV</span>
                            </div>
                            <div className="w-100"></div>
                            <div className="col-12 mt-3 align-self-center" style={{marginBottom: 5 +'em'}}>
                                <span className={styles.SalesManager}>
                                  <Image src="/img/contacts/sales.svg"
                                         width={25}
                                         height={25}
                                  />
                                  Sales Manager</span>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-10"><span className={styles.text}>Socials:</span></div>
                                <div className="w-100"></div>
                                <div className="col-10">
                                    <a href="https://t.me/max_chuk2" className={styles.socials}>
                                    <Image src="/img/contacts/telegram.png"
                                                              width={31}
                                                              height={31}
                                /> @akhan0v</a></div>
                                <div className="w-100"></div>
                                <div className="col-10">
                                    <a href="mailto:sales@ltvcac.com" className={styles.socials}>
                                    <Image src="/img/contacts/email.png"
                                                              width={31}
                                                              height={31}
                                /> sales@ltvcac.com</a></div>
                                <div className="w-100"></div>
                                <div className="col-10">
                                    <a href="https://www.linkedin.com/company/ltvcac-agency" className={styles.socials}>
                                    <Image src="/img/contacts/linkidin.png"
                                                              width={31}
                                                              height={31}
                                />LinkedIn</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

};

export default SalesManager;