import React, {useEffect, useState} from 'react';
import Hero from "../../components/Hero/Hero";
import Ticker from "../../components/Ticker/Ticker";
import { MainLayout } from "../../layouts/MainLayout";
import HeroAdvantages from "../../components/HeroAdvantages/HeroAdvantages";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import StepByStep from "../../components/StepByStep/StepByStep";
import style from '/styles/webdev.module.scss'
import LetsTalk from "../../components/LetsTalk/LetsTalk";
import Image from "next/image";

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
            <section className={`pt-68 pb-68 ${style.adaptiveWebsite}`}>
                <div className="container">
                    <div className="row">
                        <div className={`${style.sectionH2} mr-120 p-0`}>
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
                            <div className={style.little}>
                                <p>
                                    Since 80% of internet advertising is mobile device users, 1% of website load speed
                                    is 1% of company&apos;s revenue.
                                </p>
                            </div>
                            <div className={style.text}>
                                <p>
                                    Web development is all about building and maintaining websites; it&apos;s the work done
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

                        </div>
                    </div>
                </div>
            </section>
            <section className={`pt-68 pb-68 ${style.benefitsAdaptive}`}>
                <div className="container">
                    <div className="row">
                        <div className={`${style.sectionText} mr-120`}>
                            <h3>Faster loading times</h3>
                            <p>With an adaptive mobile website, your <b>users won&apos;t have to wait</b> for your website
                                to load. As a result, the website will <b>only load</b> the information and features <b>necessary
                                for their device</b> and <ins>since 1% of your website’s loading speed equals 1%
                                conversion rate</ins> it is crucial to have a fast loading time. Therefore, an adaptive website generally has
                                a shorter loading time than a responsive website.</p>
                            <h3>The best user experience</h3>
                            <p>Since an adaptive website <b>only shows</b> users what <b>they need to view</b>, each aspect is
                                <b> uniquely adapted</b> to the <b>individual requirements</b> for each type of mobile device.
                                The user experience is at the <b>heart of all design decisions</b>, from image size and
                                resolution to layout and structure.</p>
                            <button>
                                I want the same
                            </button>
                        </div>
                        <div className={`${style.sectionH2} p-0`}>
                            <h2 className={`title`}>
                                benefits<br /> of adaptive<br /> web development
                            </h2>
                            <div className={style.loadingBlock}>
                                <div className={style.percent} >
                                    <span id="percent">0</span>%
                                </div>
                                <div className={style.percent}>
                                    loading
                                </div>
                                <div className={style.loading} id="load">

                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <section className={`pt-68 pb-68 ${style.HowItWorks}`}>
                <div className="container">
                    <div className="row">
                        <div className={style.sectionH2}>
                            <h2 className={`title`}>how it works</h2>
                            <p>
                                As full-stack development service providers, we do a <b>detailed analysis</b> of <b>every </b>
                                element to offer the best solution based on your <b>business area</b> and the <b>geographic </b>
                                and/or <b>demographic</b> characteristics of the <b>audience</b> you work with.
                            </p>
                        </div>
                    </div>
                    <div className={`row ${style.Blocks} p-0`}>
                        <div className={style.Block}>
                            <svg width="61" height="79" viewBox="0 0 61 79" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M30.5857 78.6855C30.5857 78.6855 60.5857 50.9663 60.5857 29.9355C60.5857 22.178 57.425 14.7381 51.7989 9.25267C46.1728 3.76723 38.5422 0.685547 30.5857 0.685547C22.6292 0.685547 14.9986 3.76723 9.37249 9.25267C3.7464 14.7381 0.585693 22.178 0.585693 29.9355C0.585693 50.9663 30.5857 78.6855 30.5857 78.6855ZM30.5857 44.5605C26.6074 44.5605 22.7921 43.0197 19.9791 40.277C17.166 37.5343 15.5857 33.8143 15.5857 29.9355C15.5857 26.0568 17.166 22.3368 19.9791 19.5941C22.7921 16.8514 26.6074 15.3105 30.5857 15.3105C34.5639 15.3105 38.3792 16.8514 41.1923 19.5941C44.0053 22.3368 45.5857 26.0568 45.5857 29.9355C45.5857 33.8143 44.0053 37.5343 41.1923 40.277C38.3792 43.0197 34.5639 44.5605 30.5857 44.5605Z" fill="white"/>
                            </svg>
                            <p>Researching competitor&apos;s display of elements based
                                on geographic location to identify a typical approach</p>
                            <button>7 days</button>
                        </div>
                        <div className={style.Block}>
                            <svg width="73" height="73" viewBox="0 0 73 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M57.9695 1.34431C57.5476 0.922504 56.9754 0.685547 56.3788 0.685547C55.7822 0.685547 55.21 0.922504 54.7881 1.34431L47.3769 8.75572L64.0577 25.437L71.4689 18.0301C71.6784 17.8211 71.8447 17.5728 71.9581 17.2995C72.0715 17.0261 72.1299 16.7331 72.1299 16.4371C72.1299 16.1412 72.0715 15.8481 71.9581 15.5748C71.8447 15.3014 71.6784 15.0531 71.4689 14.8441L57.9695 1.34431ZM60.8764 28.6185L44.1956 11.9372L14.9469 41.1868H15.8783C16.475 41.1868 17.0473 41.4239 17.4692 41.8458C17.8912 42.2678 18.1282 42.84 18.1282 43.4368V45.6868H20.3781C20.9748 45.6868 21.5471 45.9238 21.969 46.3458C22.391 46.7677 22.628 47.34 22.628 47.9367V50.1867H24.8779C25.4746 50.1867 26.0469 50.4237 26.4688 50.8457C26.8908 51.2676 27.1278 51.8399 27.1278 52.4367V54.6866H29.3777C29.9744 54.6866 30.5467 54.9237 30.9686 55.3456C31.3906 55.7676 31.6276 56.3399 31.6276 56.9366V57.8681L60.8764 28.6185ZM27.2718 62.224C27.1771 61.9723 27.1284 61.7056 27.1278 61.4366V59.1866H24.8779C24.2812 59.1866 23.7089 58.9495 23.287 58.5276C22.8651 58.1056 22.628 57.5333 22.628 56.9366V54.6866H20.3781C19.7814 54.6866 19.2091 54.4496 18.7872 54.0276C18.3653 53.6057 18.1282 53.0334 18.1282 52.4367V50.1867H15.8783C15.2816 50.1867 14.7093 49.9496 14.2874 49.5277C13.8655 49.1057 13.6284 48.5335 13.6284 47.9367V45.6868H11.3785C11.1095 45.6863 10.8428 45.6375 10.5911 45.5428L9.78559 46.3437C9.57117 46.5597 9.40278 46.8169 9.29061 47.0997L0.291003 69.5995C0.127342 70.0083 0.0872782 70.4563 0.175778 70.8877C0.264278 71.3191 0.477449 71.7151 0.788865 72.0265C1.10028 72.338 1.49624 72.5511 1.92767 72.6396C2.35909 72.7281 2.80701 72.6881 3.21588 72.5244L25.7149 63.5245C25.9978 63.4124 26.2549 63.244 26.4709 63.0295L27.2718 62.2285V62.224Z" fill="white"/>
                            </svg>
                            <p>Establishing a draft for
                                the website based on competitor research, drawing layouts, and approving
                                the final design</p>
                            <button>7 days</button>
                        </div>
                        <div className={style.Block}>
                            <svg width="88" height="82" viewBox="0 0 88 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M27.0403 26.2301L10.5092 39.437L9.04226 40.6089L10.5092 41.7808L27.0403 54.9876L23.4165 59.51L2.58779 42.8687L2.58755 42.8686C2.24787 42.5973 1.9738 42.2533 1.78551 41.8621C1.59723 41.471 1.49951 41.0427 1.49951 40.6089C1.49951 40.1751 1.59723 39.7467 1.78551 39.3556C1.97379 38.9645 2.24786 38.6205 2.58755 38.3492L2.58779 38.349L23.4165 21.7078L27.0403 26.2301ZM77.4899 39.437L60.9587 26.2301L64.5825 21.7078L85.4112 38.349L85.4115 38.3492C85.7512 38.6205 86.0252 38.9645 86.2135 39.3556C86.4018 39.7468 86.4995 40.1751 86.4995 40.6089C86.4995 41.0427 86.4018 41.471 86.2135 41.8621C86.0252 42.2533 85.7512 42.5973 85.4115 42.8685L85.4112 42.8687L64.5825 59.51L60.9587 54.9876L77.4899 41.7808L78.9568 40.6089L77.4899 39.437ZM49.6391 1.89367L55.3031 3.15071L38.3556 79.3153L32.6915 78.0583L49.6391 1.89367Z" fill="white" stroke="white" strokeWidth="3"/>
                            </svg>
                            <p>Designing the overall layout of the page by coding basic blocks</p>
                            <button>14 days least</button>
                        </div>
                        <div className={style.Block}>
                            <svg width="84" height="84" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.2095 54.1746C23.1072 65.0697 40.2791 65.8296 52.0677 56.4831L54.524 58.9367L52.484 60.9754L69.1411 77.6312C68.5212 78.6116 68.2527 79.3664 68.5627 79.6738L69.4744 80.5842C70.9567 82.0691 82.578 70.4439 81.0957 68.9616L80.184 68.0525C79.8766 67.7438 79.1231 68.0097 78.1453 68.6296L61.4856 51.9738L59.4469 54.0125L56.9919 51.5575C66.3372 39.7676 65.5785 22.5944 54.6848 11.6981C42.9559 -0.0295663 23.9385 -0.0295663 12.2095 11.6981C0.479311 23.4296 0.481904 42.4457 12.2095 54.1746ZM15.7487 15.2398C25.522 5.46529 41.3737 5.46529 51.1443 15.2398C60.9189 25.0118 60.9189 40.8635 51.1443 50.6355C41.3711 60.4113 25.5246 60.4087 15.7487 50.6355C5.97806 40.8609 5.97547 25.0144 15.7487 15.2398Z" fill="white"/>
                                <path d="M12.0798 31.306C13.1572 34.1679 14.8324 36.7671 16.9937 38.9304C25.4402 47.3782 39.1391 47.3782 47.5896 38.9265C51.1611 35.3657 53.37 30.6647 53.8314 25.6426C56.7572 33.3577 55.1283 42.406 48.9163 48.618C40.4671 57.0672 26.7682 57.0672 18.3191 48.618C13.5803 43.8831 11.504 37.4947 12.0798 31.306Z" fill="white"/>
                            </svg>
                            <p>Assessing the assembled system for bottlenecks and eliminating them through stress testing</p>
                            <button>7 days</button>
                        </div>
                        <div className={style.Block}>
                            <svg width="84" height="84" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M35.5531 1.50673C35.0097 2.04636 34.5658 3.91853 34.5658 5.66544C34.5658 11.1223 24.1843 15.1103 20.7386 10.9777C18.2676 8.01391 14.7624 8.42964 11.3001 12.0983C7.71189 15.9018 7.5266 18.176 10.5368 21.4867C13.9784 25.2751 10.1538 34.1059 4.64915 35.082C-0.877606 36.0607 -1.55099 49.2059 3.88589 49.974C9.36287 50.7463 12.8335 58.0739 9.99201 62.8631C6.40245 68.9132 14.3974 76.8727 20.4745 73.2991C25.285 70.4702 32.6452 73.9254 33.4209 79.3781C34.3155 85.6609 47.2606 83.9828 48.8286 77.3821C50.5266 70.2293 49.2946 67.5821 44.7911 68.7081C26.1851 73.3569 8.78212 48.8741 17.9607 30.9632C30.9445 5.62551 68.8809 16.1606 67.5715 44.7402C67.1318 54.313 69.152 55.9705 76.0476 51.6961C77.1884 50.9885 79.2445 50.0607 80.6175 49.6354C84.8819 48.3138 83.3719 36.1227 78.8131 35.0668C73.7868 33.9036 69.994 25.7665 72.718 21.9905C76.4348 16.8379 76.4113 15.6348 72.512 11.5834C67.866 6.75708 66.8165 6.63731 62.725 10.4643C58.3238 14.5803 49.4661 11.3797 48.3862 5.28412C47.6907 1.35118 38.443 -1.37173 35.5531 1.50673ZM35.1798 25.5559C34.6681 26.3819 36.4975 29.3498 39.2463 32.1526C49.4039 42.5087 42.0132 49.8157 31.6109 39.7018C25.0001 33.2759 22.1213 34.0922 22.1213 42.3931C22.1213 54.0983 32.3963 63.4523 43.7015 62.0399C49.2476 61.3461 49.5615 61.536 57.2716 70.2251C66.2081 80.2949 67.1747 80.6184 72.3322 75.258C77.4912 69.8975 77.104 68.3626 68.4426 59.847C61.2884 52.8125 60.8376 51.9714 60.8376 45.6474C60.8376 30.8765 41.3509 15.6169 35.1798 25.5559Z" fill="white"/>
                            </svg>
                            <p>Maintaining and supporting the system to find any occuring errors or bugs and eliminating them</p>
                            <button>14 days</button>
                        </div>
                    </div>
                </div>
            </section>
            <section className={`pt-68 pb-68 ${style.WDS}`}>
                <div className="container">
                    <div className="row">
                        <div className={`${style.sectionH2} p-0`}>
                            <h2 className="title">website development
                                stages</h2>
                        </div>
                        <div className={`${style.lineSection} p-0`}>
                            <div className={style.block}>
                                <span className={style.number}>1</span>
                                <svg width="2" height="29" viewBox="0 0 2 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect y="0.59375" width="2" height="28" rx="1" fill="#3725A2"/>
                                </svg>
                                <p>
                                    Researching a client&apos;s project with an industry and geolocation of target audience of interest
                                </p>
                                <div className={style.time}>
                                    3-4 days
                                </div>
                            </div>
                            <div className={style.block}>
                                <span className={style.number}>2</span>
                                <svg width="2" height="29" viewBox="0 0 2 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect y="0.59375" width="2" height="28" rx="1" fill="#3725A2"/>
                                </svg>
                                <p>
                                    Making and presenting
                                    an offer with a solution based on the performed research
                                </p>
                                <div className={style.time}>
                                    7-10 days
                                </div>
                            </div>
                            <div className={style.block}>
                                <span className={style.number}>3</span>
                                <svg width="2" height="29" viewBox="0 0 2 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect y="0.59375" width="2" height="28" rx="1" fill="#3725A2"/>
                                </svg>
                                <p>
                                    Developing a design based on the research with the preferences
                                    of target audiences
                                    taken into account
                                </p>
                                <div className={style.time}>
                                    5 days
                                </div>
                            </div>
                            <div className={style.block}>
                                <span className={style.number}>4</span>
                                <svg width="2" height="29" viewBox="0 0 2 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect y="0.59375" width="2" height="28" rx="1" fill="#3725A2"/>
                                </svg>
                                <p>
                                    Coding main structure of a website
                                    and implementing
                                    the admin panel
                                </p>
                                <div className={style.time}>
                                    3-5 days
                                </div>
                            </div>
                            <div className={style.block}>
                                <span className={style.number}>5</span>
                                <svg width="2" height="29" viewBox="0 0 2 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect y="0.59375" width="2" height="28" rx="1" fill="#3725A2"/>
                                </svg>
                                <p>
                                    Testing all
                                    the systems
                                    and scenarios
                                </p>
                                <div className={style.time}>
                                    1-2 days
                                </div>
                            </div>
                            <div className={style.block}>
                                <span className={style.number}>6</span>
                                <svg width="2" height="29" viewBox="0 0 2 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect y="0.59375" width="2" height="28" rx="1" fill="#3725A2"/>
                                </svg>
                                <p>
                                    Delivering and presenting the completed solution. Maintaining and supporting the system the first month
                                </p>
                                <div className={style.time}>
                                    1-2 days
                                </div>
                            </div>
                            <div className={style.line}></div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={`pt-68 pb-68 ${style.AdminPanel}`}>
                <div className="container">
                    <div className="row">
                        <div className={`${style.sectionH2} mr-120 p-0`}>
                            <h2 className="title">Admin panel<br />
                                for a custom website</h2>
                            <p>
                                Imagine having a website and not being able to edit its content by yourself. It means
                                that every time you want to add a new page or edit the content of an existing page you
                                are going to need the help of a developer, which costs money. What we offer here is a
                                viable solution for the problem - an admin panel for a custom website.
                            </p>
                            <p>
                                To put it simply, it is a custom builder for your website. It builds new pages for your
                                website in a very easy and understandable way. Here is how it works: we create
                                pre-ready blocks with different combinations of the content where all you have to do
                                is put the content you want to see on that page, be it a combination of a text and a
                                picture, a text and a video, two columns of a text or anything else. Next and final
                                step is to just click “ready” and that&apos;s it - you have a new page for your website.
                            </p>
                            <div className={`${style.blocks} p-0`}>
                                <div className={style.planks}>
                                    No need to hire a coder
                                </div>
                                <div className={style.planks}>
                                    Save your time, energy and money
                                </div>
                                <div className={style.planks}>
                                    Only 10 minutes to get it done
                                </div>
                            </div>
                        </div>
                        <div className={`${style.panelAnim} p-0`}>
                            <div className={style.webpage}>
                                <svg width="585" height="369" viewBox="0 0 585 369" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect y="0.133301" width="585" height="368" rx="16.2263" fill="#D4D0EC"/>
                                    <path d="M0 16.3596C0 7.39807 7.26477 0.133301 16.2263 0.133301H130V368.133H16.2263C7.26477 368.133 0 360.869 0 351.907L0 16.3596Z" fill="#7E72C0"/>
                                    <path d="M8.11304 24.0672C8.11304 19.3623 11.927 15.5483 16.6319 15.5483H108.311C113.015 15.5483 116.829 19.3623 116.829 24.0672C116.829 28.772 113.015 32.586 108.311 32.586H16.6318C11.927 32.586 8.11304 28.772 8.11304 24.0672Z" fill="#F3F3F3"/>
                                    <path d="M8.11304 43.5388C8.11304 41.9706 9.38437 40.6992 10.9526 40.6992H113.99C115.558 40.6992 116.829 41.9706 116.829 43.5388C116.829 45.1071 115.558 46.3784 113.99 46.3784H10.9526C9.38437 46.3784 8.11304 45.1071 8.11304 43.5388Z" fill="#E3E3E3"/>
                                    <path d="M8.11304 57.3308C8.11304 55.7625 9.38437 54.4912 10.9526 54.4912H84.7824C86.3506 54.4912 87.622 55.7625 87.622 57.3308C87.622 58.8991 86.3506 60.1704 84.7823 60.1704H10.9526C9.38437 60.1704 8.11304 58.8991 8.11304 57.3308Z" fill="#E3E3E3"/>
                                    <path d="M8.11304 71.1233C8.11304 69.555 9.38437 68.2837 10.9526 68.2837H103.443C105.011 68.2837 106.282 69.555 106.282 71.1233C106.282 72.6916 105.011 73.9629 103.443 73.9629H10.9526C9.38437 73.9629 8.11304 72.6916 8.11304 71.1233Z" fill="#E3E3E3"/>
                                    <rect x="152" y="14.7368" width="411" height="340" rx="20" fill="white"/>
                                    <path d="M289.5 40.7368C289.5 37.4231 292.186 34.7368 295.5 34.7368H419.5C422.814 34.7368 425.5 37.4231 425.5 40.7368C425.5 44.0505 422.814 46.7368 419.5 46.7368H295.5C292.186 46.7368 289.5 44.0505 289.5 40.7368Z" fill="#7E72C0"/>
                                    <path d="M180 77.9631C180 69.0016 187.265 61.7368 196.226 61.7368H518.774C527.735 61.7368 535 69.0016 535 77.9631V157.511C535 166.472 527.735 173.737 518.774 173.737H196.226C187.265 173.737 180 166.472 180 157.511V77.9631Z" fill="#F3F3F3"/>
                                    <path d="M289.5 117.737C289.5 114.423 292.186 111.737 295.5 111.737H419.5C422.814 111.737 425.5 114.423 425.5 117.737C425.5 121.051 422.814 123.737 419.5 123.737H295.5C292.186 123.737 289.5 121.051 289.5 117.737Z" fill="#D0D0D0"/>
                                    <path d="M180.5 203.963C180.5 195.002 187.765 187.737 196.726 187.737H377.274C386.235 187.737 393.5 195.002 393.5 203.963V239.511C393.5 248.472 386.235 255.737 377.274 255.737H196.726C187.765 255.737 180.5 248.472 180.5 239.511V203.963Z" fill="#F3F3F3"/>
                                    <path d="M188.613 201.85C188.613 198.536 191.299 195.85 194.613 195.85H318.613C321.927 195.85 324.613 198.536 324.613 201.85C324.613 205.164 321.927 207.85 318.613 207.85H194.613C191.299 207.85 188.613 205.164 188.613 201.85Z" fill="#D0D0D0"/>
                                    <path d="M419.5 212.237C419.5 209.199 421.962 206.737 425 206.737H529C532.038 206.737 534.5 209.199 534.5 212.237C534.5 215.274 532.038 217.737 529 217.737H425C421.962 217.737 419.5 215.274 419.5 212.237Z" fill="#D0D0D0"/>
                                    <path d="M419.5 231.237C419.5 228.199 421.962 225.737 425 225.737H523C526.038 225.737 528.5 228.199 528.5 231.237C528.5 234.274 526.038 236.737 523 236.737H425C421.962 236.737 419.5 234.274 419.5 231.237Z" fill="#D0D0D0"/>
                                    <g clipPath="url(#clip0_414_621)">
                                        <path d="M344.119 306.988C344.119 306.159 344.791 305.488 345.619 305.488H372.619C373.448 305.488 374.119 306.159 374.119 306.988C374.119 307.816 373.448 308.488 372.619 308.488H345.619C344.791 308.488 344.119 307.816 344.119 306.988Z" fill="#7E72C0"/>
                                        <path d="M356.998 293.277C357.826 293.277 358.498 293.948 358.498 294.777L358.498 321.777C358.498 322.605 357.826 323.277 356.998 323.277C356.17 323.277 355.498 322.605 355.498 321.777L355.498 294.777C355.498 293.948 356.17 293.277 356.998 293.277Z" fill="#7E72C0"/>
                                    </g>
                                    <rect x="337.11" y="286.237" width="40.7792" height="40.7792" rx="6.88959" stroke="#7E72C0" strokeWidth="3"/>
                                    <path d="M289.5 348.516C289.5 345.202 292.186 342.516 295.5 342.516H419.5C422.814 342.516 425.5 345.202 425.5 348.516C425.5 351.83 422.814 354.516 419.5 354.516H295.5C292.186 354.516 289.5 351.83 289.5 348.516Z" fill="white"/>
                                    <defs>
                                        <clipPath id="clip0_414_621">
                                            <rect x="344" y="293.126" width="27" height="27" rx="13.5" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={`pt-68 pb-68 ${style.OurToolkit}`}>
                <div className="container">
                    <div className="row">
                        <div className={`${style.sectionH2} mr-120 p-0`}>
                            <h2 className="title">Our toolkit</h2>
                            <p>
                                Our specialists work with the most advanced web development technologies on the market
                                to make your site look and work according to modern quality standards.
                            </p>
                            <p>
                                Also,using the most popular development tools makes it easy
                                to find specialists when they are needed.
                            </p>
                        </div>
                        <div className={`${style.clouds} p-0`}>
                            <div className={style.cloud}>
                                <div className={`${style.items} ${style.nextjs}`}>
                                    <svg width="303" height="62" viewBox="0 0 303 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_464_101)">
                                            <path d="M201.425 0.0234375H254.203V9.84031H233.266V61.4855H222.798V9.84031H201.425V0.0234375Z" fill="black"/>
                                            <path d="M114.625 0.0234375V9.84031H72.3207V25.6326H106.342V35.4495H72.3207V51.6687H114.625V61.4855H61.8525V9.84031H61.8481V0.0234375H114.625Z" fill="black"/>
                                            <path d="M140.98 0.0522461H127.281L176.35 61.5144H190.089L165.552 30.8044L190.05 0.0991378L176.35 0.120474L158.693 22.22L140.98 0.0522461Z" fill="black"/>
                                            <path d="M155.037 43.9551L148.176 35.3589L127.24 61.5614H140.979L155.037 43.9551Z" fill="black"/>
                                            <path fillRule="evenodd" clipRule="evenodd" d="M62.2204 61.4877L13.0852 0H0V61.4621H10.4682V13.1375L49.0696 61.4877H62.2204Z" fill="black"/>
                                            <path d="M256.555 61.1132C255.788 61.1132 255.136 60.8456 254.59 60.3103C254.044 59.775 253.774 59.1269 253.781 58.3592C253.774 57.6126 254.044 56.9716 254.59 56.4363C255.136 55.901 255.788 55.6333 256.555 55.6333C257.292 55.6333 257.937 55.901 258.483 56.4363C259.037 56.9716 259.313 57.6126 259.321 58.3592C259.313 58.8663 259.185 59.3311 258.93 59.7467C258.668 60.1694 258.335 60.5005 257.916 60.7399C257.504 60.9865 257.051 61.1132 256.555 61.1132Z" fill="black"/>
                                            <path d="M274.424 35.2188H279.063V53.2292C279.056 54.8845 278.7 56.3002 278.006 57.4906C277.304 58.6809 276.332 59.5895 275.084 60.2305C273.842 60.8643 272.388 61.1885 270.736 61.1885C269.224 61.1885 267.87 60.9137 266.664 60.3784C265.458 59.8431 264.501 59.0402 263.799 57.9836C263.089 56.927 262.741 55.6099 262.741 54.0322H267.388C267.395 54.7225 267.551 55.3211 267.849 55.8212C268.146 56.3213 268.558 56.7016 269.083 56.9693C269.614 57.237 270.225 57.3708 270.912 57.3708C271.658 57.3708 272.296 57.2158 272.814 56.8988C273.331 56.5889 273.729 56.1241 274.006 55.5042C274.275 54.8915 274.417 54.1308 274.424 53.2292V35.2188Z" fill="black"/>
                                            <path d="M298.146 42.2637C298.033 41.172 297.536 40.3197 296.671 39.7139C295.798 39.1012 294.671 38.7983 293.287 38.7983C292.316 38.7983 291.479 38.9462 290.784 39.235C290.089 39.5308 289.55 39.9252 289.181 40.4253C288.812 40.9254 288.628 41.496 288.613 42.137C288.613 42.6723 288.741 43.1371 288.989 43.5245C289.238 43.9189 289.571 44.25 290.004 44.5177C290.429 44.7924 290.904 45.0177 291.422 45.2009C291.947 45.384 292.472 45.539 292.997 45.6658L295.415 46.2645C296.387 46.4898 297.331 46.7928 298.231 47.1801C299.132 47.5605 299.948 48.0465 300.664 48.6311C301.381 49.2158 301.948 49.9201 302.367 50.7442C302.785 51.5683 302.998 52.5332 302.998 53.6461C302.998 55.1464 302.615 56.4636 301.841 57.6046C301.068 58.7386 299.955 59.6261 298.494 60.2671C297.039 60.9011 295.281 61.225 293.21 61.225C291.209 61.225 289.464 60.9152 287.996 60.2953C286.521 59.6825 285.372 58.7809 284.542 57.5975C283.712 56.4143 283.265 54.9703 283.201 53.2728H287.798C287.862 54.1603 288.146 54.8999 288.628 55.4986C289.117 56.0902 289.755 56.527 290.536 56.8228C291.323 57.1115 292.202 57.2595 293.174 57.2595C294.189 57.2595 295.082 57.1045 295.855 56.8016C296.621 56.4987 297.224 56.0762 297.657 55.5268C298.097 54.9844 298.317 54.3435 298.324 53.6109C298.317 52.9418 298.118 52.3853 297.735 51.9486C297.345 51.5119 296.806 51.1457 296.117 50.8498C295.423 50.554 294.614 50.2863 293.692 50.0539L290.756 49.3073C288.635 48.7649 286.954 47.9409 285.726 46.835C284.493 45.7292 283.882 44.2641 283.882 42.4257C283.882 40.9185 284.293 39.5943 285.124 38.4602C285.946 37.3262 287.074 36.4458 288.5 35.8189C289.933 35.185 291.55 34.875 293.351 34.875C295.181 34.875 296.784 35.185 298.168 35.8189C299.55 36.4458 300.636 37.3192 301.423 38.432C302.21 39.5449 302.622 40.8198 302.643 42.2637H298.146Z" fill="black"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_464_101">
                                                <rect width="303" height="62" fill="white"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <div className={`${style.items} ${style.php}`}>
                                    <svg width="101" height="51" viewBox="0 0 101 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_464_110)">
                                            <mask id="path-1-inside-1_464_110" fill="white">
                                                <path d="M50.5 51C22.5988 51 0 39.5921 0 25.5C0 11.4079 22.5988 0 50.5 0C78.4013 0 101 11.4079 101 25.5C101 39.5921 78.4013 51 50.5 51ZM28.6588 17.6571C30.9313 17.6571 32.4883 18.0765 33.2458 18.9572C34.0033 19.7961 34.1717 21.3059 33.7929 23.2771C33.3721 25.5 32.5725 26.926 31.3521 27.8487C30.1737 28.7714 28.3642 29.2327 25.9233 29.2327H22.2621L24.4925 17.6571H28.6588ZM13.9296 40.9342H19.9896L21.4204 33.5946H26.5967C28.8692 33.5946 30.7208 33.3429 32.1938 32.8816C33.6667 32.3783 35.0133 31.5814 36.2337 30.449C37.2438 29.5263 38.0433 28.5197 38.6746 27.3873C39.3058 26.2969 39.7688 25.0386 39.9792 23.6965C40.6525 20.4252 40.1896 17.8668 38.5904 16.0633C36.9492 14.2179 34.4242 13.3372 30.9313 13.3372H19.3163L13.9296 40.9342ZM44.44 5.99753L39.0533 33.5946H45.0292L48.1433 17.7829H52.9408C54.4558 17.7829 55.4658 18.0345 55.9288 18.5378C56.3917 19.0411 56.4758 19.9638 56.2233 21.3059L53.8246 33.5946H59.9267L62.4096 20.7187C62.9567 18.1184 62.5358 16.2311 61.2733 15.0148C60.0108 13.8824 57.6963 13.3372 54.3296 13.3372H48.985L50.5 5.99753H44.44ZM75.75 17.6571C78.0646 17.6571 79.5796 18.0765 80.3371 18.9572C81.0946 19.7961 81.2629 21.3059 80.8842 23.2771C80.4633 25.5 79.6637 26.926 78.4854 27.8487C77.265 28.7714 75.4554 29.2327 73.0146 29.2327H69.4375L71.5417 17.6571H75.75ZM61.0208 40.9342H67.0808L68.5117 33.5946H73.6458C75.9604 33.5946 77.8542 33.3429 79.3271 32.8816C80.8 32.3783 82.0625 31.5814 83.325 30.449C84.335 29.5263 85.1767 28.5197 85.7658 27.3873C86.3971 26.2969 86.86 25.0386 87.1125 23.6965C87.7438 20.4252 87.2808 17.8668 85.6817 16.0633C84.1667 14.2179 81.5154 13.3372 78.0225 13.3372H66.4496L61.0208 40.9342Z"/>
                                            </mask>
                                            <path d="M50.5 51C22.5988 51 0 39.5921 0 25.5C0 11.4079 22.5988 0 50.5 0C78.4013 0 101 11.4079 101 25.5C101 39.5921 78.4013 51 50.5 51ZM28.6588 17.6571C30.9313 17.6571 32.4883 18.0765 33.2458 18.9572C34.0033 19.7961 34.1717 21.3059 33.7929 23.2771C33.3721 25.5 32.5725 26.926 31.3521 27.8487C30.1737 28.7714 28.3642 29.2327 25.9233 29.2327H22.2621L24.4925 17.6571H28.6588ZM13.9296 40.9342H19.9896L21.4204 33.5946H26.5967C28.8692 33.5946 30.7208 33.3429 32.1938 32.8816C33.6667 32.3783 35.0133 31.5814 36.2337 30.449C37.2438 29.5263 38.0433 28.5197 38.6746 27.3873C39.3058 26.2969 39.7688 25.0386 39.9792 23.6965C40.6525 20.4252 40.1896 17.8668 38.5904 16.0633C36.9492 14.2179 34.4242 13.3372 30.9313 13.3372H19.3163L13.9296 40.9342ZM44.44 5.99753L39.0533 33.5946H45.0292L48.1433 17.7829H52.9408C54.4558 17.7829 55.4658 18.0345 55.9288 18.5378C56.3917 19.0411 56.4758 19.9638 56.2233 21.3059L53.8246 33.5946H59.9267L62.4096 20.7187C62.9567 18.1184 62.5358 16.2311 61.2733 15.0148C60.0108 13.8824 57.6963 13.3372 54.3296 13.3372H48.985L50.5 5.99753H44.44ZM75.75 17.6571C78.0646 17.6571 79.5796 18.0765 80.3371 18.9572C81.0946 19.7961 81.2629 21.3059 80.8842 23.2771C80.4633 25.5 79.6637 26.926 78.4854 27.8487C77.265 28.7714 75.4554 29.2327 73.0146 29.2327H69.4375L71.5417 17.6571H75.75ZM61.0208 40.9342H67.0808L68.5117 33.5946H73.6458C75.9604 33.5946 77.8542 33.3429 79.3271 32.8816C80.8 32.3783 82.0625 31.5814 83.325 30.449C84.335 29.5263 85.1767 28.5197 85.7658 27.3873C86.3971 26.2969 86.86 25.0386 87.1125 23.6965C87.7438 20.4252 87.2808 17.8668 85.6817 16.0633C84.1667 14.2179 81.5154 13.3372 78.0225 13.3372H66.4496L61.0208 40.9342Z" fill="#0079FE"/>
                                            <path d="M33.2458 18.9572L32.4877 19.6093L32.4956 19.6185L32.5037 19.6275L33.2458 18.9572ZM33.7929 23.2771L32.8109 23.0884L32.8104 23.0911L33.7929 23.2771ZM31.3521 27.8487L30.749 27.051L30.7422 27.0561L30.7356 27.0613L31.3521 27.8487ZM22.2621 29.2327L21.2801 29.0435L21.051 30.2327H22.2621V29.2327ZM24.4925 17.6571V16.6571H23.6668L23.5106 17.4679L24.4925 17.6571ZM19.9896 40.9342V41.9342H20.8135L20.9711 41.1256L19.9896 40.9342ZM21.4204 33.5946V32.5946H20.5965L20.4389 33.4032L21.4204 33.5946ZM32.1938 32.8816L32.4927 33.8359L32.5049 33.832L32.5171 33.8279L32.1938 32.8816ZM36.2337 30.449L35.5592 29.7107L35.5536 29.716L36.2337 30.449ZM38.6746 27.3873L37.8091 26.8863L37.8051 26.8934L37.8011 26.9004L38.6746 27.3873ZM39.9792 23.6965L38.9997 23.4949L38.9949 23.5182L38.9912 23.5417L39.9792 23.6965ZM38.5904 16.0633L39.3386 15.3999L39.3376 15.3988L38.5904 16.0633ZM19.3163 13.3372V12.3372H18.4926L18.3348 13.1456L19.3163 13.3372ZM39.0533 33.5946L38.0719 33.403L37.8393 34.5946H39.0533V33.5946ZM45.0292 33.5946V34.5946H45.8514L46.0103 33.7878L45.0292 33.5946ZM48.1433 17.7829V16.7829H47.3211L47.1622 17.5897L48.1433 17.7829ZM56.2233 21.3059L57.2048 21.4975L57.2061 21.4908L56.2233 21.3059ZM53.8246 33.5946L52.8431 33.403L52.6105 34.5946H53.8246V33.5946ZM59.9267 33.5946V34.5946H60.7523L60.9086 33.7839L59.9267 33.5946ZM62.4096 20.7187L61.431 20.5129L61.4293 20.5211L61.4277 20.5294L62.4096 20.7187ZM61.2733 15.0148L61.9671 14.2946L61.9543 14.2823L61.941 14.2704L61.2733 15.0148ZM48.985 13.3372L48.0056 13.135L47.7575 14.3372H48.985V13.3372ZM50.5 5.99753L51.4794 6.19968L51.7275 4.99753H50.5V5.99753ZM80.3371 18.9572L79.5789 19.6093L79.5868 19.6185L79.5949 19.6275L80.3371 18.9572ZM80.8842 23.2771L79.9021 23.0884L79.9016 23.0911L80.8842 23.2771ZM78.4854 27.8487L79.0885 28.6464L79.0953 28.6412L79.1019 28.636L78.4854 27.8487ZM69.4375 29.2327L68.4536 29.0539L68.2393 30.2327H69.4375V29.2327ZM71.5417 17.6571V16.6571H70.7071L70.5578 17.4782L71.5417 17.6571ZM67.0808 40.9342V41.9342H67.9047L68.0624 41.1256L67.0808 40.9342ZM68.5117 33.5946V32.5946H67.6878L67.5302 33.4032L68.5117 33.5946ZM79.3271 32.8816L79.626 33.8359L79.6383 33.832L79.6504 33.8279L79.3271 32.8816ZM83.325 30.449L83.9927 31.1935L83.9995 31.1873L83.325 30.449ZM85.7658 27.3873L84.9004 26.8863L84.8891 26.9058L84.8787 26.9258L85.7658 27.3873ZM87.1125 23.6965L86.1306 23.5071L86.1297 23.5117L87.1125 23.6965ZM85.6817 16.0633L84.9088 16.6978L84.9208 16.7125L84.9335 16.7268L85.6817 16.0633ZM66.4496 13.3372V12.3372H65.6271L65.4684 13.1442L66.4496 13.3372ZM50.5 50C36.6722 50 24.208 47.171 15.2377 42.6419C6.21077 38.0841 1 31.9687 1 25.5H-1C-1 33.1234 5.08861 39.758 14.3363 44.4272C23.6408 49.1251 36.4266 52 50.5 52V50ZM1 25.5C1 19.0313 6.21077 12.9159 15.2377 8.35813C24.208 3.82901 36.6722 1 50.5 1V-1C36.4266 -1 23.6408 1.87494 14.3363 6.57279C5.08861 11.242 -1 17.8766 -1 25.5H1ZM50.5 1C64.3278 1 76.792 3.82901 85.7623 8.35813C94.7892 12.9159 100 19.0313 100 25.5H102C102 17.8766 95.9114 11.242 86.6637 6.57279C77.3593 1.87494 64.5734 -1 50.5 -1V1ZM100 25.5C100 31.9687 94.7892 38.0841 85.7623 42.6419C76.792 47.171 64.3278 50 50.5 50V52C64.5734 52 77.3593 49.1251 86.6637 44.4272C95.9114 39.758 102 33.1234 102 25.5H100ZM28.6588 18.6571C29.7417 18.6571 30.6008 18.7579 31.2509 18.9399C31.9034 19.1225 32.2801 19.368 32.4877 19.6093L34.004 18.3052C33.454 17.6657 32.6735 17.2611 31.7899 17.0139C30.904 16.7659 29.8483 16.6571 28.6588 16.6571V18.6571ZM32.5037 19.6275C32.9241 20.093 33.1789 21.1733 32.8109 23.0884L34.775 23.4658C35.1645 21.4385 35.0826 19.4991 33.988 18.287L32.5037 19.6275ZM32.8104 23.0911C32.4186 25.1607 31.7084 26.3256 30.749 27.051L31.9552 28.6464C33.4366 27.5264 34.3256 25.8393 34.7755 23.4632L32.8104 23.0911ZM30.7356 27.0613C29.8138 27.7831 28.2709 28.2327 25.9233 28.2327V30.2327C28.4575 30.2327 30.5337 29.7596 31.9686 28.636L30.7356 27.0613ZM25.9233 28.2327H22.2621V30.2327H25.9233V28.2327ZM23.244 29.4219L25.4744 17.8463L23.5106 17.4679L21.2801 29.0435L23.244 29.4219ZM24.4925 18.6571H28.6588V16.6571H24.4925V18.6571ZM13.9296 41.9342H19.9896V39.9342H13.9296V41.9342ZM20.9711 41.1256L22.4019 33.7859L20.4389 33.4032L19.0081 40.7429L20.9711 41.1256ZM21.4204 34.5946H26.5967V32.5946H21.4204V34.5946ZM26.5967 34.5946C28.9372 34.5946 30.8956 34.3361 32.4927 33.8359L31.8948 31.9273C30.546 32.3498 28.8011 32.5946 26.5967 32.5946V34.5946ZM32.5171 33.8279C34.1244 33.2786 35.5923 32.4084 36.9139 31.1821L35.5536 29.716C34.4344 30.7544 33.2089 31.4779 31.8704 31.9353L32.5171 33.8279ZM36.9082 31.1873C37.9946 30.1949 38.8624 29.1042 39.548 27.8742L37.8011 26.9004C37.2243 27.9353 36.4929 28.8577 35.5593 29.7107L36.9082 31.1873ZM39.54 27.8883C40.2311 26.6945 40.737 25.3193 40.9671 23.8514L38.9912 23.5417C38.8005 24.758 38.3805 25.8993 37.8091 26.8863L39.54 27.8883ZM40.9586 23.8981C41.669 20.4467 41.2209 17.5225 39.3386 15.3999L37.8422 16.7268C39.1583 18.211 39.636 20.4037 38.9997 23.4949L40.9586 23.8981ZM39.3376 15.3988C37.4347 13.2591 34.5798 12.3372 30.9313 12.3372V14.3372C34.2685 14.3372 36.4636 15.1767 37.8432 16.7279L39.3376 15.3988ZM30.9313 12.3372H19.3163V14.3372H30.9313V12.3372ZM18.3348 13.1456L12.9481 40.7426L14.9111 41.1258L20.2977 13.5287L18.3348 13.1456ZM43.4585 5.80596L38.0719 33.403L40.0348 33.7861L45.4215 6.18911L43.4585 5.80596ZM39.0533 34.5946H45.0292V32.5946H39.0533V34.5946ZM46.0103 33.7878L49.1245 17.9761L47.1622 17.5897L44.048 33.4013L46.0103 33.7878ZM48.1433 18.7829H52.9408V16.7829H48.1433V18.7829ZM52.9408 18.7829C53.651 18.7829 54.1933 18.8427 54.5852 18.9414C54.9879 19.0428 55.1454 19.1633 55.1927 19.2148L56.6648 17.8609C56.2492 17.4091 55.6702 17.1521 55.0735 17.0019C54.4659 16.8489 53.7456 16.7829 52.9408 16.7829V18.7829ZM55.1927 19.2148C55.2315 19.257 55.3159 19.382 55.3495 19.7094C55.3834 20.0389 55.3573 20.5007 55.2406 21.121L57.2061 21.4908C57.3419 20.769 57.4 20.0984 57.3391 19.5052C57.278 18.91 57.0889 18.322 56.6648 17.8609L55.1927 19.2148ZM55.2419 21.1143L52.8431 33.403L54.8061 33.7862L57.2048 21.4975L55.2419 21.1143ZM53.8246 34.5946H59.9267V32.5946H53.8246V34.5946ZM60.9086 33.7839L63.3915 20.9081L61.4277 20.5294L58.9448 33.4052L60.9086 33.7839ZM63.3882 20.9246C63.9735 18.1426 63.5739 15.8425 61.9671 14.2946L60.5795 15.735C61.4978 16.6196 61.9399 18.0943 61.431 20.5129L63.3882 20.9246ZM61.941 14.2704C60.3808 12.8709 57.7263 12.3372 54.3296 12.3372V14.3372C57.6662 14.3372 59.6409 14.8939 60.6056 15.7592L61.941 14.2704ZM54.3296 12.3372H48.985V14.3372H54.3296V12.3372ZM49.9644 13.5393L51.4794 6.19968L49.5206 5.79538L48.0056 13.135L49.9644 13.5393ZM50.5 4.99753H44.44V6.99753H50.5V4.99753ZM75.75 18.6571C78.0392 18.6571 79.1344 19.0925 79.5789 19.6093L81.0953 18.3052C80.0247 17.0605 78.09 16.6571 75.75 16.6571V18.6571ZM79.5949 19.6275C80.0153 20.093 80.2701 21.1733 79.9021 23.0884L81.8662 23.4658C82.2557 21.4385 82.1739 19.4991 81.0793 18.287L79.5949 19.6275ZM79.9016 23.0911C79.5097 25.1614 78.7974 26.3343 77.8689 27.0613L79.1019 28.636C80.5301 27.5177 81.417 25.8386 81.8667 23.4632L79.9016 23.0911ZM77.8823 27.051C76.9106 27.7857 75.3556 28.2327 73.0146 28.2327V30.2327C75.5552 30.2327 77.6194 29.7571 79.0885 28.6464L77.8823 27.051ZM73.0146 28.2327H69.4375V30.2327H73.0146V28.2327ZM70.4214 29.4116L72.5255 17.8359L70.5578 17.4782L68.4536 29.0539L70.4214 29.4116ZM71.5417 18.6571H75.75V16.6571H71.5417V18.6571ZM61.0208 41.9342H67.0808V39.9342H61.0208V41.9342ZM68.0624 41.1256L69.4932 33.7859L67.5302 33.4032L66.0993 40.7429L68.0624 41.1256ZM68.5117 34.5946H73.6458V32.5946H68.5117V34.5946ZM73.6458 34.5946C76.0252 34.5946 78.0267 34.3368 79.626 33.8359L79.0282 31.9273C77.6817 32.3491 75.8957 32.5946 73.6458 32.5946V34.5946ZM79.6504 33.8279C81.2755 33.2726 82.6518 32.3961 83.9927 31.1934L82.6573 29.7046C81.4732 30.7667 80.3245 31.484 79.0037 31.9353L79.6504 33.8279ZM83.9995 31.1873C85.0707 30.2087 85.9958 29.1119 86.6529 27.8489L84.8787 26.9258C84.3575 27.9276 83.5993 28.8439 82.6505 29.7107L83.9995 31.1873ZM86.6313 27.8883C87.3225 26.6943 87.8231 25.3283 88.0953 23.8814L86.1297 23.5117C85.897 24.749 85.4717 25.8994 84.9004 26.8863L86.6313 27.8883ZM88.0944 23.886C88.759 20.4418 88.3107 17.5209 86.4299 15.3999L84.9335 16.7268C86.251 18.2126 86.7285 20.4085 86.1306 23.5071L88.0944 23.886ZM86.4546 15.4288C84.6623 13.2457 81.6427 12.3372 78.0225 12.3372V14.3372C81.3881 14.3372 83.671 15.1902 84.9088 16.6978L86.4546 15.4288ZM78.0225 12.3372H66.4496V14.3372H78.0225V12.3372ZM65.4684 13.1442L60.0396 40.7412L62.002 41.1272L67.4308 13.5302L65.4684 13.1442Z" fill="#0079FE" mask="url(#path-1-inside-1_464_110)"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_464_110">
                                                <rect width="101" height="51" fill="white"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <div className={`${style.items} ${style.ui}`}>
                                    <svg width="42" height="53" viewBox="0 0 42 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_464_130)">
                                            <path d="M25.91 30.9294C25.91 39.3004 22.0096 43.4859 14.2087 43.4859C6.64109 43.4859 2.85729 39.3976 2.85729 31.221V15.1268H9.15499V31.2987C9.15499 35.8082 10.9173 38.0629 14.442 38.0629C17.9018 38.0629 19.6317 35.8859 19.6317 31.532V15.1268H25.91V30.9294ZM38.2721 43H31.9939V15.1268H38.2721V43Z" fill="#3725A2"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_464_130">
                                                <rect width="42" height="53" fill="white"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <div className={`${style.items} ${style.css}`}>
                                    <svg width="32" height="45" viewBox="0 0 32 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_464_124)">
                                            <path d="M15.9805 44.8864L2.95779 41.2811L0.0556641 8.82129H31.9444L29.0393 41.2761L15.9805 44.8864Z" fill="#264DE4"/>
                                            <path d="M26.5521 39.2093L29.0346 11.4751H16V42.1266L26.5521 39.2093Z" fill="#2965F1"/>
                                            <path d="M6.70875 23.5143L7.0665 27.4954H16.0001V23.5143H6.70875ZM5.98975 15.4565L6.35262 19.4376H16.0001V15.4565H5.98975ZM16.0001 33.8536L15.9826 33.8582L11.5366 32.661L11.2524 29.4859H7.24487L7.80412 35.7368L15.9817 38.0005L16.0001 37.9956V33.8536Z" fill="#EBEBEB"/>
                                            <path d="M7.56055 0H12.3955V2.0164H9.58255V4.0328H12.3958V6.04907H7.56055V0ZM13.3627 0H18.1978V1.75338H15.3847V2.10403H18.1978V6.13683H13.3628V4.29557H16.1759V3.94492H13.3625V0H13.3627ZM19.1649 0H24V1.75338H21.1869V2.10403H24V6.13683H19.1649V4.29557H21.978V3.94492H19.165V0H19.1649Z" fill="black"/>
                                            <path d="M25.2658 23.5143L25.9865 15.4565H15.9862V19.4376H21.6115L21.2482 23.5143H15.9862V27.4954H20.9021L20.4386 32.6585L15.9861 33.8569V37.9987L24.1702 35.7368L24.2302 35.0642L25.1685 24.5833L25.2658 23.5143Z" fill="white"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_464_124">
                                                <rect width="32" height="45" fill="white"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <div className={`${style.items} ${style.figma}`}>
                                    <svg width="67" height="101" viewBox="0 0 67 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_464_112)">
                                            <path d="M16.75 101.001C25.996 101.001 33.5 93.4593 33.5 84.1673V67.334H16.75C7.504 67.334 0 74.8753 0 84.1673C0 93.4593 7.504 101.001 16.75 101.001Z" fill="#0ACF83"/>
                                            <path d="M0 50.5003C0 41.2083 7.504 33.667 16.75 33.667H33.5V67.3337H16.75C7.504 67.3337 0 59.7923 0 50.5003Z" fill="#A259FF"/>
                                            <path d="M0 16.8333C0 7.54133 7.504 0 16.75 0H33.5V33.6667H16.75C7.504 33.6667 0 26.1253 0 16.8333Z" fill="#F24E1E"/>
                                            <path d="M33.5005 0H50.2505C59.4965 0 67.0005 7.54133 67.0005 16.8333C67.0005 26.1253 59.4965 33.6667 50.2505 33.6667H33.5005V0Z" fill="#FF7262"/>
                                            <path d="M67.0005 50.5003C67.0005 59.7923 59.4965 67.3337 50.2505 67.3337C41.0045 67.3337 33.5005 59.7923 33.5005 50.5003C33.5005 41.2083 41.0045 33.667 50.2505 33.667C59.4965 33.667 67.0005 41.2083 67.0005 50.5003Z" fill="#1ABCFE"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_464_112">
                                                <rect width="67" height="101" fill="white"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <div className={`${style.items} ${style.html}`}>
                                    <svg width="32" height="45" viewBox="0 0 32 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_464_118)">
                                            <path d="M31.9444 8.82129L29.0393 41.2761L15.9805 44.8864L2.95779 41.2811L0.0556641 8.82129H31.9444Z" fill="#E44D26"/>
                                            <path d="M16 42.1266L26.5521 39.2093L29.0346 11.4751H16V42.1266Z" fill="#F16529"/>
                                            <path d="M10.3526 19.4376H16.0001V15.4565H5.98975L6.08525 16.5246L7.0665 27.4954H16.0001V23.5143H10.7175L10.3526 19.4376ZM11.2524 29.4859H7.24487L7.80412 35.7368L15.9817 38.0005L16.0001 37.9956V33.8536L15.9826 33.8582L11.5366 32.661L11.2524 29.4859Z" fill="#EBEBEB"/>
                                            <path d="M3.02246 0H5.05121V1.99882H6.90709V0H8.93596V6.05294H6.90721V4.02607H5.05134V6.05294H3.02259V0H3.02246ZM11.6037 2.0073H9.81796V0H15.4197V2.0073H13.6328V6.05294H11.6041V2.0073H11.604H11.6037ZM16.3087 0H18.4241L19.7253 2.12684L21.0253 0H23.1416V6.05294H21.1211V3.05277L19.7253 5.20492H19.6903L18.2937 3.05277V6.05294H16.3087V0ZM24.1512 0H26.1806V4.05224H29.0336V6.05294H24.1511V0H24.1512Z" fill="black"/>
                                            <path d="M15.9862 27.4954H20.9021L20.4386 32.6585L15.9861 33.8569V37.9987L24.1702 35.7368L24.2302 35.0642L25.1685 24.5833L25.2658 23.5143H15.9862V27.4954ZM15.9862 19.4279V19.4376H25.6291L25.7091 18.5428L25.8911 16.5246L25.9865 15.4565H15.9862V19.428V19.4279Z" fill="white"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_464_118">
                                                <rect width="32" height="45" fill="white"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <div className={`${style.items} ${style.ux}`}>
                                    <svg width="55" height="53" viewBox="0 0 55 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_464_132)">
                                            <path d="M25.91 30.9294C25.91 39.3004 22.0096 43.4859 14.2087 43.4859C6.64109 43.4859 2.85729 39.3976 2.85729 31.221V15.1268H9.15499V31.2987C9.15499 35.8082 10.9173 38.0629 14.442 38.0629C17.9018 38.0629 19.6317 35.8859 19.6317 31.532V15.1268H25.91V30.9294ZM54.755 43H47.3105L42.5095 33.9228C42.3281 33.5858 42.1402 32.9638 41.9458 32.0568H41.8681C41.7773 32.4844 41.5635 33.1323 41.2266 34.0005L36.4062 43H28.9228L37.8056 29.0634L29.6808 15.1268H37.3197L41.3044 23.4849C41.6154 24.1458 41.894 24.9297 42.1402 25.8368H42.2179C42.3734 25.2926 42.665 24.4827 43.0926 23.4072L47.5243 15.1268H54.5218L46.1637 28.9468L54.755 43Z" fill="#3725A2"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_464_132">
                                                <rect width="55" height="53" fill="white"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={`pt-68 pb-68 ${style.indust}`}>
                <div className="container">
                    <div className="row">
                        <div className={`${style.imgBlock} mr-120`}>
                            <Image src="/img/adaptive.png"
                                width={642}
                                height={370}
                            />
                        </div>
                        <div className={style.sectionH2}>
                            <h2 className="title">industries<br />
                                we work with</h2>
                            <p>Our adaptive websites and webpages are capable of displaying all the features of
                                your project or business in its entirety, whether it&apos;s a land sale in Indonesia, a
                                service for LGBTQ+ dating or a marketing agency in the UAE, without sacrificing
                                loading speed or user experience.</p>
                        </div>
                    </div>
                </div>
            </section>
            <LetsTalk contentSide={'left'} />
        </MainLayout>
    );
};

export default WebDevelopment;
