import React from 'react';
import Hero from "../../components/Hero/Hero";
import Ticker from "../../components/Ticker/Ticker";
import { MainLayout } from "../../layouts/MainLayout";
import HeroAdvantages from "../../components/HeroAdvantages/HeroAdvantages";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import StepByStep from "../../components/StepByStep/StepByStep";
import style from '/styles/webdev.module.scss'

const WebDevelopment = () => {
    return (
        <MainLayout
            title={"Web development - LTV:CAC agency"}
            description="We can build system compile marketing data and sales get exact selling costs to sales ratio, while monitoring ad channels and events inside sales funnel"
        >
            <Hero
                title={"Adaptive mobile-friendly \n Web Development"}
                subtitle={
                    "Your website is the face of your company. Everything from how it looks \n to its speed tells a customer about your company."
                }
                imageUrls={{
                    desktop: "/img/hero/11.jpg",
                    mobile: "/img/hero/11mob.jpg",
                }}
            />
            <Ticker />
            <HeroAdvantages/>
            <Breadcrumbs
                img={'/img/breadcrumbs/blog.svg'}
                lable={'Blog'}
                link={'/posts/test/blog'}
            />
            <StepByStep />
            <section className={`pt-68 pb-68 ${style.webdev}`}>
                <div className="container">
                    <div className="row">
                        <div className={`${style.sectionH2} mr-120`}>
                            <h2 className={`title ${style.h2}`}>
                                WHY YOU NEED an adaptive website
                            </h2>
                            <div className={`${style.version} `}>
                                <div className={style.arrowLeft}>
                                    <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7 1.66455L1 7.66455L7 13.6646M15 7.66455L1 7.66455" stroke="#3D2BA5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                                <div className={style.line}></div>
                                <div className={style.arrowRight}>
                                    <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9 13.6646L15 7.66455L9 1.66455M1 7.66455L15 7.66455" stroke="#3D2BA5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                                <div className={style.versions}>
                                    <div className={style.icon}>
                                        <svg width="3" height="29" viewBox="0 0 3 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="0.5" y="0.664551" width="2" height="28" rx="1" fill="#3725A2"/>
                                        </svg>
                                        <svg width="49" height="39" viewBox="0 0 49 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15.4988 37.1647H33.4999M1.99805 5.66286C1.99805 4.46932 2.47218 3.32466 3.31614 2.48069C4.1601 1.63673 5.30476 1.1626 6.49831 1.1626H42.5004C43.6939 1.1626 44.8386 1.63673 45.6826 2.48069C46.5265 3.32466 47.0007 4.46932 47.0007 5.66286V25.914C47.0007 27.1076 46.5265 28.2522 45.6826 29.0962C44.8386 29.9402 43.6939 30.4143 42.5004 30.4143H6.49831C5.30476 30.4143 4.1601 29.9402 3.31614 29.0962C2.47218 28.2522 1.99805 27.1076 1.99805 25.914V5.66286Z" stroke="#3D2BA5" strokeWidth="2.25013" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                    <div className={style.icon}>
                                        <svg width="3" height="29" viewBox="0 0 3 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="0.5" y="0.664551" width="2" height="28" rx="1" fill="#3725A2"/>
                                        </svg>
                                        <svg width="45" height="36" viewBox="0 0 45 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M43.834 30.6825L43.834 5.5823C43.834 3.27188 41.961 1.39893 39.6506 1.39893L6.18366 1.39892C3.87325 1.39892 2.00029 3.27188 2.00029 5.58229L2.00029 30.6825C2.00029 32.9929 3.87325 34.8659 6.18366 34.8659L39.6506 34.8659C41.961 34.8659 43.834 32.9929 43.834 30.6825Z" stroke="#3D2BA5" strokeWidth="2.09168" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M10.3652 16.0415L10.3652 20.2249" stroke="#3D2BA5" strokeWidth="4.18337" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                    <div className={style.icon}>
                                        <svg width="3" height="29" viewBox="0 0 3 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="0.5" y="0.664551" width="2" height="28" rx="1" fill="#3725A2"/>
                                        </svg>
                                        <svg width="22" height="37" viewBox="0 0 22 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.6121 2.97667C18.1794 2.97667 18.7234 3.21142 19.1246 3.62927C19.5257 4.04713 19.7511 4.61387 19.7511 5.2048V31.9424C19.7511 32.5334 19.5257 33.1001 19.1246 33.5179C18.7234 33.9358 18.1794 34.1705 17.6121 34.1705H4.77802C4.21072 34.1705 3.66665 33.9358 3.26551 33.5179C2.86437 33.1001 2.63901 32.5334 2.63901 31.9424V5.2048C2.63901 4.61387 2.86437 4.04713 3.26551 3.62927C3.66665 3.21142 4.21072 2.97667 4.77802 2.97667H17.6121ZM4.77802 0.748535C3.64342 0.748535 2.55529 1.21803 1.753 2.05375C0.950718 2.88946 0.5 4.02293 0.5 5.2048V31.9424C0.5 33.1243 0.950718 34.2578 1.753 35.0935C2.55529 35.9292 3.64342 36.3987 4.77802 36.3987H17.6121C18.7467 36.3987 19.8348 35.9292 20.6371 35.0935C21.4394 34.2578 21.8901 33.1243 21.8901 31.9424V5.2048C21.8901 4.02293 21.4394 2.88946 20.6371 2.05375C19.8348 1.21803 18.7467 0.748535 17.6121 0.748535L4.77802 0.748535Z" fill="#3D2BA5"/>
                                            <path d="M11.1976 31.9431C11.7649 31.9431 12.309 31.7083 12.7101 31.2905C13.1113 30.8726 13.3366 30.3059 13.3366 29.715C13.3366 29.124 13.1113 28.5573 12.7101 28.1394C12.309 27.7216 11.7649 27.4868 11.1976 27.4868C10.6303 27.4868 10.0862 27.7216 9.6851 28.1394C9.28395 28.5573 9.05859 29.124 9.05859 29.715C9.05859 30.3059 9.28395 30.8726 9.6851 31.2905C10.0862 31.7083 10.6303 31.9431 11.1976 31.9431Z" fill="#3D2BA5"/>
                                        </svg>
                                    </div>
                                </div>
                                <div className={style.textAfter}>
                                    <span>Desktop</span>
                                    <span>+</span>
                                    <span>Table</span>
                                    <span>+</span>
                                    <span>Mobile</span>
                                </div>
                                <div className={style.ver}>
                                    Version
                                </div>
                            </div>
                        </div>
                        <div className={style.sectionText}>
                            <div className={style.text}>
                                <p>
                                    Web development is all about building and maintaining websites; it’s the work done
                                    behind the scenes to make a website look great, work fast and perform well with a
                                    seamless user experience.
                                </p>
                                <p>
                                    Aside from technical expertise in website building, our staff is skilled in SEO,
                                    user experience (UX) and conversion rate optimization (CRO).
                                </p>
                                <p>
                                    We offer full range of internet marketing services, unlike many other web
                                    developers. Our knowledge of SEO, UX and CRO ensures that your brand-new,
                                    mobile-friendly website achieves maximum exposure and co nversions.
                                </p>
                            </div>
                            <div className={style.little}>
                                <p>
                                    Since 80% of internet advertising is mobile device users, 1% of website load speed
                                    is 1% of company's revenue.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
};

export default WebDevelopment;
