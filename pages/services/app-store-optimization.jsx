import Hero from "../../components/Hero/Hero";
import Ticker from "../../components/Ticker/Ticker";
import LetsTalk from "../../components/LetsTalk/LetsTalk";
import ListWithIcon from "../../components/ListWithIcon/ListWithIcon";
import MustHaveEvents from "../../components/MustHaveEvents/MustHaveEvents";
import { MainLayout } from "../../layouts/MainLayout";
import OurToolkit from "../../components/OurToolkit/OurToolkit";
import React from "react";
import Steps from "../../components/Steps/Steps";
import icon6 from "../../components/WhatWeWorked/img/6.svg";
import icon2 from "../../components/WhatWeWorked/img/2.svg";
import icon3 from "../../components/WhatWeWorked/img/3.svg";
import icon4 from "../../components/WhatWeWorked/img/4.svg";
import icon5 from "../../components/WhatWeWorked/img/5.svg";
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

      <section className="section section--title-left-img7">
        <div className="container p-0">
          <div className="row">
            <div className="col-12 col-md-6 mb-40 mb-xl-0">
              <div className="section__title-box section__title-box--img7 pt-80 pb-80 pt-md-120 pb-160 p-25">
                <h2 className="section__title section__title--small ta-left">
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
            <div className="col-12 col-md-6 col-xl-4 offset-xl-1 d-md-flex d-xl-block pt-md-50 pb-md-20 pt-xl-100 pb-xl-100">
              <div className="ph-20">
                <h3 className="h3 mb-40 ph-20">
                  Why does your company need <br /> App Store Optimization?
                </h3>
                <div className="count-block w-100 mb-40 mb-md-0">
                  <span className="count">1</span>
                  <div className="text-large mb-40">
                    <p>
                      {" "}
                      The number of apps on Google Play and the App Store has
                      exceeded 3 million, so reaching the top is not easy.
                    </p>
                  </div>
                </div>
                <div className="count-block w-100 mb-40 mb-md-0">
                  <span className="count">2</span>
                  <div className="text-large mb-40">
                    <p>
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

      <div className="pb-40 pt-md-100 pb-md-100 pt-xl-190 pb-xl-190">
        <div className="container ph-20">
          <div className="row">
            <div className="col-12 col-xl-8 m-auto">
              <p className="section__text ta-left ta-md-center">
                Efficient optimization relies on working on every element of the
                app store page. It should be performed on a regular basis - once
                every quarter or half a year. Therefore, you receive more
                installations with a lower CPI.
              </p>
            </div>
          </div>
        </div>
      </div>

      <WhatWeWorked itemsArr={whatWeWorkedArr} contentSide={'left'}/>

      <section className="section section--title-right-img8 mb-40 mb-md-0">
        <div className="container p-0">
          <div className="row">
            <div className="col-12 col-md-6 col-xl-5 mb-40 mb-md-0 pb-xl-50 order-md-1 offset-xl-2">
              <div className="section__title-box section__title-box--img8 p-20 pt-120 pb-120">
                <h2 className="section__title section__title--small ta-left tt-upper ">
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

            <div className="col-12 col-md-6 col-xl-5 offset-xl-0 pt-md-50 pb-md-50">
              <div className="ph-20">
                <div className="count-block w-100 mb-40">
                  <span className="count">1</span>
                  <div className="text-large mb-20">
                    <h3 className="h3 mb-20">
                      Gaining impression-to-install conversions.
                    </h3>
                    <p className="mb-10">
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
                    <p className="mb-10">
                      {" "}
                      Comprehensive work on its category in the AppStore and
                      GooglePlay allows you to increase the position of the
                      application in search results for targeted queries and
                      increase the number of interested users.
                    </p>
                  </div>
                </div>

                <div className="count-block w-100 mb-40">
                  <span className="count">3</span>
                  <div className="text-large mb-20">
                    <h3 className="h3 mb-20">
                      App rating and visibility in the store:
                    </h3>
                    <p className="mb-40">
                      The higher the rating, the more relevant the app is
                      considered in the stores, and this is reflected in the
                      app&lsquo;s position in search results.
                    </p>
                    <p className="mb-40">
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

      <section className="section section--title-left-img3 mb-40 mb-md-0">
        <div className="container p-0">
          <div className="row">
            <div className="col-12 col-md-6 col-xl-5 mb-60 mb-md-0 pb-xl-50 ">
              <div className="section__title-box section__title-box--img3 p-20 pt-120 pb-120">
                <h2 className="section__title section__title--small ta-left tt-upper ta-md-right">
                  WHAT WE DO TO MAKE YOUR ASO EFFECTIVE
                </h2>
              </div>
            </div>

            <div className="col-12 col-md-6 col-xl-4 offset-xl-2 pt-md-50 pb-md-50 pt-xl-100 pb-xl-100">
              <div className="ph-20 mb-40">
                <ListWithIcon arr={arr1} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--title-right mb-60 mb-md-0">
        <div className="container p-0">
          <div className="row">
            <div className="col-12 col-md-6 col-xl-5 order-md-1 offset-xl-3 mb-60 mb-md-0 pb-xl-50 ">
              <div className="section__title-box pl-md-20 p-20 pt-120 pb-120">
                <h2 className="section__title section__title--small tt-upper ">
                  how we PERFORM your app store optimization
                </h2>
              </div>
            </div>

            <div className="col-12 col-md-6 col-xl-4 pt-md-50 pb-md-50">
              <div className="ph-20">
                <ListWithIcon arr={arr2} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--title-left-img7 mb-60 mb-md-0">
        <div className="container p-0">
          <div className="row">
            <div className="col-12 col-md-6 col-xl-5 mb-60 mb-md-0 pb-xl-50">
              <div className="section__title-box section__title-box--img7  p-20 pt-120 pb-120">
                <h2 className="section__title section__title--small ta-left">
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

            <div className="col-12 col-md-6 col-xl-6 pt-md-50 pb-md-50 pt-xl-100 pb-xl-100 offset-xl-1">
              <Steps stepsArr={stepsArr} />
            </div>
          </div>
        </div>
      </section>

      <LetsTalk contentSide={"right"} />
    </MainLayout>
  );
}
