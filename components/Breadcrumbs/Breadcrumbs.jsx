import styles from './Breadcrumbs.module.scss';
import Image from "next/image";
import steps from "../Steps/Steps";
import Link from "next/link";

export const breadcrumbs = ({img, lable, link}) => {
    return(
        <section className="pt-3" style={{background:'#F6F6F6'}}>
            <div className="container">
                <div className="row">
                    <div className={`my-auto ${styles.breadcrumbs}`}>
                        <div className={`col ${styles.allLinks}`}>
                            <Link href={`/`}>
                                <a className={styles.links}>
                                    <Image src="/img/breadcrumbs/home.svg"
                                           width={18}
                                           height={16}
                                    />
                                    <span className="m-lg-1">Home</span>
                                </a>
                            </Link>
                            <span className={styles.arrow}>
                                <Image src="/img/breadcrumbs/arrow.svg"
                                       width={9}
                                       height={8}
                                />
                            </span>
                            <Link href={link}>
                                <a className={styles.links}>
                                    <Image src={img}
                                           width={17}
                                           height={14}
                                    />
                                    <span className="m-lg-1">{lable}</span>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default breadcrumbs;