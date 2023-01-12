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
import icon1 from '../../components/WhatWeWorked/img/1.png';
import icon2 from '../../components/WhatWeWorked/img/2.png';
import icon3 from '../../components/WhatWeWorked/img/3.png';
import icon4 from '../../components/WhatWeWorked/img/4.png';
import icon5 from '../../components/WhatWeWorked/img/5.png';


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
      svgIcon: '/img/WWWO/1.png',
    },
    {
      title: 'E-Commerce Website & Mobile Apps',
      links: [''],
      svgIcon: '/img/WWWO/2.png',
    },
    {
      title: `Mobile Apps & Mobile Games`,
      links: [''],
      svgIcon: '/img/WWWO/3.png',
    },
    {
      title: 'B2B & SaaS Website & Mobile Apps',
      links: [''],
      svgIcon: '/img/WWWO/4.png',
    },
    {
      title: 'Fintech Website & Mobile Apps',
      links: [''],
      svgIcon: '/img/WWWO/5.png',
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
        
        <section className="section section--title-left mt-68 mb-68">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6 my-auto">
                <div className="marginHomeLeft">
                  <h2 className="h2title ta-right mt-22 mb-22">
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
                  className="col-12 col-md-6 my-auto">
                <div className=" ml-120 mt-22 mb-22">
                  <h3 className="h3 mb-20">Why does your company need digital channels?</h3>
                  <p className="textFonts">
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
        
        <div className="pb-68 pt-68 lineHome">
          <div className="container">
            <div className="row">
              <div className="col-12 col-xl-8 m-auto">
                <p className="section__text1 ta-left ta-md-center">
                  Use our 10+ years expertise in digital channels and market trends to drive more
                  customers to your products and bring your old clients back to buy again. We&apos;ll
                  help you grow your revenue in no time!
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <WhatWeWorked itemsArr={whatWeWorkedArr} contentSide={'right'} font={'2'}/>
        
        <section className="section section--title-left mt-136 mb-68">
          <div className="container">
            <div className="row">

              <div className="col-12 col-md-6 my-auto">
                <div className="marginHomeLeft mt-22 mb-22">
                  <h2 className="h2title ta-right">
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
              <div className="col-12 col-md-6 my-auto">
                <div className="ml-120 mt-22">
                  <ListWithIcon arr={arr1}/>
                </div>
              </div>

            </div>
          </div>
        </section>
        
        <section className="section section--title-right mt-136 mb-68">
          <div className="container">
            <div className="row mob-flex--column-revers">
              <div className="col-12 col-md-6 my-auto">
                <div className="mt-22 mb-22 mr-120">
                  <div className="count-block w-100 mb-40 mb-md-0">
                    <span className="count">1</span>
                    <div className="textFonts mb-20 mt-22">
                      <p className="textFonts">
                        {' '}
                        We typically start with an in-depth analysis of your market, product,
                        channels, and business model.
                      </p>
                    </div>
                  </div>
                  <div className="count-block w-100 mb-40 mb-md-0">
                    <span className="count">2</span>
                    <div className="text-large mb-20 mt-22">
                      <p className="textFonts"> Then we deploy a performance-based attribution and set up analytics.</p>
                    </div>
                  </div>
                  <div className="count-block w-100 mb-40 mb-md-0">
                    <span className="count">3</span>
                    <div className="text-large mb-20 mt-22">
                      <p className="textFonts">
                        {' '}
                        We will elaborate on each ad campaigns data-driven architecture and produce
                        only the best-suited creatives with the intel gathered.
                      </p>
                    </div>
                  </div>
                  <div className="count-block w-100 mb-40">
                    <span className="count">4</span>
                    <div className="text-large mt-22">
                      <p className="textFonts"> After the launch, we optimize ad campaigns on a daily and weekly basis.</p>
                    </div>
                  </div>
                  <p className="textFonts">
                    Here&apos;s how we lead your digital customer acquisition channel to a significant
                    increase in revenue.
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-6 my-auto">
                <div className="marginHomeRight">
                  <h2 className="h2title ta-left">
                    HOW
                    <br/>
                    IT
                    <br/>
                    WORKS
                  </h2>
                </div>
              </div>
              

            </div>
          </div>
        </section>
        
        <div className="pt-68 pb-68 lineHome">
          <div className="container ph-20">
            <div className="row">
              <div className="col-12 col-xl-8 m-auto">
                <p className="section__text1 ta-left ta-md-center">
                  In-depth analysis and a smart strategy are required to get high relevance for your
                  product, save acquisition costs and increase conversions.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pb-68 pt-68 my-auto mx-auto">
          <Steps stepsArr={stepsArr} center={'1'}/>
        </div>
        
        <section className="section section--title-left mt-68 mb-68">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6 my-auto">
                <div className="marginHomeLeft">
                  <h2 className="h2title ta-right mt-22 mb-22">
                    WHAT THE <br/> MARKETING <br/> FUNNEL OF A <br/> WEBSITE <br/> LOOKS LIKE
                  </h2>
                </div>
              </div>
              <div className="col-12 col-md-6 my-auto">
                <div className="p-0 ml-120 mt-22 mb-22">
                  <div className={styles.events}>
                    <Image width={374} height={570} src={'/img/events/web.svg'} alt="events"/>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
        
        <section className="section section--title-right mt-136 mb-68">
          <div className="container">
            <div className="row mob-flex--column-revers">
              <div className="col-12 col-md-6 my-auto">
                <div className="p-0 mt-22 mb-22 mr-120">
                  <div className={styles.events} style={{marginLeft: 'auto'}}>
                    <Image width={374} height={570} src={'/img/events/app.svg'} alt="events"/>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 my-auto">
                <div className="marginHomeRight">
                  <h2 className="h2title ta-left tt-upper mt-22 mb-22">
                    WHAT THE <br/> MARKETING <br/> funnel for a <br/> mobile app <br/> LOOKS LIKE
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <OurToolkit
            imagePosition={'left'}
            arr={ourToolkitArr}
            font={'2'}
        />
        
        <LetsTalk contentSide={'right'} font={'2'}/>
      </MainLayout>
  );
}
