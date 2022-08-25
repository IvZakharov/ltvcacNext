import React from 'react';

import Hero from '../../components/Hero/Hero';
import Ticker from '../../components/Ticker/Ticker';
import LetsTalk from '../../components/LetsTalk/LetsTalk';
import Link from 'next/link';
import {MainLayout} from '../../layouts/MainLayout';

export default function services() {
  return (
      <MainLayout
          title="Professional Digital Marketing Services  - LTV:CAC agency"
          description="We know how to combine digital channels and data-driven practices to achieve maximum ROI for your product, click and read our case studies on our website.">
        <Hero
            title={'Services'}
            subtitle={'Typical services aside, we have an individual approach and сan solve the problems of both startups and corporations. Request your individual proposal'}
            imageUrls={{desktop: '/img/hero/2.jpg', mobile: '/img/hero/2mob.jpg'}}
        />
        <Ticker/>
        <section className="section section--title-left-img4">
          <div className="container p-0">
            <div className="row">
              <div className="col-12 col-md-6 mb-xl-0">
                <div className="section__title-box section__title-box--img4 pt-160 pb-160 pt-md-120 p-25">
                  <h2 className="section__title section__title--small ta-center tt-upper">
                    Paid Marketing
                    <br/>
                    Channels
                  </h2>
                </div>
              </div>
              <div
                  className="col-12 col-md-6 col-xl-4 offset-xl-1 pt-60 pb-60 d-md-flex d-xl-block pt-xl-120 pb-xl-120">
                <div className="ph-20">
                  <h3 className="h3 mb-20 ta-center">Data-driven digital marketing for your customer’s base growing
                  </h3>
                  <p className="text-large mb-20">
                    Despite the COVID‑19 pandemic, all digital ad channels demonstrate strong growth in the world market
                    this year.
                  </p>
                  <ul className="text-large mb-20">
                    <li>Google Ads +29%</li>
                    <li>Apple Search Ads +87%</li>
                    <li>Instagram-Facebook +23%</li>
                    <li>Pinterest +35%</li>
                    <li>Twitter +34%</li>
                    <li>Amazon+40%</li>
                    <li>LinkedIn +25%</li>
                    <li>YouTube +33%</li>
                    <li>Snapchat +8%</li>
                  </ul>
                  <Link href="/services/paid-marketing-channels">
                    <a className="button button--secondary d-block">FIND OUT MORE</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section section--title-right-img5">
          <div className="container p-0">
            <div className="row">
              <div className="col-12 col-md-6 order-md-1 mb-xl-0 offset-xl-1">
                <div className="section__title-box section__title-box--img5 pt-160 pb-160 pt-md-120 p-25">
                  <h2 className="section__title section__title--small ta-center">
                    MOBILE &
                    <br/>
                    WEBSITE
                    <br/>
                    TRACKING
                  </h2>
                </div>
              </div>
              <div
                  className="col-12 col-md-6 col-xl-4 offset-xl-1 pt-60 pb-60 order-md-0 d-md-flex d-xl-block  pt-xl-120 pb-xl-120">
                <div className="ph-20">
                  <h3 className="h3 mb-20 ta-center">Why does your company need tracking?</h3>
                  <p className="text-large mb-20">
                    Tracking report is your dashboard that shows where and how your business is flying.
                  </p>
                  <p className="text-large mb-20">
                    <span className='d-block'>Imagine you just got a seat on a jet plane. I&apos;s time to take off and the pilot says:</span>
                    <span className='d-block'>- Sorry, our GPS is broken so I’m going to navigate using stars.</span>
                    <span className='d-block'>- WHAT?</span>
                    <span
                        className='d-block'>- Yeah, it’s okay. We might miss the right city but I’ll get us…somewhere.</span>
                  
                  </p>
                  <p className="text-large mb-20">
                    The jet plane is your business. It can get you to the destination or it can crash.
                  </p>
                  
                  <Link href="/services/mobile-and-web-tracking">
                    <a className="button button--secondary d-block">FIND OUT MORE</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="section section--title-left-img12">
          <div className="container p-0">
            <div className="row">
              <div className="col-12 col-md-6 mb-xl-0">
                <div className="section__title-box section__title-box--img12 pt-160 pb-160 pt-md-120 p-25">
                  <h2 className="section__title section__title--small ta-center">
                    NO-CODE
                    <br/>
                    AUTOMATION
                  </h2>
                </div>
              </div>
              <div
                  className="col-12 col-md-6 col-xl-4 offset-xl-1 pt-60 pb-60 d-md-flex d-xl-block pt-xl-120 pb-xl-120">
                <div className="ph-20">
                  <h3 className="h3 mb-20 ta-center">Why does your company need automation?</h3>
                  <p className="text-large mb-20">
                    Airplane autopilot quite a familiar thing these days but it didn&apos;t exist once.
                  </p>
                  <p className="text-large mb-20">
                    Nonetheless people successfully crossed oceans and flew around the globe without it.
                  </p>
                  <p className="text-large mb-20">
                    Over time, the autopilot system was invented, which greatly facilitated the life of line pilots and
                    reduced airline fuel costs.
                  </p>
                  <p className="text-large mb-20">
                    The autopilot is much more fuel efficient and relieves the pilot of a huge burden, thereby
                    increasing safety and range.
                  </p>
                  <p className="text-large mb-20">
                    Automation is your autopilot system.
                  </p>
                  <Link href="/services/no-code-automation">
                    <a className="button button--secondary d-block">FIND OUT MORE</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="section section--title-right-img6">
          <div className="container p-0">
            <div className="row">
              <div className="col-12 col-md-6 order-md-1 mb-xl-0 offset-xl-1">
                <div className="section__title-box section__title-box--img6 pt-160 pb-160 pt-md-120 p-25">
                  <h2 className="section__title section__title--small ta-center">
                    CUSTOMER
                    <br/>
                    RESEARCH
                  </h2>
                </div>
              </div>
              <div
                  className="col-12 col-md-6 col-xl-4 offset-xl-1 pt-60 pb-60 order-md-0 d-md-flex d-xl-block  pt-xl-120 pb-xl-120">
                <div className="ph-20">
                  <h3 className="h3 mb-20 ta-center">Why does your company need customer research?</h3>
                  <p className="text-large mb-20">
                    Misidentifying your customers’ pains or their priorities to perform JBTD results in your team
                    working for weeks/months on problems that your customers aren’t willing to pay for, which is $xxx.xx
                    spent in vain.
                  </p>
                  <Link href="/services/customer-research">
                    <a className="button button--secondary d-block ">FIND OUT MORE</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <LetsTalk contentSide={'left'}/>
      </MainLayout>
  );
}
