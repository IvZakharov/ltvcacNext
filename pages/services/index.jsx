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
            subtitle={
              'Typical services aside, we have an individual approach and сan solve the problems of both startups and corporations. Request your individual proposal'
            }
            imageUrls={{desktop: '/img/hero/2.jpg', mobile: '/img/hero/2mob.jpg'}}
        />
        <Ticker/>
        <section className="section section--title-left-img4 mt-68 mb-68">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6 my-auto">
                <div className="marginHomeLeft ta-right">
                  <h2 className="h2title tt-upper">
                    Paid Marketing
                    <br/>
                    Channels
                  </h2>
                </div>
              </div>
              <div className="col-12 col-md-6 col-xl-6">
                <div className="ml-120 mt-22 mb-22 w-60">
                  <h3 className="h3 mb-20">
                    Data-driven digital marketing for your customer’s base growing
                  </h3>
                  <p className="textFonts mb-20">
                    As the name suggests, marketing channels that you pay to use for your advertising purposes are called paid marketing channels. Paid ads in Google, social networks like Facebook and Instagram are some of the examples of marketing channels.
                  </p>
                  <p className="textFonts mb-20">
                    Paid marketing channels are used for almost any purpose, but the main one is to increase revenue through the advertising budget spent on promoting a product/service or building a brand identity.
                  </p>
                  <Link href="/services/paid-marketing-channels">
                    <a className="button button--secondary d-block">FIND OUT MORE</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section section--title-right-img5 mt-136 mb-68">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6 order-md-1 my-auto">
                <div className="marginHomeRight ta-center">
                  <h2 className="h2title tt-upper ta-left">
                    MOBILE &
                    <br/>
                    WEBSITE
                    <br/>
                    TRACKING
                  </h2>
                </div>
              </div>
              <div className="col-12 col-md-6 ">
                <div className="mt-22 mb-22 mr-120 w-60" style={{marginLeft: "auto"}}>
                  <h3 className="h3 mb-20 ta-left">Why does your company need tracking?</h3>
                  <p className="textFonts mb-20">
                    Website tracking is the process of gathering and analyzing data about what people do while they are on your website. It is an extremely important tool that allows you to determine how many users visit your website, where they come from, what pages they go to and how long they stay. Having this kind of information on your hands lets you identify your strengths, weaknesses and points that need improvement.
                  </p>
                  <p className="textFonts mb-20">
                    Mobile tracking follows the same principles but tracks users that come to your website using their mobile phones. Taking into account the fact that almost all the users on the internet use their phones to find information, it is essential to have mobile tracking to analyze their behavior on your website and make data-driven decisions.
                  </p>
                  <Link href="/services/mobile-and-web-tracking">
                    <a className="button button--secondary d-block">FIND OUT MORE</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="section section--title-left-img12 mt-136 mb-68">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6 my-auto">
                <div className="marginHomeLeft ta-right">
                  <h2 className="h2title tt-upper">
                    NO-CODE
                    <br/>
                    AUTOMATION
                  </h2>
                </div>
              </div>
              <div className="col-12 col-md-6 ">
                <div className="mb-22 mt-22 ml-120 w-60">
                  <h3 className="h3 mb-20 ta-left">Why does your company need automation?</h3>
                  <p className="textFonts mb-20">
                    Automation implies using advanced software to ensure that repetitive tasks of your business are
                    completed with no human involvement, which in turn allows you to prioritize key tasks over dull,
                    repetitive, and oftentimes annoying ones. And since it’s a no-code automation it doesn’t require a
                    coder to make it work.
                  </p>
                  <p className="textFonts mb-20">
                    Generally speaking, jobs that are high volume, recurrent, time-sensitive, involve several people,
                    require compliance, and require audit trails are strongly recommended to get automation.
                  </p>
                  <Link href="/services/no-code-automation">
                    <a className="button button--secondary d-block">FIND OUT MORE</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="section section--title-right-img6 mt-136 mb-68">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6 order-md-1 my-auto">
                <div className="marginHomeRight">
                  <h2 className="h2title tt-upper">
                    Web
                    <br/>
                    development
                  </h2>
                </div>
              </div>
              <div className="col-12 col-md-6 ">
                <div className="mt-22 mb-22 mr-120 w-60"  style={{marginLeft: "auto"}}>
                  <h3 className="h3 mb-20 ta-left">
                    Web Development
                  </h3>
                  <p className="textFonts mb-20">
                    Web Development is a general term that describes creating, building and maintaining websites and
                    web applications. Among all the other tasks, web development includes designing a website,
                    developing contents of it, scripting client-side and server-side work and configuring network
                    security.
                  </p>
                  <p className="textFonts mb-20">
                    Web development, in a general way, refers to all of the actions, changes, and operations necessary
                    to design, maintain, and manage a website to guarantee optimal performance, user experience,
                    and speed.
                  </p>
                  <Link href="/services/web-development">
                    <a className="button button--secondary d-block ">FIND OUT MORE</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section section--title-left mt-136 mb-68">
          <div className="container">
            <div className="row">

              <div className="col-12 col-md-6 my-auto">
                <div className="marginHomeRight">
                  <h2 className="h2title tt-upper">
                    CUSTOMER
                    <br/>
                    RESEARCH
                  </h2>
                </div>
              </div>
              <div className="col-12 col-md-6 ">
                <div className="mt-22 mb-22 mr-120 w-60"  style={{marginLeft: "auto"}}>
                  <h3 className="h3 mb-20 ta-left">
                    Why does your company need customer research?
                  </h3>
                  <p className="textFonts mb-20">
                    Customer Development is the framework that helps in identifying potential customers and determining the ways of satisfying their needs. Whenever businesses launch a new product, enter new markets or pivot their strategy, they need to apply customer development methodology if they want to validate their assumptions and see if the offered solution is in demand.
                  </p>
                  <p className="textFonts mb-20">
                    One of the main goals of Customer Development is to discover a successful sales and marketing strategy and the steps to be used by the marketing team later.
                  </p>
                  <Link href="/services/customer-research">
                    <a className="button button--secondary d-block ">FIND OUT MORE</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section section--title-right mt-136 mb-68">
          <div className="container">
            <div className="row mob-flex--column-revers">
              <div className="col-12 col-md-6">
                <div className="mt-22 mb-22 mr-120 w-60">
                  <h3 className="h3 mb-20 ta-left">
                    Site and app Tracking system setup services
                  </h3>
                  <p className="textFonts mb-20">
                    ASO stands for App Store Optimization and represents a set of actions aimed at optimizing your
                    mobile application’s page in both AppStore and Google Play Market in order to be more visible
                    to the target audience.
                  </p>
                  <p className="textFonts mb-20">
                    ASO includes usage of optimized keywords, useful images and correctly indexed app descriptions
                    to get higher rankings in the top and thus improve your app’s visibility. If utilized correctly,
                    quality ASO can boost reach and drive more organic downloads.
                  </p>
                  <Link href="/services/app-store-optimization">
                    <a className="button button--secondary d-block ">FIND OUT MORE</a>
                  </Link>
                </div>
              </div>
              <div className="col-12 col-md-6 my-auto">
                <div className="marginHomeRight">
                  <h2 className="h2title tt-upper">
                    App Store
                    <br/>
                    Optimization
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>
        <LetsTalk contentSide={'left'} font={'2'}/>
      </MainLayout>
  );
}
