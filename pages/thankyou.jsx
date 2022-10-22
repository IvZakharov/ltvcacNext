import {MainLayout} from "../layouts/MainLayout";
import styles from "/styles/thankyou.module.scss";
import Link from "next/link";
import Image from "next/image";

export const thankyou = () =>{

    return(
        <MainLayout
            title={'Thank You'}
            description="Some of the projects we worked on. Feel free to request for more!">
            <section className={styles.thankyou}>
                <div className="container">
                    <div className="row">
                        <div className={`col-12 ${styles.blocks}`}>
                            <div className={`col-md-6 ${styles.h1Text}`}>
                                <h1 className={styles.h1}>Thank you</h1>
                                <p className={styles.text}>Your application has been successfully sent.</p>
                                <div className={styles.button}>
                                    <Link href="/">
                                        <a>Come back</a>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <Image src="/img/ThankYou/Thanks.png"
                                    width={577}
                                    height={402}
                                />

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
}

export default thankyou;
