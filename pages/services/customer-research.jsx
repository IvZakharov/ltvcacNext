import Hero from '../../components/Hero/Hero';
import Ticker from '../../components/Ticker/Ticker';
import ListWithIcon from '../../components/ListWithIcon/ListWithIcon';
import LetsTalk from '../../components/LetsTalk/LetsTalk';
import { MainLayout } from '../../layouts/MainLayout';
import icon1 from '../../components/WhatWeWorked/img/1.svg';
import icon2 from '../../components/WhatWeWorked/img/2.svg';
import icon3 from '../../components/WhatWeWorked/img/3.svg';
import icon4 from '../../components/WhatWeWorked/img/4.svg';
import icon5 from '../../components/WhatWeWorked/img/5.svg';
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
      svgIcon: icon1,
    },
    {
      title: 'E-Commerce Projects',
      links: [''],
      svgIcon: icon2,
    },
    {
      title: `Mobile Apps Projects`,
      links: [''],
      svgIcon: icon3,
    },
    {
      title: 'B2B & SaaS Projects',
      links: [''],
      svgIcon: icon4,
    },
    {
      title: 'Fintech Projects',
      links: [''],
      svgIcon: icon5,
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
      <section className="section focus section--title-left-img1 mb-40 mb-md-0">
        <div className="container p-0">
          <div className="row">
            <div className="col-12 col-md-6 mb-40  mb-xl-0">
              <div className="section__title-box section__title-box--img1  pb-120 pt-120 pt-md-120 p-25">
                <h2 className="section__title section__title--small ta-left ta-md-right">
                  CUSTOMER <br />
                  RESEARCH FOR <br /> OPTIMAL
                  <br /> BUSINESS <br /> DECISIONS
                </h2>
              </div>
            </div>
            <div className="col-12 col-md-6 col-xl-4  offset-xl-1 pt-md-50 pb-md-20 pt-xl-100 pb-xl-100">
              <h3 className="h3 ph-20 mb-40">Why does your company need customer research?</h3>
              <div className="ph-20">
                <div className="count-block w-100 mb-40">
                  <span className="count">1</span>
                  <p className="text-large mb-40">
                    To identify customer pains and eliminate barriers for boosting your revenue and
                    achieving your business goals
                  </p>
                </div>
                <div className="count-block w-100 mb-40">
                  <span className="count">2</span>
                  <p className="text-large mb-20">
                    To create a unique data-driven value proposition to attract your target audience
                  </p>
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
                Misidentifying your customers’ pains or their priorities to perform JBTD results in
                your team working for weeks/months on problems that your customers aren’t willing to
                pay for, which is $xxx.xx spent in vain.
              </p>
            </div>
          </div>
        </div>
      </div>

      <WhatWeWorked itemsArr={whatWeWorkedArr} />

      <section className="section section--title-right-img8 mb-40 mb-md-0">
        <div className="container p-0">
          <div className="row">
            <div className="col-12 col-md-6 col-xl-5 mb-40 mb-md-0 pb-xl-50 order-md-1 offset-xl-2">
              <div className="section__title-box section__title-box--img8 p-20 pt-120 pb-120">
                <h2 className="section__title section__title--small ta-left tt-upper ">
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

            <div className="col-12 col-md-6 col-xl-5 offset-xl-0 pt-md-50 pb-md-50">
              <div className="ph-20">
                <div className="count-block w-100 mb-40">
                  <span className="count">1</span>
                  <div className="text-large mb-20">
                    <h3 className="h3 mb-20">Evaluation of ideas</h3>
                    <p className="mb-10"> Is it feasible and profitable?</p>
                    <p className="mb-10">
                      {' '}
                      What is the budget estimate to create MVP and launch sales?
                    </p>
                    <p className="mb-10"> Does it have scaling potential for other markets?</p>
                    <p> How to estimate your product value and attract first investors?</p>
                  </div>
                </div>
                <div className="count-block w-100 mb-40">
                  <span className="count">2</span>
                  <div className="text-large mb-20">
                    <h3 className="h3 mb-20">Enhancement of economy</h3>
                    <p className="mb-10"> How to boost revenue for existing products/services?</p>
                    <p className="mb-10">
                      {' '}
                      What is the budget estimate to create MVP and launch sales?
                    </p>
                    <p className="mb-10"> How to reduce CAC? (Customer Acquisition Cost)</p>
                    <p className="mb-10">
                      {' '}
                      What core features are required for a successful release?
                    </p>
                    <p className="mb-10"> How to reach stable ROI?</p>
                    <p> What is the optimal development strategy for the X market?</p>
                  </div>
                </div>

                <div className="count-block w-100 mb-40">
                  <span className="count">3</span>
                  <div className="text-large mb-20">
                    <h3 className="h3 mb-20">Expansion to new territories</h3>
                    <p className="mb-10">
                      How to minimize the risks of ineffective spending and avoid negative ROI?
                    </p>
                    <p className="mb-10">How to build communication with the client?</p>
                    <p className="mb-10">What are the features your users need right now?</p>
                    <p className="mb-10">How can we increase sales/reduce CAC?</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--title-left-img7 mb-40 mb-md-0">
        <div className="container p-0">
          <div className="row">
            <div className="col-12 col-md-6 col-xl-5 mb-40 mb-md-0 pb-xl-50 ">
              <div className="section__title-box section__title-box--img7 p-20 pt-120 pb-120">
                <h2 className="section__title section__title--small tt-upper ta-left ta-md-right">
                  What you are
                  <br />
                  getting after
                  <br />
                  the research?
                </h2>
              </div>
            </div>

            <div className="col-12 col-md-6 col-xl-4 offset-xl-2 pt-md-50 pb-md-50">
              <div className="ph-20">
                <ListWithIcon arr={arr1} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--title-right-img3 mb-60 mb-md-0">
        <div className="container p-0">
          <div className="row">
            <div className="col-12 col-md-6 col-xl-5 offset-xl-2 order-md-1 mb-60 mb-md-0 pb-xl-50 ">
              <div className="section__title-box section__title-box--img3 section__title-box p-20 pt-120 pb-120">
                <h2 className="section__title section__title--small ta-left tt-upper">
                  how we do
                  <br />
                  qualitative <br />
                  research
                </h2>
              </div>
            </div>

            <div className="col-12 col-md-6 col-xl-4 offset-xl-1 pt-md-50 pb-md-50 pt-xl-100 pb-xl-100">
              <div className="ph-20 pl-70">
                <p className="text text--large text--primary text--fw-500 text--lighten tt-upper">
                  STEP 1
                </p>
                <p className="text text--large text--primary text--fw-500">QUALITATIVE RESEARCH</p>
                <p className="text text--fw-500 text--lighten mb-20">7-21 days</p>
              </div>
              <div className="ph-20 mb-40">
                <ListWithIcon arr={arr2} />
              </div>

              <div className="ph-20">
                <span className="line mb-20"></span>
                <p className="text text--dark italic mb-20">
                  All interviews are recorded and shared with you.
                </p>
                <p className="text text--dark italic mb-40">
                  Phone interviews usually last 30-60 mins.
                  <br />
                  We never compensate the respondents to avoid biased responses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--title-left-img4 mb-60 mb-md-0">
        <div className="container p-0">
          <div className="row">
            <div className="col-12 col-md-6 col-xl-5 mb-60 mb-md-0 pb-xl-50 ">
              <div className="section__title-box section__title-box--img4 section__title-box p-20 pt-120 pb-120">
                <h2 className="section__title section__title--small ta-left ta-md-right tt-upper">
                  how we do
                  <br />
                  qualitative <br />
                  research
                </h2>
              </div>
            </div>
            <div className="col-12 col-md-6 col-xl-4 offset-xl-2 pt-md-50 pb-md-50 pt-xl-100 pb-xl-100">
              <div className="ph-20 pl-70">
                <p className="text text--large text--primary text--fw-500 text--lighten tt-upper">
                  STEP 2
                </p>
                <p className="text text--large text--primary text--fw-500">QUANTITATIVE RESEARCH</p>
                <p className="text text--fw-500 text--lighten mb-20">14-21 days</p>
              </div>
              <div className="ph-20 mb-40">
                <ListWithIcon arr={arr3} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--title-right-img10 mb-60 mb-md-0">
        <div className="container p-0">
          <div className="row">
            <div className="col-12 col-md-6 col-xl-5 offset-xl-2 order-md-1 mb-60 mb-md-0 pb-xl-50 ">
              <div className="section__title-box section__title-box--img10 section__title-box p-20 pt-120 pb-120">
                <h2 className="section__title section__title--small ta-left tt-upper ">
                  How the final
                  <br />
                  rating of <br />
                  customer pains <br />
                  looks like
                </h2>
              </div>
            </div>

            <div className="col-12 col-md-6 col-xl-4 offset-xl-1 pt-md-50  pb-md-50 pt-xl-100 pb-xl-100">
              <div className="ph-20">
                <span className="line mb-30"></span>
              </div>

              <div className="ph-20 mb-30">
                <p className="text text--large text--primary text--fw-500 text--lighten ta-center tt-upper">
                  PROBLEM DISTRIBUTION <br />
                  FOR TARGET AUDIENCE
                </p>
              </div>
              <div className="ph-20 mb-40">
                <div className="problems">
                  <div className="history">
                    <div className="history__item mb-20">
                      <i className="color color--pink"></i>
                      <p className="text text--dark">
                        Audience regularly lose money <br /> and do not know how to solve it
                      </p>
                    </div>
                    <div className="history__item mb-20">
                      <i className="color color--primary"></i>
                      <p className="text text--dark">
                        Aware of the problem but do not consider it necessary to solve it
                      </p>
                    </div>
                    <div className="history__item mb-50">
                      <i className="color color--secondary"></i>
                      <p className="text text--dark">This problem did not arise</p>
                    </div>
                  </div>
                  <div className="problems">
                    <div className="problems__item mb-50">
                      <p className="text text--dark mb-20">Problem # 1</p>
                      <ul className="diagram">
                        <li className="w-80 color color--pink pl-30">80%</li>
                        <li className="w-5 color color--primary ta-center">5%</li>
                        <li className="w-15 color color--secondary ta-center">15%</li>
                      </ul>
                    </div>
                    <div className="problems__item mb-50">
                      <p className="text text--dark mb-20">Problem # 2</p>
                      <ul className="diagram">
                        <li className="w-70 color color--pink pl-30">70%</li>
                        <li className="w-20 color color--primary ta-center">20%</li>
                        <li className="w-10 color color--secondary ta-center">10%</li>
                      </ul>
                    </div>
                    <div className="problems__item mb-50">
                      <p className="text text--dark mb-20">Problem # 3</p>
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

      <section className="section section--title-left mb-40 mb-md-0">
        <div className="container p-0">
          <div className="row">
            <div className="col-12 col-md-6 col-xl-5 mb-60 mb-md-0 d-flex aligin-center">
              <div className="section__title-box p-20 pt-80 pb-80 pt-md-100">
                <h2 className="section__title ta-left ta-md-right">
                  WHAT WE
                  <br />
                  DELIVERED?
                </h2>
              </div>
            </div>

            <div className="col-12 col-md-6 col-xl-4 offset-xl-2">
              <div className="ph-20 pt-md-50 pb-md-20 pt-xl-100 pb-xl-100">
                <h3 className="h3 ph-20 mb-40 tt-upper ta-center">CONCLUSIONS & RECOMMENDATIONS</h3>
                <div className="ph-20">
                  <div className="count-block w-100 mb-40">
                    <span className="count">1</span>
                    <p className="text-large mb-40">
                      TOP-3 customers pains (customers need a solution and are willing to pay for
                      it).
                    </p>
                  </div>
                  <div className="count-block w-100 mb-40">
                    <span className="count">2</span>
                    <p className="text-large mb-20">Your Ideal Client Profile (ICP).</p>
                  </div>
                  <div className="count-block w-100 mb-40">
                    <span className="count">3</span>
                    <p className="text-large mb-20">
                      Hot leads ready to try your product upon its release.
                    </p>
                  </div>
                  <div className="count-block w-100 mb-40">
                    <span className="count">4 </span>
                    <p className="text-large mb-20">
                      Strategic product development recommendations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <LetsTalk contentSide={'right'} />
    </MainLayout>
  );
}
