import {MainLayout} from "../../../layouts/MainLayout";
import Hero from "../../../components/Hero/Hero";
import Ticker from "../../../components/Ticker/Ticker";
import HeroAdvantages from "../../../components/HeroAdvantages/HeroAdvantages";
import Breadcrumbs from "../../../components/Breadcrumbs/Breadcrumbs";
import css from "../../../styles/Blog.module.scss";
import Image from "next/image";
import FormContacts from "../../../components/FormContacts/FormContacts";
import React from "react";
import Social from "../../../components/Social/Social";
import axios from "axios";
import Link from "next/link";


export default function blog({posts}){

    return(
        <MainLayout
        title={'blog'}
        description={'blog'}
        >
            <Hero
                title={'Blog'}
                subtitle={'Our blog features only expert content from our team of experts.'}
                imageUrls={{ desktop: '/img/hero/1.jpg', mobile: '/img/hero/1mob.jpg' }}
            />
            <Ticker />
            <HeroAdvantages/>
            <Breadcrumbs
             img={'/img/breadcrumbs/blog.svg'}
             lable={'Blog'}
             link={'/posts/test/blog'}
            />
            <section className="pt-60 pb-80 pt-xl-80 pb-xl-80" style={{background:'#F6F6F6'}}>
                <div className="container">
                    <div className="row mt-4 mb-4 justify-content-between">
                        <div className={`col-12 p-0 d-flex justify-content-between ${css.mobileBlocks}`}>
                    {posts && posts.map((obj) =>(
                        <div key={obj.id} className={css.smallHorizont}>
                            <div  className={`${css.img} ${css.imgSmallH}`}>
                                <div className={css.imgcont}>
                                    <Image src={obj.attributes.postImage.data
                                        ? obj.attributes.postImage.data.attributes.url
                                        : '/img/placeholder.jpg'}
                                           width={666}
                                           height={440}
                                    />
                                </div>
                            </div>
                            <div className={`col-4 mt-3 ${css.rubrikBlock}`}>
                                <div className={css.rubrik_around}>
                                    <span className={css.rubrik}>РУБРИКА</span>
                                </div>
                            </div>
                            <div className={`col-12 ${css.h2}`} >
                                <h2 className={css.title}>{obj.attributes.postName}</h2>
                            </div>
                            <div className={`col-12 ${css.description}`}>
                                <p>{obj.attributes?.subtitle}</p>
                            </div>
                            <div className={css.footer}>
                                <div className={`col-3 ${css.date}`}>
                                    02.10.2022
                                </div>
                                <Link href={`/posts/${obj.attributes.slug}`}>
                                <a className={`col-3 col-md-4 ${css.readmore}`}>
                                    <svg width="17" height="17" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.748812 7.90858C1.19601 13.7441 8.24288 16.4238 12.4153 12.3449C16.0848 8.75756 14.6823 2.56541 9.82521 0.910248C5.19541 -0.667459 0.37635 3.04825 0.748812 7.90858ZM3.57792 7.22126C3.72685 6.6496 4.45759 6.45512 4.87786 6.87527C5.3703 7.36758 5.01959 8.20355 4.32244 8.19921C3.81563 8.19606 3.44932 7.7149 3.57792 7.22126ZM5.92301 7.22126C6.07194 6.6496 6.80268 6.45512 7.22295 6.87527C7.71539 7.36758 7.36468 8.20355 6.66753 8.19921C6.16072 8.19606 5.79441 7.7149 5.92301 7.22126ZM7.88258 9.77958C7.93328 9.62906 7.98471 9.57313 9.06049 8.49826C9.64006 7.91917 10.1142 7.43586 10.1142 7.42424C10.1142 7.41261 9.64006 6.92931 9.06049 6.35022C7.8303 5.12105 7.85341 5.14938 7.85341 4.87085C7.85341 4.37147 8.38742 4.05874 8.82234 4.30343C8.90105 4.34772 11.5427 6.98079 11.6047 7.0768C11.6674 7.1738 11.701 7.29515 11.701 7.42424C11.701 7.55333 11.6674 7.67468 11.6047 7.77167C11.5427 7.86768 8.90105 10.5008 8.82234 10.545C8.31056 10.833 7.69623 10.3326 7.88258 9.77958Z" fill="#3725A2"/>
                                    </svg>

                                    <span>
                                        Read more
                                    </span>
                                </a>
                                </Link>
                            </div>
                        </div>
                    ))}
                        </div>
                    </div>
                    <div className="row">
                        <div className={`col-12 d-flex justify-content-between p-0 ${css.mobileBlocks}`}>
                            <div className={`${css.medium}`}>
                                <div className={css.img}>
                                    <Image src="/img/test/1.png"
                                           width={680}
                                           height={354}
                                    />
                                </div>
                                <div className={`col-4 mt-3 ${css.rubrikBlock}`}>
                                    <div className={css.rubrik_around}>
                                        <span className={css.rubrik}>РУБРИКА</span>
                                    </div>
                                </div>
                                <div className={`col-12 ${css.h2}`} >
                                    <h2 className={css.title}>matahari hills</h2>
                                </div>
                                <div className={`col-12 ${css.description}`}>
                                    <p>Earth-conscious property development project in sumbawaEarth-conscious property development project in sumbawa...</p>
                                </div>
                                <div className={css.footer}>
                                    <div className={`col-3 ${css.date}`}>
                                        02.10.2022
                                    </div>
                                    <Link href={`/`}>
                                        <a className={`col-3 col-md-4 ${css.readmore}`}>
                                            <svg width="17" height="17" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0.748812 7.90858C1.19601 13.7441 8.24288 16.4238 12.4153 12.3449C16.0848 8.75756 14.6823 2.56541 9.82521 0.910248C5.19541 -0.667459 0.37635 3.04825 0.748812 7.90858ZM3.57792 7.22126C3.72685 6.6496 4.45759 6.45512 4.87786 6.87527C5.3703 7.36758 5.01959 8.20355 4.32244 8.19921C3.81563 8.19606 3.44932 7.7149 3.57792 7.22126ZM5.92301 7.22126C6.07194 6.6496 6.80268 6.45512 7.22295 6.87527C7.71539 7.36758 7.36468 8.20355 6.66753 8.19921C6.16072 8.19606 5.79441 7.7149 5.92301 7.22126ZM7.88258 9.77958C7.93328 9.62906 7.98471 9.57313 9.06049 8.49826C9.64006 7.91917 10.1142 7.43586 10.1142 7.42424C10.1142 7.41261 9.64006 6.92931 9.06049 6.35022C7.8303 5.12105 7.85341 5.14938 7.85341 4.87085C7.85341 4.37147 8.38742 4.05874 8.82234 4.30343C8.90105 4.34772 11.5427 6.98079 11.6047 7.0768C11.6674 7.1738 11.701 7.29515 11.701 7.42424C11.701 7.55333 11.6674 7.67468 11.6047 7.77167C11.5427 7.86768 8.90105 10.5008 8.82234 10.545C8.31056 10.833 7.69623 10.3326 7.88258 9.77958Z" fill="#3725A2"/>
                                            </svg>

                                            <span>
                                            Read more
                                        </span>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                            <div className={`${css.medium}`}>
                                <div className={css.img}>
                                    <Image src="/img/test/3.png"
                                           width={680}
                                           height={354}
                                    />
                                    <div className={`${css.lable}`}>
                                        <span>New</span>
                                    </div>
                                </div>
                                <div className={`col-4 mt-3 ${css.rubrikBlock}`}>
                                    <div className={css.rubrik_around}>
                                        <span className={css.rubrik}>РУБРИКА</span>
                                    </div>
                                </div>
                                <div className={`col-12 ${css.h2}`} >
                                    <h2 className={css.title}>matahari hills</h2>
                                </div>
                                <div className={`col-12 ${css.description}`}>
                                    <p>Earth-conscious property development project in sumbawaEarth-conscious property development project in sumbawaEarth-conscious property development project in sumbawa...
                                    </p>
                                </div>
                                <div className={css.footer}>
                                    <div className={`col-3 ${css.date}`}>
                                        02.10.2022
                                    </div>
                                    <Link href={`/`}>
                                        <a className={`col-3 col-md-4 ${css.readmore}`}>
                                            <svg width="17" height="17" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0.748812 7.90858C1.19601 13.7441 8.24288 16.4238 12.4153 12.3449C16.0848 8.75756 14.6823 2.56541 9.82521 0.910248C5.19541 -0.667459 0.37635 3.04825 0.748812 7.90858ZM3.57792 7.22126C3.72685 6.6496 4.45759 6.45512 4.87786 6.87527C5.3703 7.36758 5.01959 8.20355 4.32244 8.19921C3.81563 8.19606 3.44932 7.7149 3.57792 7.22126ZM5.92301 7.22126C6.07194 6.6496 6.80268 6.45512 7.22295 6.87527C7.71539 7.36758 7.36468 8.20355 6.66753 8.19921C6.16072 8.19606 5.79441 7.7149 5.92301 7.22126ZM7.88258 9.77958C7.93328 9.62906 7.98471 9.57313 9.06049 8.49826C9.64006 7.91917 10.1142 7.43586 10.1142 7.42424C10.1142 7.41261 9.64006 6.92931 9.06049 6.35022C7.8303 5.12105 7.85341 5.14938 7.85341 4.87085C7.85341 4.37147 8.38742 4.05874 8.82234 4.30343C8.90105 4.34772 11.5427 6.98079 11.6047 7.0768C11.6674 7.1738 11.701 7.29515 11.701 7.42424C11.701 7.55333 11.6674 7.67468 11.6047 7.77167C11.5427 7.86768 8.90105 10.5008 8.82234 10.545C8.31056 10.833 7.69623 10.3326 7.88258 9.77958Z" fill="#3725A2"/>
                                            </svg>
                                            <span>
                                            Read more
                                        </span>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-12 p-0">
                            <div className={`${css.big}`}>
                                <div className={`${css.img} ${css.imgBig}`}>
                                    <Image src="/img/test/2.png"
                                           width={785}
                                           height={519}
                                    />
                                </div>
                                <div className={css.block}>
                                    <div className={`col-4 mt-3 ${css.rubrikBlock}`}>
                                        <div className={css.rubrik_around}>
                                            <span className={css.rubrik}>РУБРИКА</span>
                                        </div>
                                    </div>
                                    <div className={`col-12 ${css.h2}`} >
                                        <h2 className={css.title}>matahari hills</h2>
                                    </div>
                                    <div className={`col-12 ${css.description}`}>
                                        <p>Earth-conscious property development project in sumbawaEarth-conscious property development project in
                                            sumbawaEarth-conscious property development project in sumbawaEarth-conscious property
                                            development project in sumbawaEarth-conscious property development project in sumbawa

                                            Earth-conscious property development project in sumbawaEarth-conscious property development project in sumbawa

                                            Earth-conscious property development project in sumbawaEarth-conscious property development project in
                                            sumbawaEarth-conscious property development
                                            project in sumbawaEarth-conscious property development project in sumbawa
                                            Earth-conscious property development project in sumbawaEarth-conscious property development project in
                                            sumbawaEarth-conscious property development
                                            project in sumbawaEarth-conscious property development project in...</p>
                                    </div>
                                    <div className={css.footer}>
                                        <div className={`col-3 ${css.date}`}>
                                            02.10.2022
                                        </div>
                                        <Link href={`/`}>
                                            <a className={`col-3 col-md-4 ${css.readmore}`}>
                                                <svg width="17" height="17" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M0.748812 7.90858C1.19601 13.7441 8.24288 16.4238 12.4153 12.3449C16.0848 8.75756 14.6823 2.56541 9.82521 0.910248C5.19541 -0.667459 0.37635 3.04825 0.748812 7.90858ZM3.57792 7.22126C3.72685 6.6496 4.45759 6.45512 4.87786 6.87527C5.3703 7.36758 5.01959 8.20355 4.32244 8.19921C3.81563 8.19606 3.44932 7.7149 3.57792 7.22126ZM5.92301 7.22126C6.07194 6.6496 6.80268 6.45512 7.22295 6.87527C7.71539 7.36758 7.36468 8.20355 6.66753 8.19921C6.16072 8.19606 5.79441 7.7149 5.92301 7.22126ZM7.88258 9.77958C7.93328 9.62906 7.98471 9.57313 9.06049 8.49826C9.64006 7.91917 10.1142 7.43586 10.1142 7.42424C10.1142 7.41261 9.64006 6.92931 9.06049 6.35022C7.8303 5.12105 7.85341 5.14938 7.85341 4.87085C7.85341 4.37147 8.38742 4.05874 8.82234 4.30343C8.90105 4.34772 11.5427 6.98079 11.6047 7.0768C11.6674 7.1738 11.701 7.29515 11.701 7.42424C11.701 7.55333 11.6674 7.67468 11.6047 7.77167C11.5427 7.86768 8.90105 10.5008 8.82234 10.545C8.31056 10.833 7.69623 10.3326 7.88258 9.77958Z" fill="#3725A2"/>
                                                </svg>
                                                <span>Read more</span>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-4 justify-content-between">
                        <div className={`col-12 p-0 d-flex justify-content-between ${css.mobileBlocks}`}>
                            <div className={css.smallHorizont}>
                                <div className={`${css.img} ${css.imgSmallH}`}>
                                    <Image src="/img/test/4.png"
                                           width={666}
                                           height={147}
                                    />
                                </div>
                                <div className={`col-4 mt-3 ${css.rubrikBlock}`}>
                                    <div className={css.rubrik_around}>
                                        <span className={css.rubrik}>РУБРИКА</span>
                                    </div>
                                </div>
                                <div className={`col-12 ${css.h2}`} >
                                    <h2 className={css.title}>matahari hills</h2>
                                </div>
                                <div className={`col-12 ${css.description}`}>
                                    <p>Earth-conscious property development project in sumbawaEarth-conscious Earth-conscious property development project in
                                        Earth-conscious property development project in sumbawa</p>
                                </div>
                                <div className={css.footer}>
                                    <div className={`col-3 ${css.date}`}>
                                        02.10.2022
                                    </div>
                                    <Link href={`/`}>
                                        <a className={`col-3 col-md-4 ${css.readmore}`}>
                                            <svg width="17" height="17" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0.748812 7.90858C1.19601 13.7441 8.24288 16.4238 12.4153 12.3449C16.0848 8.75756 14.6823 2.56541 9.82521 0.910248C5.19541 -0.667459 0.37635 3.04825 0.748812 7.90858ZM3.57792 7.22126C3.72685 6.6496 4.45759 6.45512 4.87786 6.87527C5.3703 7.36758 5.01959 8.20355 4.32244 8.19921C3.81563 8.19606 3.44932 7.7149 3.57792 7.22126ZM5.92301 7.22126C6.07194 6.6496 6.80268 6.45512 7.22295 6.87527C7.71539 7.36758 7.36468 8.20355 6.66753 8.19921C6.16072 8.19606 5.79441 7.7149 5.92301 7.22126ZM7.88258 9.77958C7.93328 9.62906 7.98471 9.57313 9.06049 8.49826C9.64006 7.91917 10.1142 7.43586 10.1142 7.42424C10.1142 7.41261 9.64006 6.92931 9.06049 6.35022C7.8303 5.12105 7.85341 5.14938 7.85341 4.87085C7.85341 4.37147 8.38742 4.05874 8.82234 4.30343C8.90105 4.34772 11.5427 6.98079 11.6047 7.0768C11.6674 7.1738 11.701 7.29515 11.701 7.42424C11.701 7.55333 11.6674 7.67468 11.6047 7.77167C11.5427 7.86768 8.90105 10.5008 8.82234 10.545C8.31056 10.833 7.69623 10.3326 7.88258 9.77958Z" fill="#3725A2"/>
                                            </svg>

                                            <span>
                                            Read more
                                        </span>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                            <div className={css.smallHorizont}>
                                <div className={`${css.img} ${css.imgSmallH}`}>
                                    <Image src="/img/test/4.png"
                                           width={666}
                                           height={147}
                                    />
                                </div>
                                <div className={`col-4 mt-3 ${css.rubrikBlock}`}>
                                    <div className={css.rubrik_around}>
                                        <span className={css.rubrik}>РУБРИКА</span>
                                    </div>
                                </div>
                                <div className={`col-12 ${css.h2}`} >
                                    <h2 className={css.title}>matahari hills</h2>
                                </div>
                                <div className={`col-12 ${css.description}`}>
                                    <p>Earth-conscious property development project in sumbawaEarth-conscious Earth-conscious property development project in
                                        Earth-conscious property development project in sumbawa</p>
                                </div>
                                <div className={css.footer}>
                                    <div className={`col-3 ${css.date}`}>
                                        02.10.2022
                                    </div>
                                    <Link href={`/`}>
                                        <a className={`col-3 col-md-4 ${css.readmore}`}>
                                            <svg width="17" height="17" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0.748812 7.90858C1.19601 13.7441 8.24288 16.4238 12.4153 12.3449C16.0848 8.75756 14.6823 2.56541 9.82521 0.910248C5.19541 -0.667459 0.37635 3.04825 0.748812 7.90858ZM3.57792 7.22126C3.72685 6.6496 4.45759 6.45512 4.87786 6.87527C5.3703 7.36758 5.01959 8.20355 4.32244 8.19921C3.81563 8.19606 3.44932 7.7149 3.57792 7.22126ZM5.92301 7.22126C6.07194 6.6496 6.80268 6.45512 7.22295 6.87527C7.71539 7.36758 7.36468 8.20355 6.66753 8.19921C6.16072 8.19606 5.79441 7.7149 5.92301 7.22126ZM7.88258 9.77958C7.93328 9.62906 7.98471 9.57313 9.06049 8.49826C9.64006 7.91917 10.1142 7.43586 10.1142 7.42424C10.1142 7.41261 9.64006 6.92931 9.06049 6.35022C7.8303 5.12105 7.85341 5.14938 7.85341 4.87085C7.85341 4.37147 8.38742 4.05874 8.82234 4.30343C8.90105 4.34772 11.5427 6.98079 11.6047 7.0768C11.6674 7.1738 11.701 7.29515 11.701 7.42424C11.701 7.55333 11.6674 7.67468 11.6047 7.77167C11.5427 7.86768 8.90105 10.5008 8.82234 10.545C8.31056 10.833 7.69623 10.3326 7.88258 9.77958Z" fill="#3725A2"/>
                                            </svg>

                                            <span>
                                            Read more
                                        </span>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className={`col-12 p-0 d-flex justify-content-between ${css.mobileBlocks}`}>
                        <div className={css.smallVertical}>
                            <div className={`${css.img} ${css.imgSmallV}`}>
                                <Image src="/img/test/5.png"
                                       width={480}
                                       height={235}
                                />
                            </div>
                            <div className={`col-4 mt-3 ${css.rubrikBlock}`}>
                                <div className={css.rubrik_around}>
                                    <span className={css.rubrik}>РУБРИКА</span>
                                </div>
                            </div>
                            <div className={`col-12 ${css.h2}`} >
                                <h2 className={css.title}>matahari hills</h2>
                            </div>
                            <div className={`col-12 ${css.description}`}>
                                <p>Earth-conscious property development project in sumbawa...</p>
                            </div>
                            <div className={css.footer}>
                                <div className={`col-3 ${css.date}`}>
                                    02.10.2022
                                </div>
                                <Link href={`/`}>
                                    <a className={`col-5 col-md-6 ${css.readmore}`}>
                                        <svg width="17" height="17" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0.748812 7.90858C1.19601 13.7441 8.24288 16.4238 12.4153 12.3449C16.0848 8.75756 14.6823 2.56541 9.82521 0.910248C5.19541 -0.667459 0.37635 3.04825 0.748812 7.90858ZM3.57792 7.22126C3.72685 6.6496 4.45759 6.45512 4.87786 6.87527C5.3703 7.36758 5.01959 8.20355 4.32244 8.19921C3.81563 8.19606 3.44932 7.7149 3.57792 7.22126ZM5.92301 7.22126C6.07194 6.6496 6.80268 6.45512 7.22295 6.87527C7.71539 7.36758 7.36468 8.20355 6.66753 8.19921C6.16072 8.19606 5.79441 7.7149 5.92301 7.22126ZM7.88258 9.77958C7.93328 9.62906 7.98471 9.57313 9.06049 8.49826C9.64006 7.91917 10.1142 7.43586 10.1142 7.42424C10.1142 7.41261 9.64006 6.92931 9.06049 6.35022C7.8303 5.12105 7.85341 5.14938 7.85341 4.87085C7.85341 4.37147 8.38742 4.05874 8.82234 4.30343C8.90105 4.34772 11.5427 6.98079 11.6047 7.0768C11.6674 7.1738 11.701 7.29515 11.701 7.42424C11.701 7.55333 11.6674 7.67468 11.6047 7.77167C11.5427 7.86768 8.90105 10.5008 8.82234 10.545C8.31056 10.833 7.69623 10.3326 7.88258 9.77958Z" fill="#3725A2"/>
                                        </svg>

                                        <span>
                                            Read more
                                        </span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className={css.smallVertical}>
                            <div className={`${css.img} ${css.imgSmallV}`}>
                                <Image src="/img/test/5.png"
                                       width={480}
                                       height={235}
                                />
                            </div>
                            <div className={`col-4 mt-3 ${css.rubrikBlock}`}>
                                <div className={css.rubrik_around}>
                                    <span className={css.rubrik}>РУБРИКА</span>
                                </div>
                            </div>
                            <div className={`col-12 ${css.h2}`} >
                                <h2 className={css.title}>matahari hills</h2>
                            </div>
                            <div className={`col-12 ${css.description}`}>
                                <p>Earth-conscious property development project in sumbawa...</p>
                            </div>
                            <div className={css.footer}>
                                <div className={`col-3 ${css.date}`}>
                                    02.10.2022
                                </div>
                                <Link href={`/`}>
                                    <a className={`col-5 col-md-6 ${css.readmore}`}>
                                        <svg width="17" height="17" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0.748812 7.90858C1.19601 13.7441 8.24288 16.4238 12.4153 12.3449C16.0848 8.75756 14.6823 2.56541 9.82521 0.910248C5.19541 -0.667459 0.37635 3.04825 0.748812 7.90858ZM3.57792 7.22126C3.72685 6.6496 4.45759 6.45512 4.87786 6.87527C5.3703 7.36758 5.01959 8.20355 4.32244 8.19921C3.81563 8.19606 3.44932 7.7149 3.57792 7.22126ZM5.92301 7.22126C6.07194 6.6496 6.80268 6.45512 7.22295 6.87527C7.71539 7.36758 7.36468 8.20355 6.66753 8.19921C6.16072 8.19606 5.79441 7.7149 5.92301 7.22126ZM7.88258 9.77958C7.93328 9.62906 7.98471 9.57313 9.06049 8.49826C9.64006 7.91917 10.1142 7.43586 10.1142 7.42424C10.1142 7.41261 9.64006 6.92931 9.06049 6.35022C7.8303 5.12105 7.85341 5.14938 7.85341 4.87085C7.85341 4.37147 8.38742 4.05874 8.82234 4.30343C8.90105 4.34772 11.5427 6.98079 11.6047 7.0768C11.6674 7.1738 11.701 7.29515 11.701 7.42424C11.701 7.55333 11.6674 7.67468 11.6047 7.77167C11.5427 7.86768 8.90105 10.5008 8.82234 10.545C8.31056 10.833 7.69623 10.3326 7.88258 9.77958Z" fill="#3725A2"/>
                                        </svg>

                                        <span>
                                            Read more
                                        </span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className={css.smallVertical}>
                            <div className={`${css.img} ${css.imgSmallV}`}>
                                <Image src="/img/test/5.png"
                                       width={480}
                                       height={235}
                                />
                            </div>
                            <div className={`col-4 mt-3 ${css.rubrikBlock}`}>
                                <div className={css.rubrik_around}>
                                    <span className={css.rubrik}>РУБРИКА</span>
                                </div>
                            </div>
                            <div className={`col-12 ${css.h2}`} >
                                <h2 className={css.title}>matahari hills</h2>
                            </div>
                            <div className={`col-12 ${css.description}`}>
                                <p>Earth-conscious property development project in sumbawa...</p>
                            </div>
                            <div className={css.footer}>
                                <div className={`col-3 ${css.date}`}>
                                    02.10.2022
                                </div>
                                <Link href={`/`}>
                                    <a className={`col-5 col-md-6 ${css.readmore}`}>
                                        <svg width="17" height="17" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0.748812 7.90858C1.19601 13.7441 8.24288 16.4238 12.4153 12.3449C16.0848 8.75756 14.6823 2.56541 9.82521 0.910248C5.19541 -0.667459 0.37635 3.04825 0.748812 7.90858ZM3.57792 7.22126C3.72685 6.6496 4.45759 6.45512 4.87786 6.87527C5.3703 7.36758 5.01959 8.20355 4.32244 8.19921C3.81563 8.19606 3.44932 7.7149 3.57792 7.22126ZM5.92301 7.22126C6.07194 6.6496 6.80268 6.45512 7.22295 6.87527C7.71539 7.36758 7.36468 8.20355 6.66753 8.19921C6.16072 8.19606 5.79441 7.7149 5.92301 7.22126ZM7.88258 9.77958C7.93328 9.62906 7.98471 9.57313 9.06049 8.49826C9.64006 7.91917 10.1142 7.43586 10.1142 7.42424C10.1142 7.41261 9.64006 6.92931 9.06049 6.35022C7.8303 5.12105 7.85341 5.14938 7.85341 4.87085C7.85341 4.37147 8.38742 4.05874 8.82234 4.30343C8.90105 4.34772 11.5427 6.98079 11.6047 7.0768C11.6674 7.1738 11.701 7.29515 11.701 7.42424C11.701 7.55333 11.6674 7.67468 11.6047 7.77167C11.5427 7.86768 8.90105 10.5008 8.82234 10.545C8.31056 10.833 7.69623 10.3326 7.88258 9.77958Z" fill="#3725A2"/>
                                        </svg>

                                        <span>
                                            Read more
                                        </span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className={`row mt-4 justify-content-between ${css.mobileBlocks}`}>
                        <div className={`${css.mediumMix}`}>
                            <div className={css.img}>
                                <Image src="/img/test/1.png"
                                       width={680}
                                       height={414}
                                />
                            </div>
                            <div className={`col-4 mt-3 ${css.rubrikBlock}`}>
                                <div className={css.rubrik_around}>
                                    <span className={css.rubrik}>РУБРИКА</span>
                                </div>
                            </div>
                            <div className={`col-12 ${css.h2}`} >
                                <h2 className={css.title}>matahari hills</h2>
                            </div>
                            <div className={`col-12 ${css.description}`}>
                                <p>Earth-conscious property development project in sumbawaEarth-conscious property development project in sumbawaEarth-conscious property development project in sumbawa

                                    Earth-conscious property development project in sumbawaEarth-conscious property development project in sumbawaEarth-conscious property development project in sumbawaEarth-conscious property

                                    development project in sumbawaEarth-conscious property
                                    development project in sumbawa
                                    Earth-conscious property development project in sumbawaEarth-conscious </p>
                            </div>
                            <div className={css.footer}>
                                <div className={`col-3 ${css.date}`}>
                                    02.10.2022
                                </div>
                                <Link href={`/`}>
                                    <a className={`col-3 col-md-4 col-md-4 ${css.readmore}`}>
                                        <svg width="17" height="17" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0.748812 7.90858C1.19601 13.7441 8.24288 16.4238 12.4153 12.3449C16.0848 8.75756 14.6823 2.56541 9.82521 0.910248C5.19541 -0.667459 0.37635 3.04825 0.748812 7.90858ZM3.57792 7.22126C3.72685 6.6496 4.45759 6.45512 4.87786 6.87527C5.3703 7.36758 5.01959 8.20355 4.32244 8.19921C3.81563 8.19606 3.44932 7.7149 3.57792 7.22126ZM5.92301 7.22126C6.07194 6.6496 6.80268 6.45512 7.22295 6.87527C7.71539 7.36758 7.36468 8.20355 6.66753 8.19921C6.16072 8.19606 5.79441 7.7149 5.92301 7.22126ZM7.88258 9.77958C7.93328 9.62906 7.98471 9.57313 9.06049 8.49826C9.64006 7.91917 10.1142 7.43586 10.1142 7.42424C10.1142 7.41261 9.64006 6.92931 9.06049 6.35022C7.8303 5.12105 7.85341 5.14938 7.85341 4.87085C7.85341 4.37147 8.38742 4.05874 8.82234 4.30343C8.90105 4.34772 11.5427 6.98079 11.6047 7.0768C11.6674 7.1738 11.701 7.29515 11.701 7.42424C11.701 7.55333 11.6674 7.67468 11.6047 7.77167C11.5427 7.86768 8.90105 10.5008 8.82234 10.545C8.31056 10.833 7.69623 10.3326 7.88258 9.77958Z" fill="#3725A2"/>
                                        </svg>

                                        <span>
                                            Read more
                                        </span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className={css.smallBlockMix}>
                            <div className={css.smallHorizontMix}>
                                <div className={`${css.img} ${css.imgSmallH}`}>
                                    <Image src="/img/test/4.png"
                                           width={666}
                                           height={147}
                                    />
                                </div>
                                <div className={`col-4 mt-3 ${css.rubrikBlock}`}>
                                    <div className={css.rubrik_around}>
                                        <span className={css.rubrik}>РУБРИКА</span>
                                    </div>
                                </div>
                                <div className={`col-12 ${css.h2}`} >
                                    <h2 className={css.title}>matahari hills</h2>
                                </div>
                                <div className={`col-12 ${css.description}`}>
                                    <p>Earth-conscious property development project in sumbawaEarth-conscious Earth-conscious property development project in
                                        Earth-conscious property development project in sumbawa</p>
                                </div>
                                <div className={css.footer}>
                                    <div className={`col-3 ${css.date}`}>
                                        02.10.2022
                                    </div>
                                    <Link href={`/`}>
                                        <a className={`col-3 col-md-4 ${css.readmore}`}>
                                            <svg width="17" height="17" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0.748812 7.90858C1.19601 13.7441 8.24288 16.4238 12.4153 12.3449C16.0848 8.75756 14.6823 2.56541 9.82521 0.910248C5.19541 -0.667459 0.37635 3.04825 0.748812 7.90858ZM3.57792 7.22126C3.72685 6.6496 4.45759 6.45512 4.87786 6.87527C5.3703 7.36758 5.01959 8.20355 4.32244 8.19921C3.81563 8.19606 3.44932 7.7149 3.57792 7.22126ZM5.92301 7.22126C6.07194 6.6496 6.80268 6.45512 7.22295 6.87527C7.71539 7.36758 7.36468 8.20355 6.66753 8.19921C6.16072 8.19606 5.79441 7.7149 5.92301 7.22126ZM7.88258 9.77958C7.93328 9.62906 7.98471 9.57313 9.06049 8.49826C9.64006 7.91917 10.1142 7.43586 10.1142 7.42424C10.1142 7.41261 9.64006 6.92931 9.06049 6.35022C7.8303 5.12105 7.85341 5.14938 7.85341 4.87085C7.85341 4.37147 8.38742 4.05874 8.82234 4.30343C8.90105 4.34772 11.5427 6.98079 11.6047 7.0768C11.6674 7.1738 11.701 7.29515 11.701 7.42424C11.701 7.55333 11.6674 7.67468 11.6047 7.77167C11.5427 7.86768 8.90105 10.5008 8.82234 10.545C8.31056 10.833 7.69623 10.3326 7.88258 9.77958Z" fill="#3725A2"/>
                                            </svg>

                                            <span>
                                            Read more
                                        </span>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                            <div className={css.smallHorizontMix}>
                                <div className={`${css.img} ${css.imgSmallH}`}>
                                    <Image src="/img/test/4.png"
                                           width={666}
                                           height={147}
                                    />
                                </div>
                                <div className={`col-4 mt-3 ${css.rubrikBlock}`}>
                                    <div className={css.rubrik_around}>
                                        <span className={css.rubrik}>РУБРИКА</span>
                                    </div>
                                </div>
                                <div className={`col-12 ${css.h2}`} >
                                    <h2 className={css.title}>matahari hills</h2>
                                </div>
                                <div className={`col-12 ${css.description}`}>
                                    <p>Earth-conscious property development project in sumbawaEarth-conscious Earth-conscious property development project in
                                        Earth-conscious property development project in sumbawa</p>
                                </div>
                                <div className={css.footer}>
                                    <div className={`col-3 ${css.date}`}>
                                        02.10.2022
                                    </div>
                                    <Link href={`/`}>
                                        <a className={`col-3 col-md-4 ${css.readmore}`}>
                                            <svg width="17" height="17" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0.748812 7.90858C1.19601 13.7441 8.24288 16.4238 12.4153 12.3449C16.0848 8.75756 14.6823 2.56541 9.82521 0.910248C5.19541 -0.667459 0.37635 3.04825 0.748812 7.90858ZM3.57792 7.22126C3.72685 6.6496 4.45759 6.45512 4.87786 6.87527C5.3703 7.36758 5.01959 8.20355 4.32244 8.19921C3.81563 8.19606 3.44932 7.7149 3.57792 7.22126ZM5.92301 7.22126C6.07194 6.6496 6.80268 6.45512 7.22295 6.87527C7.71539 7.36758 7.36468 8.20355 6.66753 8.19921C6.16072 8.19606 5.79441 7.7149 5.92301 7.22126ZM7.88258 9.77958C7.93328 9.62906 7.98471 9.57313 9.06049 8.49826C9.64006 7.91917 10.1142 7.43586 10.1142 7.42424C10.1142 7.41261 9.64006 6.92931 9.06049 6.35022C7.8303 5.12105 7.85341 5.14938 7.85341 4.87085C7.85341 4.37147 8.38742 4.05874 8.82234 4.30343C8.90105 4.34772 11.5427 6.98079 11.6047 7.0768C11.6674 7.1738 11.701 7.29515 11.701 7.42424C11.701 7.55333 11.6674 7.67468 11.6047 7.77167C11.5427 7.86768 8.90105 10.5008 8.82234 10.545C8.31056 10.833 7.69623 10.3326 7.88258 9.77958Z" fill="#3725A2"/>
                                            </svg>

                                            <span>
                                            Read more
                                        </span>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <FormContacts />
            <Social />
        </MainLayout>
    );
}
export async function getServerSideProps() {
    try {
        const res = await axios.get(`${process.env.API_URL}/blogs?sort=createdAt:desc&populate=*`);
        const posts = await res.data.data;

        return {
            props: {
                posts,
            },
        };
    } catch (error) {
        return { error };
    }
}