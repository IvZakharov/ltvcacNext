import Hero from '../../components/Hero/Hero';
import Ticker from '../../components/Ticker/Ticker';
import LetsTalk from '../../components/LetsTalk/LetsTalk';
import ListWithIcon from '../../components/ListWithIcon/ListWithIcon';
import {MainLayout} from '../../layouts/MainLayout';
import WhatWeWorked from "../../components/WhatWeWorked/WhatWeWorked";
import icon1 from "../../components/WhatWeWorked/img/1.svg";
import icon2 from "../../components/WhatWeWorked/img/2.svg";
import icon3 from "../../components/WhatWeWorked/img/3.svg";
import icon4 from "../../components/WhatWeWorked/img/4.svg";
import icon5 from "../../components/WhatWeWorked/img/5.svg";
import styles from "../../components/MustHaveEvents/MustHaveEvents.module.scss";
import Image from "next/image";
import React from "react";
import OurToolkit from "../../components/OurToolkit/OurToolkit";

export default function analytics() {
  const arr1 = [
    {
      title: 'No ad stats reporting',
      text: 'Can’t see the Customer Acquisition Cost. Playing Russian Roulette with the budget',
      iconCheck: false,
    },
    {
      title: 'No user/client traction across the  funnel and inside the product',
      text: 'Not possible to work with ‘visitor -> client’ conversion rate. Delivering features in a ‘leap of faith’ mode: never know HOW new release impacts product',
      iconCheck: false,
    },
    
    {
      title: 'No Ad ROI / Ad revenue stats for the Ad networks',
      text: 'Ad network can’t optimize itself. You get overpriced / low quality leads',
      iconCheck: false,
    },
    
    {
      title: 'No A/B testing tools on your app and/or website',
      text: 'Can’t test which feature/text/picture/option works best. Need release update for every test',
      iconCheck: false,
    },
    {
      title: 'No retain/churn stats reporting',
      text: 'Product/business decision making is slow and uncertain',
      iconCheck: false,
    },
  ];
  
  const arr2 = [
    {
      title: 'Save more time',
      text: 'Save ~20% of time for marketing, product and sales teams. No need to collect all data for a period. Everything your business needs to know is already on the table. Plus if you need to conduct A/B testing (and you do) - you save 1-4 weeks on each test.',
      iconCheck: true,
    },
    {
      title: 'Save ads budget',
      text: 'Save Ads budget Know Customer Acquisition Cost for each ad network/campaign/ad. Choose LTV-positive acquisition channels only.Save Ads budget Know Customer Acquisition Cost for each ad network/campaign/ad. Choose LTV-positive acquisition channels only.',
      iconCheck: true,
    },
    
    {
      title: 'Ad campaigns are automatically optimized for your business  objectives',
      text: 'Ad campaigns are automatically optimized for your business objectives All modern Ad networks like Facebook/Instagram/Google are designed to be self-optimized using automated customer analytics data. Ad networks are learning what kind of customers you need to attract.',
      iconCheck: true,
    },
    
    {
      title: 'Precise audiences',
      text: 'Get audience insights every day. Use automatically generated similar audiences (Look-a-like) based on your best customers that came before.',
      iconCheck: true,
    },
    {
      title: 'Strategic planning',
      text: 'Marketing, Sales, Production - teams now can make decisions based on analytics reports rather than using personal hyphotesis/experience.',
      iconCheck: true,
    },
  ];
  
  const arr3 = [
    {
      title: 'Analysis (1-4 days)',
      text: 'We conduct a free analysis of your product, ready analytics system,channels, and business model. Then we elaborate, pitch, and harmonize our offer with a roadmap. As a result, we sign a contract and begin doing our work.',
      iconCheck: true,
    },
    {
      title: 'Writing technical tasks (4-10 days)',
      text: 'The data analyst and marketer writes the terms of reference for the developer and helps with the implementation process.',
      iconCheck: true,
    },
    
    {
      title: 'Settings in interfaces (1-4 days)',
      text: 'Settings in the interfaces of analytics systems and the creation of the account structure. Creation of regulations for maintaining utm tags and other nuances of maintaining.',
      iconCheck: true,
    },
    
    {
      title: 'Testing (1-4 days)',
      text: 'We test tracking on different platforms to avoid possible breakdowns. After testing is passed, we conduct a demo of the work performed and transfer all access.',
      iconCheck: true,
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
  
  const ourToolkitArr = [
    {
      title: 'Mobile analytics systems',
      text: 'Adjust, Appsflyer, Firebase, Facebook ADS SDK',
    },
    {
      title: 'Web analytics systems',
      text: 'Google Analytics , Facebook Pixel,  Google Analytics eCommerce, Facebook Pixel Api',
    },
  
  ];
  
  const ourToolkitArr2 = [
    {
      title: 'A/B testing tools',
      text: 'Google Optimize, Adapty, SplitMetrics',
    },
    {
      title: 'Data visualization systems',
      text: 'Google Data Studio, Mixpanel, Mixpanel, Custom PHP',
    },
  ];
  
  return (
      <MainLayout
          title={'Site and app Tracking system setup services - LTV:CAC agency'}
          description="We can build system compile marketing data and sales get exact selling costs to sales ratio, while monitoring ad channels and events inside sales funnel">
        <Hero
            title={'Mobile & Web Tracking'}
            subtitle={'Tracking system setup services for your project'}
            imageUrls={{desktop: '/img/hero/5.jpg', mobile: '/img/hero/5mob.jpg'}}
        />
        <Ticker/>
        
        <section className="section section--title-left-img3">
          <div className="container p-0">
            <div className="row">
              <div className="col-12 col-md-6 mb-40 mb-xl-0">
                <div className="section__title-box section__title-box--img11 pt-160 pb-160 pt-md-120 p-25">
                  <h2 className="section__title  section__title--small section__title-img3 ta-left">
                    TRACKING
                    <br/>
                    CLUSTER FOR
                    <br/>
                    BUSINESSES
                  </h2>
                </div>
              </div>
              <div
                  className="col-12 col-md-6 col-xl-4 offset-xl-1 d-md-flex d-xl-block pt-md-50 pb-md-20 pt-xl-100 pb-xl-100">
                <div className="ph-20">
                  <h3 className="h3 mb-20">Why does your company need tracking?</h3>
                  <p className="text text-grey mb-20 fs-20">
                    Tracking report is your dashboard that shows where and how your business is flying.
                  
                  </p>
                  <p className="text text-grey mb-20 fs-20">
                    Imagine you just got a seat on a jet plane. It’s time to take off and the pilot says:
                    <span className='d-block'>- Sorry, our GPS is broken so I’m going to navigate using stars.</span>
                    <span className='d-block'>- WHAT?</span>
                    <span
                        className='d-block'>- Yeah, it’s okay. We might miss the right city but I’ll get us…somewhere.</span>
                  </p>
                  <p className="text text-grey mb-40 fs-20">
                    The jet plane is your business. It can get you to the destination or it can crash.
                  </p>
                
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="section section--title-right-img3 mb-40 mb-md-0">
          <div className="container p-0">
            <div className="row">
              <div className="col-12 col-md-6 mb-40 mb-md-0 order-md-1 d-flex offset-xl-1 aligin-center">
                <div className="section__title-box section__title-box--img3 p-20 pt-80 pb-80 pt-md-100">
                  <h2 className="section__title ta-left section__title--large">
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
                  <p className="text text-grey mb-20 fs-20">
                    Data analytics is a control panel of your business. It is the only reliable source
                    to make marketing and product solutions.
                  
                  </p>
                  <p className="text text-grey mb-20 fs-20">
                    Customer acquisition works properly if budget is optimized like this: it is based on
                    expenses/revenue, ad interactions, and how customers interact with your mobile app and/or website.
                  
                  </p>
                  <p className="text text-grey mb-20 fs-20">
                    We can build system compile marketing data and sales get exact selling costs to sales ratio, while
                    monitoring ad channels and events inside sales funnel!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <WhatWeWorked itemsArr={whatWeWorkedArr}/>
        
        <section className="section section--title-right-img8 mb-40 mb-md-0">
          <div className="container p-0">
            <div className="row">
              <div className="col-12 col-md-6 col-xl-5 mb-40 mb-md-0 pb-xl-50 order-md-1 offset-xl-2">
                <div className="section__title-box section__title-box--img8 p-20 pt-120 pb-120">
                  <h2 className="section__title section__title--small ta-left tt-upper ">
                    Main benefits
                    <br/>
                    of your
                    <br/>
                    correct
                    <br/>
                    analitics
                  </h2>
                </div>
              </div>
              
              <div className="col-12 col-md-6 col-xl-4 offset-xl-1 pt-md-50 pb-md-50">
                <div className="ph-20">
                  <div className="count-block w-100 mb-40 mb-md-0">
                    <span className="count">1</span>
                    <div className="text-large mb-20">
                      <h3 className='h3 mb-10'>Product / Service data:</h3>
                      <p className='mb-10'> What feature should we implement first to get more money/traction?
                      </p>
                      <p className='mb-10'> How do we reduce user/client churn?
                      </p>
                      <p> What should we do to improve our service value?
                      </p>
                    </div>
                  </div>
                  <div className="count-block w-100 mb-40 mb-md-0">
                    <span className="count">2</span>
                    <div className="text-large mb-40">
                      <h3 className='h3 mb-10'>Marketing/Sales data:</h3>
                      <p className='mb-10'>Which channel did this client come from?
                      </p>
                      <p className='mb-10'> How do we reduce user/client churn?
                      </p>
                      <p>What should we do to improve our service value?
                      </p>
                    </div>
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
                <div className="section__title-box p-20 pt-120 pb-120">
                  <h2 className="section__title section__title--small ta-left ta-md-right">
                    YOUR
                    <br/>
                    BUSINESS
                    <br/>
                    WITH NO
                    <br/>
                    TRACKING
                  </h2>
                </div>
              </div>
              
              <div className="col-12 col-md-6 col-xl-4 offset-xl-2 pt-md-50 pb-md-50 pt-xl-100 pb-xl-100">
                <div className="ph-20">
                  <ListWithIcon arr={arr1}/>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="section section--title-right-img10 mb-60 mb-md-0">
          <div className="container p-0">
            <div className="row">
              <div className="col-12 col-md-6 col-xl-5 mb-60 offset-xl-2 order-md-1 mb-md-0 pb-xl-50 ">
                <div className="section__title-box section__title-box--img10 p-20 pt-120 pb-120">
                  <h2 className="section__title section__title--small ta-left ">
                    YOUR
                    <br/>
                    BUSINESS
                    <br/>
                    WITH
                    <br/>
                    TRACKING
                  </h2>
                </div>
              </div>
              
              <div className="col-12 col-md-6 col-xl-4 offset-xl-1 pt-md-50 pb-md-50 pt-xl-100 pb-xl-100">
                <div className="ph-20">
                  <ListWithIcon arr={arr2}/>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="section section--title-left mb-60 mb-md-0">
          <div className="container p-0">
            <div className="row">
              <div className="col-12 col-md-6 col-xl-5  mb-60 mb-md-0 pb-xl-50 ">
                <div className="section__title-box pl-md-20 p-20 pt-120 pb-120">
                  <h2 className="section__title section__title--small tt-upper ta-left ta-md-right">
                    HOW TO LOOK <br/> WEBSITE <br/> TRACKING <br/> FUNNEL?
                  </h2>
                </div>
              </div>
              
              <div className="col-12 col-md-6 col-xl-4 offset-xl-2 pt-md-50 pb-md-50 pt-xl-100 pb-xl-100">
                <div className="ph-20">
                  <div className={styles.events}>
                    <Image width={374} height={570} src={'/img/events/web.svg'} alt="events"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="section section--title-right mb-60 mb-md-0">
          <div className="container p-0">
            <div className="row">
              <div className="col-12 col-md-6 col-xl-5 order-md-1 offset-xl-2 mb-60 mb-md-0 pb-xl-50 ">
                <div className="section__title-box pl-md-20 p-20 pt-120 pb-120">
                  <h2 className="section__title section__title--small tt-upper ">
                    HOW TO LOOK <br/> MOBILE APP <br/> TRACKING <br/> FUNNEL?
                  </h2>
                </div>
              </div>
              
              <div className="col-12 col-md-6 col-xl-4 offset-xl-1 pt-md-50 pb-md-50 pt-xl-100 pb-xl-100">
                <div className="ph-20">
                  <div className={styles.events}>
                    <Image width={374} height={570} src={'/img/events/app.svg'} alt="events"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section section--title-left-img8 mb-60 mb-md-0">
          <div className="container p-0">
            <div className="row">
              <div className="col-12 col-md-6 col-xl-5  mb-60 mb-md-0 pb-xl-50 ">
                <div className="section__title-box section__title-box--img8 pl-md-20 p-20 pt-120 pb-120">
                  <h2 className="section__title section__title--small ta-left ta-md-right">
                    HOW WE
                    <br/>
                    MAKE YOUR
                    <br/>
                    TRACKING
                    <br/>
                    EFFECTIVE?
                  </h2>
                </div>
              </div>
              
              <div className="col-12 col-md-6 col-xl-4 offset-xl-2  pt-md-50 pb-md-50 pt-xl-100 pb-xl-100">
                <div className="ph-20">
                  <ListWithIcon arr={arr3}/>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <OurToolkit imagePosition={'right'} itemsFirstColumn={ourToolkitArr} itemsSecondColumns={ourToolkitArr2}/>
        
        <LetsTalk contentSide={'left'}/>
      </MainLayout>
  );
}
