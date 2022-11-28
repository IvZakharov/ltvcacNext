import styles from './Breadcrumbs.module.scss';
import Image from "next/image";
import Link from "next/link";

export const breadcrumbs = ({img, links}) => {
    return(
        <section className={`pt-34 pb-34 ${styles.mob}`}>
            <div className="container">
                <div className={`row ${styles.relate}`}>
                    <div className={`my-auto ${styles.breadcrumbs}`}>
                        <div className={`col ${styles.allLinks}`}>
                            <div className={styles.blocks}>
                                <Link href={`/`}>
                                    <a className={styles.links}>
                                        <Image src="/img/breadcrumbs/home.svg"
                                               width={18}
                                               height={16}
                                               alt={"home"}
                                        />
                                        <span className="m-lg-1">Home</span>
                                    </a>
                                </Link>
                            </div>
                            {links.map((obj, index)=>(
                                <div className={styles.blocks} key={index}>
                                    <span className={styles.arrow} >
                                        <Image src="/img/breadcrumbs/arrow.svg"
                                               width={9}
                                               height={8}
                                               alt={"arrow"}
                                        />
                                    </span>
                                    <Link href={obj.link} key={index}>
                                        <a className={styles.links} >
                                            {obj.img ? <Image src={obj.img}
                                                              width={17}
                                                              height={14}
                                                              alt={obj.lable}
                                            /> : ''}
                                            <span className={`m-lg-1 ${index==1 && styles.active}`}>{obj.lable}</span>
                                        </a>
                                    </Link>
                                </div>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default breadcrumbs;
