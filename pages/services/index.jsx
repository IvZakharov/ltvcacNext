import React from 'react';


import Hero from '../../Components/Hero/Hero';
import Ticker from '../../Components/Ticker/Ticker';
import LetsTalk from '../../Components/LetsTalk/LetsTalk';
import Link from "next/link";

export const services = () => {
  return (
    <>

      <Hero title={'Services'} subtitle={'Some of the projects we worked on. Feel free to request for more!'}
            heroImg={'imgFifth'}/>
      <Ticker/>
      <section className="section section--title-left-img1">
        <div className="container p-0">
          <div className="row">
            <div className="col-12 col-md-6 mb-xl-0">
              <div className="section__title-box section__title-box--img1 pt-100 pb-100 pt-md-120 p-25">
                <h2 className="section__title section__title--small ta-left">
                  CUSTOMER
                  <br/>
                  DEVELOPMENT
                </h2>
              </div>
            </div>
            <div className="col-12 col-md-6 col-xl-4 offset-xl-1 pt-60 pb-60 d-md-flex d-xl-block pt-xl-120 pb-xl-120">
              <div className="ph-20">
                <h3 className="h3 mb-20">CUSTOMER DEVELOPMENT</h3>
                <p className="text-large mb-20">
                  Despite the COVID‑19 pandemic in 2020, all digital ad channels demonstrate strong
                  growth in the US market this year.
                </p>
                <Link to="customer" className="button">
                  FIND OUT MORE
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section section--title-right-img2">
        <div className="container p-0">
          <div className="row">
            <div className="col-12 col-md-6 order-md-1 mb-xl-0 offset-xl-1">
              <div className="section__title-box section__title-box--img1 pt-100 pb-100 pt-md-120 p-25">
                <h2 className="section__title section__title--small ta-left">
                  ANALYTICS
                  <br/>
                  SYSTEM SETUP
                </h2>
              </div>
            </div>
            <div
              className="col-12 col-md-6 col-xl-4 offset-xl-1 pt-60 pb-60 order-md-0 d-md-flex d-xl-block  pt-xl-120 pb-xl-120">
              <div className="ph-20">
                <h3 className="h3 mb-20">Business analytics</h3>
                <p className="text-large mb-20">
                  We boost your sales and cut your losses with the optimized business operations.
                  audience needs.
                </p>
                <Link href="analytics" className="button">
                  FIND OUT MORE
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--title-left-img1">
        <div className="container p-0">
          <div className="row">
            <div className="col-12 col-md-6 mb-xl-0">
              <div className="section__title-box section__title-box--img1 pt-100 pb-100 pt-md-120 p-25">
                <h2 className="section__title section__title--small ta-left">
                  LEAD
                  <br/>
                  GENERATION
                </h2>
              </div>
            </div>
            <div className="col-12 col-md-6 col-xl-4 offset-xl-1 pt-60 pb-60 d-md-flex d-xl-block pt-xl-120 pb-xl-120">
              <div className="ph-20">
                <h3 className="h3 mb-20">Paid advertising channels</h3>
                <p className="text-large mb-20">
                  We analyze your key KPIs and optimize ad campaigns to cover ALL of your target
                  audiences efficiently.
                </p>
                <Link href="paid" className="button">
                  FIND OUT MORE
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <LetsTalk/>
    </>
  );
}


