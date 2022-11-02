import Hero from '../../components/Hero/Hero';
import Ticker from '../../components/Ticker/Ticker';

import LetsTalk from '../../components/LetsTalk/LetsTalk';
import Steps from '../../components/Steps/Steps';
import OurToolkit from '../../components/OurToolkit/OurToolkit';
import {MainLayout} from '../../layouts/MainLayout';
import ListWithIcon from '../../components/ListWithIcon/ListWithIcon';
import React from 'react';
import styles from '../../components/MustHaveEvents/MustHaveEvents.module.scss';
import Image from 'next/image';

import WhatWeWorked from '../../components/WhatWeWorked/WhatWeWorked';
import icon1 from '../../components/WhatWeWorked/img/1.svg';
import icon2 from '../../components/WhatWeWorked/img/2.svg';
import icon3 from '../../components/WhatWeWorked/img/3.svg';
import icon4 from '../../components/WhatWeWorked/img/4.svg';
import icon5 from '../../components/WhatWeWorked/img/5.svg';

export default function paid() {
  const stepsArr = [
    {
      title: 'Introduction',
      days: '1-2 days',
    },
    {
      title: 'Analysis',
      days: '1-4 days',
    },
    {
      title: 'Preparation',
      days: '3-5 days',
    },
    {
      title: 'Launch',
      days: '3-5 days',
    },
    {
      title: 'Optimization',
      days: '5-7 days',
    },
    {
      title: 'Scaling',
      days: '5-7 days',
    },
  ];
  
  const whatWeWorkedArr = [
    {
      title: 'Real Estate Website',
      links: [''],
      svgIcon: icon1,
    },
    {
      title: 'E-Commerce Website & Mobile Apps',
      links: [''],
      svgIcon: icon2,
    },
    {
      title: `Mobile Apps & Mobile Games`,
      links: [''],
      svgIcon: icon3,
    },
    {
      title: 'B2B & SaaS Website & Mobile Apps',
      links: [''],
      svgIcon: icon4,
    },
    {
      title: 'Fintech Website & Mobile Apps',
      links: [''],
      svgIcon: icon5,
    },
  ];
  
  const arr1 = [
    {
      title: '',
      text: 'Get stable and scalable user acquisition channels',
      iconCheck: true,
    },
    {
      title: '',
      text: 'Get high conversion in app installs or sales on website and a favorable price per user',
      iconCheck: true,
    },
    {
      title: '',
      text: 'Data-driven creative solutions: development and implementation',
      iconCheck: true,
    },
    {
      title: '',
      text: 'Ad creatives for paid channels, full free JBTD framework',
      iconCheck: true,
    },
    {
      title: '',
      text: "Build a base for retargeting. You can 'catch up' with doubting/deleting/unpaid users so as this is usually cheaper than buying new ones",
      iconCheck: true,
    },
    {
      title: '',
      text: 'Weekly reporting and free recommendations for your marketing',
      iconCheck: true,
    },
  ];
  
  const ourToolkitArr = [
    {
      title: 'Paid search & RTB',
      text: 'Google AdWords, Baidu, Bing, AppleSearchAds',
    },
    {
      title: 'Landing pages and forms',
      text: 'Typeform, Tilda, Bitrix, Custom (Web, Android, iOS)',
    },
    {
      title: 'Targeted ads',
      text: 'Facebook, Instagram,TikTok, Snapchat, WeChat, QQ, Weibo',
    },
    {
      title: 'Performance testing and monitoring tools',
      text: 'Google Speed Insight, CrossBrowserTesting',
    },
  ];
  
  
  return (
      <MainLayout
          title="Users Qcquisition from Digital channels - LTV:CAC agency"
          description="Use our 10 + years expertise in digital channels and market trends to drive more customers to your products and back your old clients for buy again. ">
        <Hero
            title={'Paid Marketing Channels'}
            subtitle={'Data-driven digital marketing for your customer&apos;s base growing'}
            imageUrls={{desktop: '/img/hero/3.jpg', mobile: '/img/hero/3mob.jpg'}}
        />
        <Ticker/>
        
        <section className="section section--title-left-img7">
          <div className="container p-0">
            <div className="row">
              <div className="col-12 col-md-6 mb-40 mb-xl-0">
                <div className="section__title-box section__title-box--img7 pt-100 pb-100 pt-md-120 p-25">
                  <h2 className="section__title section__title--small ta-left">
                    MARKETING
                    <br/>
                    CHANNELS
                    <br/>
                    FOR
                    <br/>
                    BUSINESSES
                  </h2>
                </div>
              </div>
              <div
                  className="col-12 col-md-6 col-xl-4 offset-xl-1 d-md-flex d-xl-block pt-md-50 pb-md-20 pt-xl-100 pb-xl-100">
                <div className="ph-20">
                  <h3 className="h3 mb-20">Why does your company need digital channels?</h3>
                  <p className="text-large mb-20">
                    Today&apos;s world moves at breakneck speed, so to stay on top of the game
                    businesses must utilize all the tools at their disposal. And one of the most
                    efficient tools nowadays are digital marketing channels. They are essentially
                    means that you can use to reach your target audience in order to promote your
                    product, brand or service. Whether you&apos;re looking to raise brand awareness,
                    improve conversions or generate more leads, digital channels are the most
                    versatile and powerful tools for achieving your business objectives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <div className="pb-40 pt-md-100 pb-md-100 pt-xl-190 pb-xl-190">
          <div className="container ph-20">
            <div className="row">
              <div className="col-12 col-xl-8 m-auto">
                <p className="section__text ta-left ta-md-center">
                  Use our 10+ years expertise in digital channels and market trends to drive more
                  customers to your products and bring your old clients back to buy again. We&apos;ll
                  help you grow your revenue in no time!
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <WhatWeWorked itemsArr={whatWeWorkedArr} contentSide={'left'}/>
        
        <section className="section section--title-right-img8 mb-60 mb-md-0">
          <div className="container p-0">
            <div className="row">
              <div className="col-12 col-md-6 col-xl-5 offset-xl-2 order-md-1 mb-40 mb-md-0 pb-xl-50 ">
                <div className="section__title-box section__title-box--img8 p-20 pt-120 pb-120">
                  <h2 className="section__title section__title--small ta-left tt-upper">
                    TOP 6 BENEFITS
                    <br/>
                    OF DIGITAL
                    <br/>
                    MARKETING
                    <br/>
                    CHANNELS
                    <br/>
                  </h2>
                </div>
              </div>
              
              <div className="col-12 col-md-6 col-xl-4 offset-xl-1 pt-md-50 pb-md-50">
                <div className="ph-20">
                  <ListWithIcon arr={arr1}/>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="section section--title-left-img3 mb-40 mb-md-0">
          <div className="container p-0">
            <div className="row">
              <div className="col-12 col-md-6 mb-40 mb-md-0 d-flex aligin-center">
                <div className="section__title-box section__title-box--img3 p-20 pt-80 pb-80 pt-md-100">
                  <h2 className="section__title ta-left ta-md-right section__title--large">
                    HOW
                    <br/>
                    IT
                    <br/>
                    WORKS
                  </h2>
                </div>
              </div>
              
              <div className="col-12 col-md-6 col-xl-4 offset-xl-1">
                <div className="ph-20 pt-md-50 pb-md-20 pt-xl-100 pb-xl-100">
                  <div className="count-block w-100 mb-40 mb-md-0">
                    <span className="count">1</span>
                    <div className="text-large mb-20">
                      <p>
                        {' '}
                        We typically start with an in-depth analysis of your market, product,
                        channels, and business model.
                      </p>
                    </div>
                  </div>
                  <div className="count-block w-100 mb-40 mb-md-0">
                    <span className="count">2</span>
                    <div className="text-large mb-20">
                      <p> Then we deploy a performance-based attribution and set up analytics.</p>
                    </div>
                  </div>
                  <div className="count-block w-100 mb-40 mb-md-0">
                    <span className="count">3</span>
                    <div className="text-large mb-20">
                      <p>
                        {' '}
                        We will elaborate on each ad campaigns data-driven architecture and produce
                        only the best-suited creatives with the intel gathered.
                      </p>
                    </div>
                  </div>
                  <div className="count-block w-100 mb-40 mb-md-0">
                    <span className="count">4</span>
                    <div className="text-large mb-20">
                      <p> After the launch, we optimize ad campaigns on a daily and weekly basis.</p>
                    </div>
                  </div>
                  <p className="text-large mb-20">
                    Here&apos;s how we lead your digital customer acquisition channel to a significant
                    increase in revenue.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <div className="pb-60 pt-md-100 pb-md-100 pt-xl-190 pb-xl-190">
          <div className="container ph-20">
            <div className="row">
              <div className="col-12 col-xl-8 m-auto">
                <p className="section__text ta-left ta-md-center">
                  In-depth analysis and a smart strategy are required to get high relevance for your
                  product, save acquisition costs and increase conversions.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pb-60 pt-60">
          <Steps stepsArr={stepsArr}/>
        </div>
        
        <section className="section section--title-right mb-60 mb-md-0">
          <div className="container p-0">
            <div className="row">
              <div className="col-12 col-md-6 col-xl-5 offset-xl-2 order-md-1 mb-60 mb-md-0 pb-xl-50 ">
                <div className="section__title-box pl-md-20 p-20 pt-120 pb-120">
                  <h2 className="section__title section__title--small tt-upper ta-left">
                    WHAT THE <br/> MARKETING <br/> FUNNEL OF A <br/> WEBSITE <br/> LOOKS LIKE
                  </h2>
                </div>
              </div>
              
              <div className="col-12 col-md-6 col-xl-4 offset-xl-1 pt-md-50 pb-md-50 pt-xl-100 pb-xl-100">
                <div className="ph-20">
                  <div className={styles.events}>
                    <Image width={374} height={570} src={'/img/events/web.svg'} alt="events"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="section section--title-left mb-60 mb-md-0">
          <div className="container p-0">
            <div className="row">
              <div className="col-12 col-md-6 col-xl-5  mb-60 mb-md-0 pb-xl-50 ">
                <div className="section__title-box  pl-md-20 p-20 pt-120 pb-120">
                  <h2 className="section__title section__title--small ta-md-right tt-upper">
                    WHAT THE <br/> MARKETING <br/> funnel for a <br/> mobile app <br/> LOOKS LIKE
                  </h2>
                </div>
              </div>
              
              <div className="col-12 col-md-6 col-xl-4 offset-xl-2 pt-md-50 pb-md-50 pt-xl-100 pb-xl-100">
                <div className="ph-20">
                  <div className={styles.events}>
                    <Image width={374} height={570} src={'/img/events/app.svg'} alt="events"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <OurToolkit
            imagePosition={'right'}
            arr={ourToolkitArr}
        />
        
        <LetsTalk contentSide={'left'}/>
      </MainLayout>
  );
}
