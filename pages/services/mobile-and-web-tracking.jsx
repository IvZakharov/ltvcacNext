import Hero from '../../components/Hero/Hero';
import Ticker from '../../components/Ticker/Ticker';
import LetsTalk from '../../components/LetsTalk/LetsTalk';
import ListWithIcon from '../../components/ListWithIcon/ListWithIcon';
import {MainLayout} from '../../layouts/MainLayout';
import WhatWeWorked from '../../components/WhatWeWorked/WhatWeWorked';
import icon1 from '../../components/WhatWeWorked/img/1.png';
import icon2 from '../../components/WhatWeWorked/img/2.png';
import icon3 from '../../components/WhatWeWorked/img/3.svg';
import icon4 from '../../components/WhatWeWorked/img/4.png';
import icon5 from '../../components/WhatWeWorked/img/5.png';
import styles from '../../components/MustHaveEvents/MustHaveEvents.module.scss';
import Image from 'next/image';
import React from 'react';
import OurToolkit from '../../components/OurToolkit/OurToolkit';

export default function analytics() {
  const arr1 = [
    {
      title: 'No ad stats reporting',
      text: 'Can’t see the Customer Acquisition Cost. Playing Russian Roulette with the budget',
      iconCheck: false,
    },
    {
      title: 'No user/client traction across the  funnel and inside the product',
      text: 'Not possible to work with ‘visitor -> client’ conversion rate. Delivering features in a ‘leap of faith’ mode: never know HOW new release impacts product',
      iconCheck: false,
    },
    
    {
      title: 'No Ad ROI / Ad revenue stats for the Ad networks',
      text: 'Ad network can’t optimize itself. You get overpriced or low quality leads',
      iconCheck: false,
    },
    
    {
      title: 'No A/B testing tools on your app and/or website',
      text: 'Can’t test which feature/text/picture/option works best. Need to release an update for every test',
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
      text: 'Save ads budget, know Customer Acquisition Cost for each ad network/campaign/ad. Choose LTV-positive acquisition channels only. ',
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
      text: 'We conduct a free analysis of your product, prepare analytics system, channels and business model. Then we elaborate, pitch and harmonize our offer with a roadmap. As a result, we sign a contract and begin doing our work.',
      iconCheck: true,
    },
    {
      title: 'Writing technical tasks (4-10 days)',
      text: 'The data analyst and marketer writes the terms of reference for the developer and helps with the implementation process.',
      iconCheck: true,
    },
    
    {
      title: 'Settings in interfaces (1-4 days)',
      text: 'Settings in the interfaces of analytics systems and the creation of the account structure. Creation of regulations for maintaining UTM tags and other nuances of maintaining.',
      iconCheck: true,
    },
    
    {
      title: 'Testing (1-4 days)',
      text: ' We test tracking on different platforms to avoid possible breakdowns. After testing is passed, we conduct a demo of the work performed and transfer all the access.',
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
      svgIcon: icon1,
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
          title={'Mobile and Website data tracking | LTV:CAC'}
          description="Track the essential data for your business, get meaningful insights and learn your customers journey with data tracking.">
        <Hero
            title={'Mobile & Web Tracking'}
            subtitle={'Tracking system setup services for your project'}
            imageUrls={{desktop: '/img/hero/5.jpg', mobile: '/img/hero/5mob.jpg'}}
        />
        <Ticker/>
        
        <section className="section section--title-left mt-68 mb-136">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6 my-auto">
                <div className="marginHomeLeft">
                  <h2 className="h2title ta-right mt-22 mb-22">
                    TRACKING
                    <br/>
                    CLUSTER FOR
                    <br/>
                    BUSINESSES
                  </h2>
                </div>
              </div>
              <div className="col-12 col-md-6 my-auto">
                <div className="ml-120 w-70 mt-22 mb-22">
                  <h3 className="h3 mb-20">Why does your company need tracking?</h3>
                  <p className="textFonts mb-20">
                    Tracking report is your dashboard that shows where and how your business is
                    flying.
                  </p>
                  <p className="textFonts mb-20">
                    Imagine you just got a seat on a jet plane. It’s time to take off and the pilot
                    says:
                    <span className="d-block textFonts">
                    - Sorry, our GPS is broken so I’m going to navigate using stars.
                  </span>
                    <span className="d-block textFonts">- WHAT?</span>
                    <span className="d-block textFonts">
                    - Yeah, it’s okay. We might miss the right city but I’ll get us…somewhere.
                  </span>
                  </p>
                  <p className="textFonts">
                    The jet plane is your business. It can get you to the destination or it can crash.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>
        
        <WhatWeWorked itemsArr={whatWeWorkedArr} contentSide={'right'} font={'2'}/>
        
        <section className="section section--title-left mt-136 mb-68">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6 my-auto">
                <div className="marginHomeLeft">
                  <h2 className="h2title ta-right mt-22 mb-22">
                    MAIN QUESTIONS
                    <br/>
                    ANSWERED BY
                    <br/>
                    THE CORRECT
                    <br/>
                    ANALYTICS
                  </h2>
                </div>
              </div>
              <div className="col-12 col-md-6 my-auto">
                <div className="w-70 ml-120">
                  <div className="count-block w-100 mb-40 mb-md-0">
                    <span className="count">1</span>
                    <div className="text-large mb-20">
                      <h3 className="h3 mb-10 mt-22">Product / Service data:</h3>
                      <p className="mb-10 textFonts">
                        {' '}
                        What feature should we implement first to get more money/traction?
                      </p>
                      <p className="mb-10 textFonts"> How do we reduce user/client churn?</p>
                      <p className="textFonts"> What should we do to improve our service value?</p>
                    </div>
                  </div>
                  <div className="count-block w-100 mb-40 mb-md-0">
                    <span className="count">2</span>
                    <div className="text-large mb-40">
                      <h3 className="h3 mb-10 mt-22">Marketing/Sales data:</h3>
                      <p className="mb-10 textFonts">Which channel did this client come from?</p>
                      <p className="mb-10 textFonts"> How do we reduce user/client churn?</p>
                      <p className="textFonts">What should we do to improve our service value?</p>
                    </div>
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
                <div className="w-70 mr-120 mt-22 mb-22">
                  <ListWithIcon arr={arr1}/>
                </div>
              </div>
              <div className="col-12 col-md-6 my-auto">
                <div className="marginHomeRight">
                  <h2 className="h2title ta-left">
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
            </div>
          </div>
        </section>
        
        <section className="section section--title-left mt-136 mb-68">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6 my-auto">
                <div className="marginHomeLeft">
                  <h2 className="h2title ta-right">
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
              <div className="col-12 col-md-6 my-auto">
                <div className="w-70 ml-120 mt-22 mb-22">
                  <ListWithIcon arr={arr2}/>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="section section--title-right mt-136 mb-68">
          <div className="container">
            <div className="row mob-flex--column-revers">
              <div className="col-12 col-md-6 my-auto">
                <div className="mr-120 mt-22 mb-22">
                  <div className={styles.events} style={{marginLeft: 'auto'}}>
                    <Image width={374} height={570} src={'/img/events/web.svg'} alt="events"/>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 my-auto">
                <div className="marginHomeRight">
                  <h2 className="h2title ta-left mt-22 mb-22">
                    WHAT THE WEBSITE <br/> TRACKING FUNNEL <br/> LOOKS LIKE
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="section section--title-left mt-136 mb-68">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6 my-auto">
                <div className="marginHomeLeft">
                  <h2 className="h2title ta-right mt-22 mb-22">
                    WHAT THE MOBILE APP <br/> TRACKING FUNNEL <br/> LOOKS LIKE
                  </h2>
                </div>
              </div>
              <div className="col-12 col-md-6 my-auto">
                <div className="mt-22 mb-22 ml-120">
                  <div className={styles.events}>
                    <Image width={374} height={570} src={'/img/events/app.svg'} alt="events"/>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
        <section className="section section--title-right mt-136 mb-136">
          <div className="container">
            <div className="row mob-flex--column-revers">
              <div className="col-12 col-md-6 my-auto">
                <div className="w-70 mr-120 mt-22 mb-22">
                  <ListWithIcon arr={arr3}/>
                </div>
              </div>
              <div className="col-12 col-md-6 my-auto">
                <div className="marginHomeRight">
                  <h2 className="h2title ta-left mt-22 mb-22">
                    HOW WE
                    <br/>
                    MAKE YOUR
                    <br/>
                    TRACKING
                    <br/>
                    EFFECTIVE
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
