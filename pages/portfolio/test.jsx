import axios from 'axios';
import Hero from '../../components/Hero/Hero';
import Ticker from '../../components/Ticker/Ticker';
import HeroAdvantages from '../../components/HeroAdvantages/HeroAdvantages';
import { MainLayout } from '../../layouts/MainLayout';
import LetsTalk from '../../components/LetsTalk/LetsTalk';
import ProjectCard3Way from "../../components/ProjectCard3Way/ProjectCard3Way";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import styles from "../../styles/portfolio.module.scss";
import Link from "next/link";
import Image from "next/image";
import FormContacts from "../../components/FormContacts/FormContacts";
import Social from "../../components/Social/Social";

export default function Portfolio({ projects }) {
  return (
    <MainLayout
      title={'CASE STUDY'}
      description="hungry for your growth, let’s chat">
      <Hero
        title={'Our cases'}
        subtitle={'Some of the projects we worked on. Feel free to request for more!'}
        imageUrls={{ desktop: '/img/hero/5.jpg', mobile: '/img/hero/5mob.jpg' }}
      />
      <Ticker />
      <HeroAdvantages />
      <Breadcrumbs
          img={'/img/breadcrumbs/blog.svg'}
          lable={'Portfolio'}
          link={'/portfolio/test'}
      />
      <section className="pt-md-50" style={{background: 'rgb(246, 246, 246)'}}>
        <div className="container p-0">
            <div className="row">
              <div className={`col-12 p-0 col-md-12 ${styles.container}`}>
                  <Link href={'/portfolio/test'}>
                      <a className={styles.card}>
                          <article className={`${styles.projectCard}`}>
                              <div className={styles.text}>
                                  <h3 className={`${styles.title} `}>matahari hills</h3>
                                  <p className={`${styles.subtitle} `}>Earth-conscious property development project in sumbawa</p>
                              </div>
                              <ul className={styles.tags} >
                                  <li>BRANDING</li>
                                  <li>CUST DEV</li>
                                  <li>PRODUCT</li>
                                  <li>DESIGN</li>
                                  <li>ANALYTICS</li>
                                  <li>TRAFFIC</li>
                                  <li>SEO</li>
                                  <li>MARKET RESEARCH</li>
                                  <li>AUTOMATION</li>
                                  <li>CONTENT MARKETING</li>
                              </ul>
                              <button className={styles.button}>READ MORE</button>
                          </article>
                          <div className={styles.imgBlock}>
                              <div className={styles.light}></div>
                                <Image src="/img/test/mataharibig.png"
                                       width={625}
                                       height={450}
                                />

                          </div>
                      </a>
                  </Link>
              </div>
            </div>
            <div className={`row justify-content-between ${styles.colors}`}>
                <div className={`p-0 ${styles.medium}`}>
                    <Link href={'/portfolio/test'}>
                        <a className={styles.card}>
                            <article className={`${styles.projectCard}`}>
                                <div className={styles.text}>
                                    <h3 className={`${styles.title} `}>matahari hills</h3>
                                    <p className={`${styles.subtitle} `}>Earth-conscious property development project in sumbawa</p>
                                </div>
                                <ul className={styles.tags} >
                                    <li>BRANDING</li>
                                    <li>CUST DEV</li>
                                    <li>PRODUCT</li>
                                    <li>DESIGN</li>
                                    <li>ANALYTICS</li>
                                    <li>TRAFFIC</li>
                                    <li>SEO</li>
                                    <li>MARKET RESEARCH</li>
                                    <li>AUTOMATION</li>
                                    <li>CONTENT MARKETING</li>
                                </ul>
                                <button className={styles.button}>READ MORE</button>
                            </article>
                        </a>
                    </Link>
                </div>
                <div className={`p-0 ${styles.medium}`}>
                    <Link href={'/portfolio/test'}>
                        <a className={styles.card}>
                            <article className={`${styles.projectCard}`}>
                                <div className={styles.text}>
                                    <h3 className={`${styles.title} `}>matahari hills</h3>
                                    <p className={`${styles.subtitle} `}>Earth-conscious property development project in sumbawa</p>
                                </div>
                                <ul className={styles.tags} >
                                    <li>BRANDING</li>
                                    <li>CUST DEV</li>
                                    <li>PRODUCT</li>
                                    <li>DESIGN</li>
                                    <li>ANALYTICS</li>
                                    <li>TRAFFIC</li>
                                    <li>SEO</li>
                                    <li>MARKET RESEARCH</li>
                                    <li>AUTOMATION</li>
                                    <li>CONTENT MARKETING</li>
                                </ul>
                                <button className={styles.button}>READ MORE</button>
                            </article>
                        </a>
                    </Link>
                </div>
            </div>
            <div className="row">
                <div className={`col-12 p-0 col-md-12`}>
                    <Link href={'/portfolio/test'}>
                        <a className={`${styles.card} portfolio-left`}>
                            <article className={styles.projectCard}>
                                <div className={styles.text}>
                                    <h3 className={`${styles.title} `}>matahari hills</h3>
                                    <p className={`${styles.subtitle} `}>Earth-conscious property development project in sumbawa</p>
                                </div>
                                <ul className={styles.tags} >
                                    <li>BRANDING</li>
                                    <li>CUST DEV</li>
                                    <li>PRODUCT</li>
                                    <li>DESIGN</li>
                                    <li>ANALYTICS</li>
                                    <li>TRAFFIC</li>
                                    <li>SEO</li>
                                    <li>MARKET RESEARCH</li>
                                    <li>AUTOMATION</li>
                                    <li>CONTENT MARKETING</li>
                                </ul>
                                <button className={styles.button}>READ MORE</button>
                            </article>
                            <div className={styles.imgBlock}>
                                <div className={styles.light}></div>
                                <Image src="/img/test/mataharibig.png"
                                       width={625}
                                       height={450}
                                />

                            </div>
                        </a>
                    </Link>
                </div>
            </div>
            <div className={`row justify-content-between ${styles.colors}`}>
                <div className={`p-0 ${styles.small}`}>
                    <Link href={'/portfolio/test'}>
                        <a className={styles.card}>
                            <article className={`${styles.projectCard}`}>
                                <div className={styles.text}>
                                    <h3 className={`${styles.title} `}>matahari hills</h3>
                                    <p className={`${styles.subtitle} `}>Earth-conscious property development project in sumbawa</p>
                                </div>
                                <ul className={styles.tags} >
                                    <li>BRANDING</li>
                                    <li>CUST DEV</li>
                                    <li>PRODUCT</li>
                                    <li>DESIGN</li>
                                    <li>ANALYTICS</li>
                                    <li>TRAFFIC</li>
                                    <li>SEO</li>
                                    <li>MARKET RESEARCH</li>
                                    <li>AUTOMATION</li>
                                    <li>CONTENT MARKETING</li>
                                </ul>
                                <button className={styles.button}>READ MORE</button>
                            </article>
                        </a>
                    </Link>
                </div>
                <div className={`p-0 ${styles.small}`}>
                    <Link href={'/portfolio/test'}>
                        <a className={styles.card}>
                            <article className={`${styles.projectCard}`}>
                                <div className={styles.text}>
                                    <h3 className={`${styles.title} `}>matahari hills</h3>
                                    <p className={`${styles.subtitle} `}>Earth-conscious property development project in sumbawa</p>
                                </div>
                                <ul className={styles.tags} >
                                    <li>BRANDING</li>
                                    <li>CUST DEV</li>
                                    <li>PRODUCT</li>
                                    <li>DESIGN</li>
                                    <li>ANALYTICS</li>
                                    <li>TRAFFIC</li>
                                    <li>SEO</li>
                                    <li>MARKET RESEARCH</li>
                                    <li>AUTOMATION</li>
                                    <li>CONTENT MARKETING</li>
                                </ul>
                                <button className={styles.button}>READ MORE</button>
                            </article>
                        </a>
                    </Link>
                </div>
                <div className={`p-0 ${styles.small}`}>
                    <Link href={'/portfolio/test'}>
                        <a className={styles.card}>
                            <article className={`${styles.projectCard}`}>
                                <div className={styles.text}>
                                    <h3 className={`${styles.title} `}>matahari hills</h3>
                                    <p className={`${styles.subtitle} `}>Earth-conscious property development project in sumbawa</p>
                                </div>
                                <ul className={styles.tags} >
                                    <li>BRANDING</li>
                                    <li>CUST DEV</li>
                                    <li>PRODUCT</li>
                                    <li>DESIGN</li>
                                    <li>ANALYTICS</li>
                                    <li>TRAFFIC</li>
                                    <li>SEO</li>
                                    <li>MARKET RESEARCH</li>
                                    <li>AUTOMATION</li>
                                    <li>CONTENT MARKETING</li>
                                </ul>
                                <button className={styles.button}>READ MORE</button>
                            </article>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
      </section>
        <FormContacts />
        <Social/>
    </MainLayout>
  );
}

export async function getServerSideProps() {
  try {
    const res = await axios.get(`${process.env.API_URL}/portfolios?populate=*`);
    const projects = await res.data.data;

    return {
      props: {
        projects,
      },
    };
  } catch (error) {
    return { error };
  }
}
