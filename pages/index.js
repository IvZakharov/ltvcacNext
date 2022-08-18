import Head from 'next/head'
import Image from 'next/image'
import {MainLayout} from "../layouts/MainLayout";
import Hero from "../components/Hero/Hero";
import Ticker from "../components/Ticker/Ticker";
import HeroAdvantages from "../components/HeroAdvantages/HeroAdvantages";
import ClientFocus from "../components/ClientFocus/ClientFocus";
import WhatWeWorked from "../components/WhatWeWorked/WhatWeWorked";
import OurToolkit from "../components/OurToolkit/OurToolkit";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import LetsTalk from "../components/LetsTalk/LetsTalk";
import React from "react";
import OurServices from "../components/OurServices/OurServices";
import icon1 from "../components/WhatWeWorked/img/1.svg";
import icon2 from "../components/WhatWeWorked/img/2.svg";
import icon3 from "../components/WhatWeWorked/img/3.svg";
import icon4 from "../components/WhatWeWorked/img/4.svg";
import icon5 from "../components/WhatWeWorked/img/5.svg";
import icon6 from "../components/WhatWeWorked/img/6.svg";

export default function Home() {
  
  const ourToolkitArr = [
    {
      title: 'Targeted ads',
      text: 'Facebook, Instagram,TikTok, Snapchat, WeChat, QQ, Weibo, MyTarget',
    },
    {
      title: 'Landing pages and forms',
      text: 'Typeform, Tilda, Bitrix, Custom (Web, Android, iOS)',
    },
    {
      title: 'Mobile analytics systems',
      text: 'Adjust, Appsflyer and other',
    },
    {
      title: 'Web analytics systems',
      text: 'Google Analytics, Yandex Metrica, KeytaroTDS, Binom Tracker',
    },
  ];
  
  const ourToolkitArr2 = [
    {
      title: 'Paid search & RTB',
      text: 'Google AdWords, Baidu, Bing, AppleSearchAds',
    },
    {
      title: 'Performance testing and monitoring tools',
      text: 'Google Speed Insight, CrossBrowserTesting',
    },
    {
      title: 'A/B testing tools',
      text: 'Google Optimize, Adapty, SplitMetrics',
    },
    {
      title: 'Data visualization systems',
      text: 'Google Data Studio, Kibana, Mixpanel',
    },
  ];
  
  const whatWeWorkedArr = [
    {
      title: 'Real Estate',
      links: ['Matahari Hills'],
      svgIcon: icon1,
    },
    {
      title: 'E-Commerce',
      links: ['AliExpress,', 'LepreStore'],
      svgIcon: icon2,
    },
    {
      title: `Mobile Apps (non-gaming)`,
      links: [
        'Badoo,',
        'KeYou,',
        'APUS Launcher,',
        'Kika,',
        'Keyboard,',
        'GO Keyboard,',
        'UC Browser',
      ],
      svgIcon: icon3,
    },
    {
      title: 'Video Games',
      links: ['Cradle of Empires,', 'World of Tanks Blitz,', 'War Thunder,', 'Dragon Soul'],
      svgIcon: icon4,
    },
    {
      title: 'SaaS',
      links: ['Togezzer,', 'Mix Cart,', 'Grabbly,', 'DDHA'],
      svgIcon: icon5,
    },
    
    {
      title: 'Platforms',
      links: ['Uber,', 'Chummy App,', 'Guvera,', 'City Life'],
      svgIcon: icon6,
    },
  ];
  
  
  return (
      <MainLayout title={"High ROI Performance marketing services - LTV:CAC agency"}
                  description={"We help startups and property businesses grow digital marketing from idea to xx.xxx customers with help digital channels, data analysis and customer research"}>
        <Hero title={'Hungry for your growth'}
              subtitle={'Performance digital marketing agency with focus on the US and Asia'}
              imageUrls={{desktop: '/img/hero/1.jpg', mobile: '/img/hero/1mob.jpg'}}/>
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
                  We assist startups and property businesses in growing digital marketing from an idea to xx.xxx
                  customers with digital channels, data analysis and customer research.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <WhatWeWorked itemsArr={whatWeWorkedArr}/>
        
        <div className="mb-80 pb-80 mb-md-0 pt-xl-190 pb-xl-190">
          <div className="container ph-20">
            <div className="row">
              <div className="col-12 col-xl-8 m-auto">
                <h2 className="section__title section__title--primary mb-30">
                  OUR SERVICES
                </h2>
                <p className="section__text ta-left ta-md-center">
                  During the past decade we have worked on &gt; 90 projects in industries like SaaS, Ecommerce, Online
                  Gaming etc.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <OurServices/>
        <OurToolkit itemsFirstColumn={ourToolkitArr} itemsSecondColumns={ourToolkitArr2} imagePosition={'right'}/>
        <HowItWorks/>
        <LetsTalk contentSide={'right'}/>
      </MainLayout>
  )
}
