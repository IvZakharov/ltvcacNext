import Hero from '../../Components/Hero/Hero';
import Ticker from '../../Components/Ticker/Ticker';
import LetsTalk from '../../Components/LetsTalk/LetsTalkReverse';
import ListWithIcon from '../../Components/ListWithIcon/ListWithIcon';
import MustHaveEvents from '../../Components/MustHaveEvents/MustHaveEvents';


export default function analytics() {
  const arr1 = [
    {
      title: 'Save more time',
      text: 'Save ~20% of time for marketing, product and sales teams. No need to collect all data for a period. Everything your business needs to know is already on the table. Plus if you need to conduct A/B testing (and you do) - you save 1-4 weeks on each test.',
      iconCheck: false,
    },
    {
      title: 'No user/client traction across the  funnel and inside the product',
      text: 'Not possible to work with ‘visitor -&#62; client’ conversion rate. Delivering features in a ‘leap of faith’ mode: never know HOW new release impacts product',
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
      text: 'Save Ads budget Know Customer Acquisition Cost for each ad network/campaign/ad. Choose LTV-positive acquisition channels only.',
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

  return (
    <>


      <Hero title={'Mobile & Web Tracking'}
            subtitle={'Tracking system setup services for your project'}
            heroImg={'imgSixth'}/>
      <Ticker/>

      <section className="section section--title-left-img3">
        <div className="container p-0">
          <div className="row">
            <div className="col-12 col-md-6 mb-40 mb-xl-0">
              <div className="section__title-box pt-80 pt-md-120 p-25">
                <h2 className="section__title section__title--small section__title-img3 ta-left">
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
                <p className="text mb-20">
                  Imagine, you just got a seat on a jet plane It’s time for takeoff and the pilot is
                  speaking:
                </p>
                <p className="text mb-20">
                  - Sorry our GPS is broken so I’m going to navigate by stars. - WHAT? - Yeah. It’s
                  ok. Maybe we miss the right city but I’ll get us… somewhere.
                </p>
                <p className="text mb-20">
                  The point is, that jet is your business!It can get you to the sky. Or crash
                  terribly.
                </p>
                <p className="text mb-40">
                  The point is, that jet is your business!It can get you to the sky. Or crash
                  terribly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--title-right-img2 mb-40 mb-md-0">
        <div className="container p-0">
          <div className="row">
            <div className="col-12 col-md-6 mb-60 mb-md-0 order-md-1 d-flex offset-xl-1 aligin-center">
              <div className="section__title-box section__title-box--img2 p-20 pt-80 pb-80 pt-md-100">
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
                  Data analytics is a control panel of your business. It is the only reliable source
                  to make marketing and product solutions.
                </p>
                <p className="text mb-20">
                  Customer acquisition works properly if budget is optimized like this: it is based
                  on expenses/revenue, ad interactions, and how customers interact with your mobile
                  app and/or website.
                </p>
                <p className="text mb-20">
                  We can build system compile marketing data and sales get exact selling costs to
                  sales ratio, while monitoring ad channels and events inside sales funnel!
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
                During the past decade we have worked on &#62; 90 projects in industries like SaaS,
                Ecommerce, Online Gaming etc.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="section section--title-left-img4 mb-40 mb-md-0">
        <div className="container p-0">
          <div className="row">
            <div className="col-12 col-md-6 col-xl-5 mb-40 mb-md-0 pb-xl-50 ">
              <div className="section__title-box section__title-box--img4 pl-70 p-20 pt-120 pb-120">
                <h2 className="section__title section__title--small ta-left ta-md-right">
                  WHAT CAN
                  <br/>
                  TRACKING HELP
                  <br/>
                  YOU WITH?
                </h2>
              </div>
            </div>

            <div className="col-12 col-md-6 col-xl-4 offset-xl-2 pt-md-50 pb-md-50">
              <div className="ph-20">
                <h3 className="h3 mb-20">Product / Service:</h3>
                <p className="text mb-10">
                  + What feature should we implement first to get more money/traction?
                </p>
                <p className="text mb-10">+ How do we reduce user/client churn?</p>
                <p className="text mb-40">+ What should we do to improve our service value?</p>
                <h3 className="h3 mb-20">Marketing/Sales:</h3>
                <p className="text mb-10">+ Which channel did this client come from?</p>
                <p className="text mb-10">+ How do we reduce user/client churn?</p>
                <p className="text mb-40 mb-md-0">
                  + What should we do to improve our service value?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--title-right-img1 mb-60 mb-md-0">
        <div className="container p-0">
          <div className="row">
            <div className="col-12 col-md-6 col-xl-5 offset-xl-2 order-md-1 mb-60 mb-md-0 pb-xl-50 ">
              <div className="section__title-box section__title-box--img1 pl-70 pl-md-20 p-20 pt-120 pb-120">
                <h2 className="section__title section__title--small ta-left">
                  YOUR
                  <br/>
                  BUSINESS
                  <br/>
                  WITH NO
                  <br/>
                  TRACKING?
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

      <section className="section section--title-left-img3 mb-60 mb-md-0">
        <div className="container p-0">
          <div className="row">
            <div className="col-12 col-md-6 col-xl-5 mb-60 mb-md-0 pb-xl-50 ">
              <div className="section__title-box section__title-box--img3 pl-70 p-20 pt-120 pb-120">
                <h2 className="section__title section__title--small ta-left ta-md-right">
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

            <div className="col-12 col-md-6 col-xl-4 offset-xl-2 pt-md-50 pb-md-50 pt-xl-100 pb-xl-100">
              <div className="ph-20">
                <ListWithIcon arr={arr2}/>
              </div>
            </div>
          </div>
        </div>
      </section>

      <MustHaveEvents/>

      <section className="section section--title-right-img1 mb-60 mb-md-0">
        <div className="container p-0">
          <div className="row">
            <div className="col-12 col-md-6 col-xl-5 offset-xl-2 order-md-1 mb-60 mb-md-0 pb-xl-50 ">
              <div className="section__title-box section__title-box--img1 pl-70 pl-md-20 p-20 pt-120 pb-120">
                <h2 className="section__title section__title--small ta-left">
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

            <div className="col-12 col-md-6 col-xl-4 offset-xl-1  pt-md-50 pb-md-50 pt-xl-100 pb-xl-100">
              <div className="ph-20">
                <ListWithIcon arr={arr3}/>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LetsTalk/>
    </>
  );
}

