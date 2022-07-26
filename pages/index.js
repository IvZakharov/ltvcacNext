import Head from 'next/head'
import Image from 'next/image'
import {MainLayout} from "../layouts/MainLayout";
import Hero from "../components/Hero/Hero";
import Ticker from "../components/Ticker/Ticker";
import HeroAdvantages from "../components/HeroAdvantages/HeroAdvantages";
import ClientFocus from "../components/ClientFocus/ClientFocus";
import WhatWeWorked from "../components/WhatWeWorked/WhatWeWorked";
import WhereWeShine from "../components/WhereWeShine/WhereWeShine";
import OurToolkit from "../components/OurToolkit/OurToolkit";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import LetsTalk from "../components/LetsTalk/LetsTalk";
import React from "react";

export default function Home() {
  return (
    <MainLayout title={"High ROI Performance marketing services - LTV:CAC agency"}
                description={"We help startups and property businesses grow digital marketing from idea to xx.xxx customers with help digital channels, data analysis and customer research"}>
      <Hero title={'Hungry for your growth'}
            subtitle={'Performance digital marketing agency with focus on the US and Asia'}
            heroImg={"imgFirst"}/>
      <Ticker/>
      <HeroAdvantages/>
      <ClientFocus/>

      <div className="pt-60 pb-80 pt-xl-190 pb-xl-190">
        <div className="container ph-20">
          <div className="row">
            <div className="col-12 col-xl-8 m-auto">
              <h2 className="section__title section__title--primary mb-30">
                ROI&#62;0 if LTV&#62;CAC
              </h2>
              <p className="section__text ta-left ta-md-center">
                We help startups and property businesses grow digital marketing from idea to xx.xxx
                customers with help digital channels, data analysis and customer research
              </p>
            </div>
          </div>
        </div>
      </div>

      <WhatWeWorked/>

      <div className="mb-80 mb-md-0 pt-xl-190 pb-xl-190">
        <div className="container ph-20">
          <div className="row">
            <div className="col-12 col-xl-8 m-auto">
              <p className="section__text ta-left ta-md-center">
                We drive customers and paying users to your products with market research and
                digital channels optimization. You boost your revenue, and we get our share of it.
              </p>
            </div>
          </div>
        </div>
      </div>

      <WhereWeShine/>
      <OurToolkit/>
      <HowItWorks/>
      <LetsTalk/>
    </MainLayout>
  )
}
