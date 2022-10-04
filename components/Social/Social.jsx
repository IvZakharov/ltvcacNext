import styles from "./Social.module.scss"
import Image from "next/image";

export const Social = () => {
    return(
        <section className="section mb-4">
            <div className="container">
                <div className="row justify-content-center mb-4">
                    <div className="col-2">
                        <span className={styles.header}> Social: </span>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-5 align-self-center">
                        <div className="d-flex flex-row justify-content-between">
                            <a href="https://www.linkedin.com/company/ltvcac-agency" className={styles.socials}>
                                <Image src="/img/contacts/linkidin_big.png"
                                       width={115}
                                       height={114}
                                       layout="fixed"
                                />
                                <span>Linkedin</span>
                            </a>
                            <a href="https://www.facebook.com/ltvcac/" className={styles.socials}>
                                <Image src="/img/contacts/facebook.png"
                                       width={115}
                                       height={114}
                                       layout="fixed"
                                />
                                <span>Facebook</span>
                            </a>
                            <a href="https://www.instagram.com/ltvcac.agency/?igshid=YmMyMTA2M2Y%3D" className={styles.socials}>
                                <Image src="/img/contacts/instagram.png"
                                       width={115}
                                       height={114}
                                       layout="fixed"
                                />
                                <span>Instagram</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );

};
export  default  Social;