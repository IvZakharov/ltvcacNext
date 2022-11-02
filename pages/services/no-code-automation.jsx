import Hero from '../../components/Hero/Hero';
import Ticker from '../../components/Ticker/Ticker';
import LetsTalk from '../../components/LetsTalk/LetsTalk';
import ListWithIcon from '../../components/ListWithIcon/ListWithIcon';
import MustHaveEvents from '../../components/MustHaveEvents/MustHaveEvents';
import {MainLayout} from '../../layouts/MainLayout';
import OurToolkit from '../../components/OurToolkit/OurToolkit';
import React from 'react';
import Steps from '../../components/Steps/Steps';

export default function analytics() {
  const arr1 = [
    {
      title: 'Higher personnel costs',
      text: 'Staff always costs more than a set up of an automated process. Searching, selecting and interviewing an employee costs $xxx, whereas managing automated process is only paid to one specialist.',
      iconCheck: false,
    },
    {
      title: 'Tasks are performed slower than desired',
      text: 'The speed of performing an automated process outweighs the same process done by human. Performing any automated process doesn’t usually take more than 30 seconds. ',
      iconCheck: false,
    },
    
    {
      title: 'Human factor is terrible and unpredictable',
      text: 'You don’t often get to track the source and consequences of mistakes made due to human factor.',
      iconCheck: false,
    },
  ];
  
  const arr2 = [
    {
      title: 'Lower personnel costs',
      text: 'Decrease general project expenses as automation always costs lower. It is also cheaper than hiring, motivating, training and supervising a worker. ',
      iconCheck: true,
    },
    {
      title: 'Tasks done in shortest terms possible',
      text: 'Any automated process will get a task done much faster than human. You get the same result in less time.',
      iconCheck: true,
    },
    
    {
      title: 'Automation implies logging of all actions performed',
      text: 'You have an opportunity to see the result of every step of the automated process which helps in business process analytics and in identifying source and reason for any occuring errors. ',
      iconCheck: true,
    },
  ];
  
  const arr3 = [
    {
      title: 'Analysis (1-4 days)',
      text: 'We conduct a free analysis of your product,ready analytics system,channels, and business model. Then we elaborate, pitch, and harmonize our offer with a roadmap. As a result, we sign a contract and begin doing our work.',
      iconCheck: true,
    },
    {
      title: 'Writing technical tasks (4-10 days)',
      text: 'The data analyst and marketer write the terms of reference for the developer and help with the implementation process.',
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
  
  const ourToolkitArr = [
    {
      title: 'No-Code Automation SaaS',
      text: 'Make (ex-Integromat), Zapier',
    },
    {
      title: 'Landing pages and forms',
      text: 'Typeform, Tally, Tilda, Squarespace, Webflow',
    },
    {
      title: 'Project Management',
      text: 'Trello, Monday, Jira, Miro',
    },
    {
      title: 'Email marketing',
      text: 'MailChimp, SendPulse, SendGrid',
    },
    {
      title: 'Customer Relationship Management (CRM)',
      text: 'HubSpot, RetailCRM, Bitrix24',
    },
    {
      title: 'Payment Systems',
      text: 'Stripe, Yandex Pay, YooMoney',
    },
    {
      title: 'Chat-bot systems',
      text: 'TelergamBot, WhatsApp Bot, Facebook Messenger chat-bot',
    },
  ];
  
  
  const stepsArr = [
    {
      title: 'Introduction',
      days: '1-2 day(s)',
    },
    {
      title: 'Audit',
      days: '1-3 day(s)',
    },
    {
      title: 'Offered solution discussion',
      days: '1-2 day(s)',
    },
    {
      title: 'Solution implementation',
      days: '2-10 days',
    },
    {
      title: 'Testing and fixing the bugs',
      days: '1-2 day(s)',
    },
    {
      title: 'Delivery and presentation',
      days: '1-2 days',
    },
  ];
  
  return (
      <MainLayout
          title={'No-code automation of your routine business processes | LTV:CAC'}
          description="Automate your business processes performance, save time and money, free up human resources of your company and let automation do all the boring work for you.">
        <Hero
            title={'No-Code Automation'}
            subtitle={'Automation of routine manual processes'}
            imageUrls={{desktop: '/img/hero/11.jpg', mobile: '/img/hero/11mob.jpg'}}
        />
        <Ticker/>
        
        <section className="section section--title-left-img7">
          <div className="container p-0">
            <div className="row">
              <div className="col-12 col-md-6 mb-40 mb-xl-0">
                <div className="section__title-box section__title-box--img7 pt-80 pb-80 pt-md-120 pb-160 p-25">
                  <h2 className="section__title section__title--small ta-left">
                    WHY YOU NEED
                    <br/>
                    BUSINESS
                    <br/>
                    PROCESS
                    <br/>
                    AUTOMATION
                  </h2>
                </div>
              </div>
              <div
                  className="col-12 col-md-6 col-xl-4 offset-xl-1 d-md-flex d-xl-block pt-md-50 pb-md-20 pt-xl-100 pb-xl-100">
                <div className="ph-20">
                  <p className="text mb-20">
                    Airplane autopilot is quite a familiar thing these days but it didn&apos;t exist
                    once.
                  </p>
                  <p className="text mb-20">
                    Nonetheless people successfully crossed oceans and flew around the globe without
                    it.
                  </p>
                  <p className="text mb-20">
                    Over time, the autopilot system was invented, which greatly facilitated the life
                    of line pilots and reduced airline fuel costs.
                  </p>
                  <p className="text mb-20">
                    The autopilot is much more fuel efficient and relieves the pilot of a huge burden,
                    thereby increasing safety and range.
                  </p>
                  <p className="text mb-20">Automation is your autopilot system.</p>
                  <p className="text mb-20">
                    It allows you to have your business processes run automatically just like an
                    autopiloted plane.
                  </p>
                  <p className="text mb-20">
                    So instead of sending each and every customer a separate email about current
                    promotions/supplies of a new type of bread - you can press a couple of buttons to
                    send it all at once.
                  </p>
                  <p className="text mb-40">
                    You save time, and as a result, money - the main goal of automating any process.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="section section--title-right-img3 mb-40 mb-md-0">
          <div className="container p-0">
            <div className="row">
              <div className="col-12 col-md-6 mb-60 mb-md-0 order-md-1 d-flex offset-xl-1 aligin-center">
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
                  <p className="text mb-20">
                    Automation is basically a set up of automated performance of certain actions
                    within a developed scenario that can streamline a business for simplicity, achieve
                    digital transformation, increase service quality, improve service delivery or
                    contain costs.
                  </p>
                  <p className="text mb-20">
                    Let&apos;s say you want to send emails to your customers, instead of hiring a
                    manager who sends those emails manually we can set up a system that sends emails
                    itself when your customers perform certain actions.
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
                  During the past decade we have worked on more than 50 projects in industries like
                  SaaS, Ecommerce, Online Gaming etc.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <section className="section section--title-left-img8 mb-40 mb-md-0">
          <div className="container p-0">
            <div className="row">
              <div className="col-12 col-md-6 col-xl-5 mb-40 mb-md-0 pb-xl-50 ">
                <div className="section__title-box section__title-box--img8 pl-70 p-20 pt-120 pb-120">
                  <h2 className="section__title section__title--small ta-left ta-md-right">
                    WHAT CAN
                    <br/>
                    AUTOMATION
                    <br/>
                    HELP YOU WITH?
                  </h2>
                </div>
              </div>
              
              <div className="col-12 col-md-6 col-xl-4 offset-xl-2 pt-md-50 pb-md-50">
                <div className="ph-20">
                  <div className="count-block w-100 mb-40 mb-md-0">
                    <span className="count">1</span>
                    <div className="text-large mb-40">
                      <h3 className="h3 mb-10">You save money</h3>
                      <p>
                        {' '}
                        Any no/low-code automation has a lower cost than hiring a programmer to solve
                        the same problem or hiring a person to do the work
                      </p>
                    </div>
                  </div>
                  <div className="count-block w-100 mb-40 mb-md-0">
                    <span className="count">2</span>
                    <div className="text-large mb-40">
                      <h3 className="h3 mb-10">You save time</h3>
                      <p>
                        {' '}
                        Setting up an automated process takes less time than hiring a person.
                        Performing the automated process is always faster than that person doing the
                        job manually
                      </p>
                    </div>
                  </div>
                  <div className="count-block w-100 mb-40 mb-md-0">
                    <span className="count">3</span>
                    <div className="text-large mb-40">
                      <h3 className="h3 mb-10">You get healthier nervous system</h3>
                      <p>
                        {' '}
                        Automated system doesn&apos;t have days off, it doesn&apos;t fall sick and it
                        certainly doesn&apos;t need medical insurance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="section section--title-right mb-60 mb-md-0">
          <div className="container p-0">
            <div className="row">
              <div className="col-12 col-md-6 col-xl-5 offset-xl-2 order-md-1 mb-60 mb-md-0 pb-xl-50 ">
                <div className="section__title-box  pl-70 pl-md-20 p-20 pt-120 pb-120">
                  <h2 className="section__title section__title--small ta-left">
                    YOUR
                    <br/>
                    BUSINESS
                    <br/>
                    WITH NO
                    <br/>
                    AUTOMATION
                  </h2>
                </div>
              </div>
              
              <div className="col-12 col-md-6 col-xl-4 offset-xl-1 pt-md-50 pb-md-50 pt-xl-100 pb-xl-100">
                <div className="ph-20">
                  <ListWithIcon arr={arr1}/>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="section section--title-left-img7 mb-60 mb-md-0">
          <div className="container p-0">
            <div className="row">
              <div className="col-12 col-md-6 col-xl-5 mb-60 mb-md-0 pb-xl-50 ">
                <div className="section__title-box section__title-box--img7 pl-70 p-20 pt-120 pb-120">
                  <h2 className="section__title section__title--small ta-left ta-md-right">
                    YOUR
                    <br/>
                    BUSINESS
                    <br/>
                    WITH
                    <br/>
                    AUTOMATION
                  </h2>
                </div>
              </div>
              
              <div className="col-12 col-md-6 col-xl-4 offset-xl-2 pt-md-50 pb-md-50 pt-xl-100 pb-xl-100">
                <div className="ph-20">
                  <ListWithIcon arr={arr2}/>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="section section--title-right-img9 mb-60 mb-md-0">
          <div className="container p-0">
            <div className="row">
              <div className="col-12 col-md-6 col-xl-5 offset-xl-1 mb-60 mb-md-0 pb-xl-50 order-md-1">
                <div className="section__title-box section__title-box--img9  p-20 pt-120 pb-120">
                  <h2 className="section__title section__title--small ta-left">
                    HOW WE
                    <br/>
                    AUTOMATE
                    <br/>
                    YOUR
                    <br/>
                    ROUTINE
                  </h2>
                </div>
              </div>
              
              <div className="col-12 col-md-6 col-xl-6 pt-md-50 pb-md-50 pt-xl-100 pb-xl-100">
                <Steps stepsArr={stepsArr}/>
              </div>
            </div>
          </div>
        </section>
        
        <OurToolkit
            arr={ourToolkitArr}
            
            imagePosition={'left'}
        />
        
        <LetsTalk contentSide={'right'}/>
      </MainLayout>
  );
}
