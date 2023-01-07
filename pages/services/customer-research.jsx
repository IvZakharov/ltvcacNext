import Hero from '../../components/Hero/Hero';
import Ticker from '../../components/Ticker/Ticker';
import ListWithIcon from '../../components/ListWithIcon/ListWithIcon';
import LetsTalk from '../../components/LetsTalk/LetsTalk';
import { MainLayout } from '../../layouts/MainLayout';
// import icon1 from '../../components/WhatWeWorked/img/1.svg';
// import icon2 from '../../components/WhatWeWorked/img/2.svg';
// import icon3 from '../../components/WhatWeWorked/img/3.svg';
// import icon4 from '../../components/WhatWeWorked/img/4.svg';
// import icon5 from '../../components/WhatWeWorked/img/5.svg';
import icon1 from '../../components/WhatWeWorked/img/1.png';
import icon2 from '../../components/WhatWeWorked/img/2.png';
import icon3 from '../../components/WhatWeWorked/img/3.svg';
import icon4 from '../../components/WhatWeWorked/img/4.png';
import icon5 from '../../components/WhatWeWorked/img/5.png';
import WhatWeWorked from '../../components/WhatWeWorked/WhatWeWorked';

export default function customer() {
  const arr1 = [
    {
      title: 'Product potential for different markets',
      text: 'You are getting the approximate CAC (customer acquisition cost) BEFORE creating any product',
      iconCheck: true,
    },
    {
      title: 'Cost-efficient solution: focus on what matters most',
      text: 'You understand customer needs based on stats and get the job done. Bonus: you save hundreds of hours for product development.',
      iconCheck: true,
    },

    {
      title: 'Detailed strategy and investment-ready hypothesis proof',
      text: 'We generate sample data for the profitable and transparent business model. Investors recognize all the benefits and provide funding.',
      iconCheck: true,
    },

    {
      title: 'USP for your customers: simple and clear',
      text: 'Ideal Client Profile (ICP). List of hot topics for SMM and SEO articles: identify customers pains and offer solutions. Strategic brand communication enabled.',
      iconCheck: true,
    },
  ];

  const arr2 = [
    {
      title: '',
      text: 'We brainstorm with your team to identify top audience pains and key clients problems.',
      iconCheck: true,
    },
    {
      title: '',
      text: 'Preparing open-ended questions for phone interviews.',
      iconCheck: true,
    },

    {
      title: '',
      text: 'We build a list of potential respondents and get your approval. ',
      iconCheck: true,
    },
    {
      title: '',
      text: 'We process the results and refine the initial pains list.',
      iconCheck: true,
    },
  ];

  const arr3 = [
    {
      title: '',
      text: 'We compile pain stories based on qualitative research results and present case studies where customers lost their money or got stuck with the development. Case studies are presented below in an intuitive way and can be easily grasped by general audiences',
      iconCheck: true,
    },
    {
      title: '',
      text: "We design an online survey using typeform.com and incorporate pain stories in it. Respondents are suggested multiple-choice questions and should pick one that describes their case most accurately: - I miss opportunities or loose money due to X problem;- I had an X problem and solved it with Y - I didn't have an X problem, or it didn't bother me.",
      iconCheck: true,
    },

    {
      title: '',
      text: 'We design and produce your marketing materials, set up your Facebook page and Facebook Ads account and develop your advertising campaign.',
      iconCheck: true,
    },

    {
      title: '',
      text: 'We design and produce your marketing materials, set up your Facebook page and Facebook Ads account, and develop your advertising campaign.',
      iconCheck: true,
    },
    {
      title: '',
      text: 'We set up your Google Analytics account to track conversions from Facebook Ads and launch your advertising campaign.',
      iconCheck: true,
    },
    {
      title: '',
      text: ' We process survey results, extract stats and verify initial hypotheses.',
      iconCheck: true,
    },
  ];

  const whatWeWorkedArr = [
    {
      title: 'Real Estate Projects',
      links: [''],
      svgIcon: '/img/WWWO/1.svg',
    },
    {
      title: 'E-Commerce Projects',
      links: [''],
      svgIcon: '/img/WWWO/2.svg',
    },
    {
      title: `Mobile Apps Projects`,
      links: [''],
      svgIcon: '/img/WWWO/3.svg',
    },
    {
      title: 'B2B & SaaS Projects',
      links: [''],
      svgIcon: '/img/WWWO/4.svg',
    },
    {
      title: 'Fintech Projects',
      links: [''],
      svgIcon: '/img/WWWO/5.svg',
    },
  ];

  return (
    <MainLayout
      title={'Qualitative and Quantitative research - LTV:CAC agency'}
      description={
        'We know how to find out the most important problems of your clients through qualitative and quantitative research, which will help you make a best product'
      }>
      <Hero
        title={'Customer Research'}
        subtitle={'Identify your customers needs with data-driven solutions'}
        imageUrls={{ desktop: '/img/hero/4.jpg', mobile: '/img/hero/4mob.jpg' }}
      />
      <Ticker />
      <section className="section focus section--title-left mt-68 mb-68">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 my-auto">
              <div className="marginHomeLeft">
                <h2 className="h2title ta-right tt-upper mt-22 mb-22">
                  CUSTOMER <br />
                  RESEARCH <br />FOR OPTIMAL
                  <br /> BUSINESS <br /> DECISIONS
                </h2>
              </div>
            </div>
            <div className="col-12 col-md-6 my-auto">
              <h3 className="h3 mb-40 ml-120 mt-22 w-70">Why does your company need customer research?</h3>
              <div className="ml-120 w-70">
                <div className="count-block w-100 mb-40">
                  <span className="count">1</span>
                  <p className="textFonts textAlingCenter">
                    To identify customer pains and eliminate barriers for boosting your revenue and
                    achieving your business goals
                  </p>
                </div>
                <div className="count-block w-100 mb-22">
                  <span className="count">2</span>
                  <p className="textFonts textAlingCenter">
                    To create a unique data-driven value proposition to attract your target audience
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <div className="pt-68 pb-68 lineHome">
        <div className="container ph-20">
          <div className="row">
            <div className="col-12 col-xl-8 m-auto">
              <p className="section__text1 ta-left ta-md-center">
                Misidentifying your customers’ pains or their priorities to perform JBTD results in
                your team working for weeks/months on problems that your customers aren’t willing to
                pay for, which is $xxx.xx spent in vain.
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
                <h2 className="h2title ta-right tt-upper ">
                  Main benefits
                  <br />
                  of your
                  <br />
                  customer
                  <br />
                  research
                </h2>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="mt-22 mb-22 w-70 ml-120">
                <div className="count-block w-100 mb-40">
                  <span className="count">1</span>
                  <div className="textFonts mb-20">
                    <h3 className="h3 mt-20 mb-20">Evaluation of ideas</h3>
                    <p className="mb-10 textFonts"> Is it feasible and profitable?</p>
                    <p className="mb-10 textFonts">
                      {' '}
                      What is the budget estimate to create MVP and launch sales?
                    </p>
                    <p className="mb-10 textFonts"> Does it have scaling potential for other markets?</p>
                    <p className="textFonts"> How to estimate your product value and attract first investors?</p>
                  </div>
                </div>
                <div className="count-block w-100 mb-40">
                  <span className="count">2</span>
                  <div className="textFonts mb-20">
                    <h3 className="h3 mb-20">Enhancement of economy</h3>
                    <p className="mb-10 textFonts"> How to boost revenue for existing products/services?</p>
                    <p className="mb-10 textFonts">
                      {' '}
                      What is the budget estimate to create MVP and launch sales?
                    </p>
                    <p className="mb-10 textFonts"> How to reduce CAC? (Customer Acquisition Cost)</p>
                    <p className="mb-10 textFonts">
                      {' '}
                      What core features are required for a successful release?
                    </p>
                    <p className="mb-10 textFonts"> How to reach stable ROI?</p>
                    <p className="textFonts"> What is the optimal development strategy for the X market?</p>
                  </div>
                </div>

                <div className="count-block w-100">
                  <span className="count">3</span>
                  <div className="textFonts mb-20">
                    <h3 className="h3 mb-20">Expansion to new territories</h3>
                    <p className="mb-10 textFonts">
                      How to minimize the risks of ineffective spending and avoid negative ROI?
                    </p>
                    <p className="mb-10 textFonts">How to build communication with the client?</p>
                    <p className="mb-10 textFonts">What are the features your users need right now?</p>
                    <p className="textFonts">How can we increase sales/reduce CAC?</p>
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
            <div className="col-12 col-md-6 mt-22 mb-22 ">
              <div className="mr-120 w-70 my-auto">
                <ListWithIcon arr={arr1} />
              </div>
            </div>
            <div className="col-12 col-md-6 my-auto">
              <div className="marginHomeRight">
                <h2 className="h2title tt-upper ta-left mt-22 mb-22">
                  What you are
                  <br />
                  getting after
                  <br />
                  the research?
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
                <h2 className="h2title ta-right tt-upper mt-22 mb-22">
                  how <br />we do
                  <br />
                  qualitative <br />
                  research
                </h2>
              </div>
            </div>
            <div className="col-12 col-md-6 my-auto">
              <div className="w-70 ml-120 mt-22">
                <p className="text text--large text--primary text--fw-500 text--lighten tt-upper">
                  STEP 1
                </p>
                <p className="text text--large text--primary text--fw-500">QUALITATIVE RESEARCH</p>
                <p className="text text--fw-500 text--black mb-20">7-21 days</p>
              </div>
              <div className="mb-40 w-70 ml-120">
                <ListWithIcon arr={arr2} />
              </div>

              <div className="w-70 ml-120 mb-22">
                <span className="line mb-20"></span>
                <p className="textFonts text--black italic mb-20">
                  All interviews are recorded and shared with you.
                </p>
                <p className="textFonts text--black italic">
                  Phone interviews usually last 30-60 mins.
                  <br />
                  We never compensate the respondents to avoid biased responses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--title-right mt-136 mb-68">
        <div className="container">
          <div className="row mob-flex--column-revers">
            <div className="col-12 col-md-6">
              <div className="w-70 mr-120 mt-22">
                <p className="text text--large text--primary text--fw-500 text--lighten tt-upper">
                  STEP 2
                </p>
                <p className="text text--large text--primary text--fw-500">QUANTITATIVE RESEARCH</p>
                <p className="text text--fw-500 text--black mb-20">14-21 days</p>
              </div>
              <div className="w-70 mr-120 mb-22">
                <ListWithIcon arr={arr3} />
              </div>
            </div>
            <div className="col-12 col-md-6 my-auto">
              <div className="marginHomeRight">
                <h2 className="h2title tt-upper ta-left mt-22 mb-22">
                  how<br /> we do
                  <br />
                  qualitative <br />
                  research
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
                <h2 className="h2title ta-right tt-upper mt-22 mb-22">
                  How the final
                  <br />
                  rating of <br />
                  customer pains <br />
                  looks like
                </h2>
              </div>
            </div>
            <div className="col-12 col-md-6 my-auto">
              <div className="mb-30 w-70 ml-120 mt-22">
                <p className="text text--large text--primary text--fw-500 text--lighten ta-left tt-upper">
                  PROBLEM DISTRIBUTION <br />
                  FOR TARGET AUDIENCE
                </p>
              </div>
              <div className="mb-22 w-70 ml-120">
                <div className="problems">
                  <div className="history">
                    <div className="history__item mb-20">
                      <i className="color color--pink"></i>
                      <p className="textFonts">
                        Audience regularly lose money <br /> and do not know how to solve it
                      </p>
                    </div>
                    <div className="history__item mb-20">
                      <i className="color color--primary"></i>
                      <p className="textFonts">
                        Aware of the problem but do not consider it necessary to solve it
                      </p>
                    </div>
                    <div className="history__item mb-50">
                      <i className="color color--secondary"></i>
                      <p className="textFonts">This problem did not arise</p>
                    </div>
                  </div>
                  <div className="problems">
                    <div className="problems__item mb-50">
                      <p className="textFonts mb-20">Problem # 1</p>
                      <ul className="diagram">
                        <li className="w-80 color color--pink pl-30">80%</li>
                        <li className="w-5 color color--primary ta-center">5%</li>
                        <li className="w-15 color color--secondary ta-center">15%</li>
                      </ul>
                    </div>
                    <div className="problems__item mb-50">
                      <p className="textFonts mb-20">Problem # 2</p>
                      <ul className="diagram">
                        <li className="w-70 color color--pink pl-30">70%</li>
                        <li className="w-20 color color--primary ta-center">20%</li>
                        <li className="w-10 color color--secondary ta-center">10%</li>
                      </ul>
                    </div>
                    <div className="problems__item">
                      <p className="textFonts mb-20">Problem # 3</p>
                      <ul className="diagram">
                        <li className="w-35 color color--pink pl-30">35%</li>
                        <li className="w-35 color color--primary ta-center">35%</li>
                        <li className="w-30 color color--secondary ta-center">30%</li>
                      </ul>
                    </div>
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
            <div className="col-12 col-md-6">
              <div className="w-70 mr-120 mt-22 mb-22">
                <h3 className="h3 ph-20 mb-40 tt-upper ta-left">CONCLUSIONS & RECOMMENDATIONS</h3>
                <div>
                  <div className="count-block w-100 mb-40">
                    <span className="count">1</span>
                    <p className="textFonts textAlingCenter">
                      TOP-3 customers pains (customers need a solution and are willing to pay for
                      it).
                    </p>
                  </div>
                  <div className="count-block w-100 mb-40">
                    <span className="count">2</span>
                    <p className="textFonts textAlingCenter">Your Ideal Client Profile (ICP).</p>
                  </div>
                  <div className="count-block w-100 mb-40">
                    <span className="count">3</span>
                    <p className="textFonts textAlingCenter">
                      Hot leads ready to try your product upon its release.
                    </p>
                  </div>
                  <div className="count-block w-100 mb-40">
                    <span className="count">4 </span>
                    <p className="textFonts textAlingCenter">
                      Strategic product development recommendations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 my-auto">
              <div className="marginHomeRight">
                <h2 className="h2title ta-left mt-22 mb-22">
                  WHAT WE
                  <br />
                  DELIVERED?
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
