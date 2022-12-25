import Hero from "../../components/Hero/Hero";
import Ticker from "../../components/Ticker/Ticker";
import LetsTalk from "../../components/LetsTalk/LetsTalk";
import ListWithIcon from "../../components/ListWithIcon/ListWithIcon";
import MustHaveEvents from "../../components/MustHaveEvents/MustHaveEvents";
import { MainLayout } from "../../layouts/MainLayout";
import OurToolkit from "../../components/OurToolkit/OurToolkit";
import React from "react";
import Steps from "../../components/Steps/Steps";

import icon2 from '../../components/WhatWeWorked/img/2.png';
import icon3 from '../../components/WhatWeWorked/img/1.png';
import icon4 from '../../components/WhatWeWorked/img/4.png';
import icon5 from '../../components/WhatWeWorked/img/5.png';
import icon6 from '../../components/WhatWeWorked/img/6.png';
import WhatWeWorked from "../../components/WhatWeWorked/WhatWeWorked";

export default function analytics() {
  const arr1 = [
    {
      title: "",
      text: "Analysis and evaluation of current ASO as well as keyword positions and competitors analysis",
      iconCheck: true,
    },
    {
      title: "",
      text: "Gathering semantics for each country and language",
      iconCheck: true,
    },

    {
      title: "",
      text: "Title, sub-title/short description, full description, preparation of the promotional text",
      iconCheck: true,
    },
    {
      title: "",
      text: "Preparation of metadata for additional localizations (if necessary) ",
      iconCheck: true,
    },
    {
      title: "",
      text: "We can do the metadata update ourselves or send you detailed instructions and train your team",
      iconCheck: true,
    },
  ];

  const arr2 = [
    {
      title: "",
      text: "Analysis and evaluation of current ASO and keyword positions",
      iconCheck: true,
    },
    {
      title: "",
      text: "Competitive analysis",
      iconCheck: true,
    },

    {
      title: "",
      text: "Collecting semantics for each geo",
      iconCheck: true,
    },
    {
      title: "",
      text: "Title, sub-title/short description, full description, preparation of the promotional text",
      iconCheck: true,
    },
    {
      title: "",
      text: "Preparation of metadata for additional localizations (if necessary)",
      iconCheck: true,
    },
    {
      title: "",
      text: "A/B testing in the App Store and Google Play",
      iconCheck: true,
    },
    {
      title: "",
      text: "Graphical analysis of metadata: evaluation, comparison with competitors, recommendations for improvement",
      iconCheck: true,
    },
    {
      title: "",
      text: "Report on the frequency of updates and competitor activity",
      iconCheck: true,
    },
    {
      title: "",
      text: "Rating and evaluation of feedback, suggestions for improvement",
      iconCheck: true,
    },
  ];

  const whatWeWorkedArr = [
    {
      title: "Mobile Games",
      links: [""],
      svgIcon: icon4,
    },
    {
      title: "E-Commerce Mobile Apps",
      links: [""],
      svgIcon: icon2,
    },
    {
      title: `Dating Mobile Apps`,
      links: [""],
      svgIcon: icon3,
    },
    {
      title: "B2B & SaaS Mobile Apps",
      links: [""],
      svgIcon: icon5,
    },
    {
      title: "Fintech Mobile Apps",
      links: [""],
      svgIcon: icon6,
    },
  ];

  const stepsArr = [
    {
      title: "Introduction",
      days: "1-2 day(s)",
    },
    {
      title: "Audit",
      days: "1-3 day(s)",
    },
    {
      title: "Offered solution discussion",
      days: "1-2 day(s)",
    },
    {
      title: "Solution implementation",
      days: "4-7 days",
    },
    {
      title: "Testing and looking the resoults",
      days: "4-7 days",
    },
    {
      title: "Delivery and presentation",
      days: "1-2 days",
    },
  ];

  return (
    <MainLayout
      title={"Site and app Tracking system setup services - LTV:CAC agency"}
      description="We can build system compile marketing data and sales get exact selling costs to sales ratio, while monitoring ad channels and events inside sales funnel"
    >
      <Hero
        title={"App Store Optimization"}
        subtitle={
          "Optimize your mobile app to get more installations from the App Store and Google Play"
        }
        imageUrls={{
          desktop: "/img/hero/11.jpg",
          mobile: "/img/hero/11mob.jpg",
        }}
      />
      <Ticker />

      <section className="section section--title-left mt-68 mb-68">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 my-auto">
              <div className="marginHomeLeft">
                <h2 className="h2title mt-22 mb-22 ta-right">
                  SEARCH ENGINE
                  <br />
                  OPTIMIZATION
                  <br />
                  FOR YOUR
                  <br />
                  APPLICATION
                </h2>
              </div>
            </div>
            <div className="col-12 col-md-6 my-auto">
              <div className="mt-22 mb-22 ml-120 w-70">
                <h3 className="h3 mb-40">
                  Why does your company need <br /> App Store Optimization?
                </h3>
                <div className="count-block w-100 mb-40 mb-md-0">
                  <span className="count">1</span>
                  <div className="text-large mb-40 mt-22">
                    <p className="textFonts">
                      {" "}
                      The number of apps on Google Play and the App Store has
                      exceeded 3 million, so reaching the top is not easy.
                    </p>
                  </div>
                </div>
                <div className="count-block w-100 mb-40 mb-md-0">
                  <span className="count">2</span>
                  <div className="text-large mb-40 mt-22">
                    <p className="textFonts">
                      {" "}
                      The application needs regular optimization, attracting new
                      users and retaining old ones.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="pt-68 pb-68 lineHome">
        <div className="container">
          <div className="row">
            <div className="col-12 col-xl-8 m-auto">
              <p className="section__text1 ta-left ta-md-center">
                Efficient optimization relies on working on every element of the
                app store page. It should be performed on a regular basis - once
                every quarter or half a year. Therefore, you receive more
                installations with a lower CPI.
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
              <div className="marginHomeLeft">
                <h2 className="h2title ta-right tt-upper">
                  Main benefits
                  <br />
                  of your app
                  <br />
                  store
                  <br />
                  optimization
                </h2>
              </div>
            </div>
            <div className="col-12 col-md-6 ">
              <div className="ml-120 w-70 mt-22 mb-22">
                <div className="count-block w-100 mb-40">
                  <span className="count">1</span>
                  <div className="text-large mb-20">
                    <h3 className="h3 mb-20">
                      Gaining impression-to-install conversions.
                    </h3>
                    <p className="textFonts">
                      {" "}
                      Users get to the app page from all sorts of sources:
                      search, charts, picks, ads, or a direct link, but
                      it&lsquo;s not enough to bring the user to the page, you
                      still need to &quot;lead&quot; them to install the app.
                    </p>
                  </div>
                </div>
                <div className="count-block w-100 mb-40">
                  <span className="count">2</span>
                  <div className="text-large mb-20">
                    <h3 className="h3 mb-20">
                      Raising app visibility in the store:
                    </h3>
                    <p className="textFonts">
                      {" "}
                      Comprehensive work on its category in the AppStore and
                      GooglePlay allows you to increase the position of the
                      application in search results for targeted queries and
                      increase the number of interested users.
                    </p>
                  </div>
                </div>

                <div className="count-block w-100">
                  <span className="count">3</span>
                  <div className="text-large">
                    <h3 className="h3 mb-20">
                      App rating and visibility in the store:
                    </h3>
                    <p className="textFonts mb-40">
                      The higher the rating, the more relevant the app is
                      considered in the stores, and this is reflected in the
                      app&lsquo;s position in search results.
                    </p>
                    <p className="textFonts">
                      80% of mobile users read at least one review before
                      downloading the app. That is why it is very important to
                      respond to reviews, thereby maintaining feedback.
                    </p>
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
              <div className="mt-22 mb-22 mr-120 w-70">
                <ListWithIcon arr={arr1} />
              </div>
            </div>
            <div className="col-12 col-md-6 my-auto">
              <div className="marginHomeRight">
                <h2 className="h2title ta-left mt-22 mb-22">
                  WHAT WE DO TO MAKE YOUR ASO EFFECTIVE
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
                <h2 className="h2title ta-right mt-22 mb-22 tt-upper ">
                  how we PERFORM your app store optimization
                </h2>
              </div>
            </div>
            <div className="col-12 col-md-6 ">
              <div className="mt-22 mb-22 ml-120 w-70">
                <ListWithIcon arr={arr2} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--title-right mt-136 mb-68">
        <div className="container">
          <div className="row mob-flex--column-revers">
            <div className="col-12 col-md-6 ">
              <Steps stepsArr={stepsArr}/>
            </div>
            <div className="col-12 col-md-6 my-auto">
              <div className="marginHomeRight">
                <h2 className="h2title ta-left mt-22 mb-22">
                  HOW WE
                  <br />
                  AUTOMATE
                  <br />
                  YOUR
                  <br />
                  ROUTINE
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LetsTalk contentSide={"left"} font={'2'}/>
    </MainLayout>
  );
}
