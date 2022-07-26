import Hero from '../../components/Hero/Hero';
import Ticker from '../../components/Ticker/Ticker';
import ListWithIcon from '../../components/ListWithIcon/ListWithIcon';
import LetsTalk from '../../components/LetsTalk/LetsTalkReverse';
import { MainLayout } from '../../layouts/MainLayout';

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
      text: 'Ideal Client Profile (ICP), List of hot topics for SMM and SEO articles: identify customers pains and offer solutions, Strategic brand communication enabled.',
      iconCheck: true,
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
        heroImg={'imgThird'}
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
                <div className="count-block w-100 mb-40 mb-md-0">
                  <span className="count">1</span>
                  <p className="text-large mb-40">
                    To identify customer pains and eliminate barriers for boosting your revenue and
                    achieving your business goals
                  </p>
                </div>
                <div className="count-block w-100 mb-40 mb-md-0">
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
                Misidentifying your customers&apos; critical tasks to perform (JTBD) or problems
                results in your team working for weeks/months on problems that your customers
                aren&apos;t willing to pay for - which is xx.xxx$.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="section section--title-right-img2 mb-40 mb-md-0">
        <div className="container p-0">
          <div className="row">
            <div className="col-12 col-md-6 order-md-1 col-xl-5 offset-xl-1 mb-40 mb-md-0 pb-xl-50 ">
              <div className="section__title-box section__title-box--img2 p-20 pt-120 pb-120">
                <h2 className="section__title section__title--small ta-left">
                  WHAT
                  <br />
                  QUESTIONS
                  <br />
                  MUST BE
                  <br />
                  ANSWERED?
                </h2>
              </div>
            </div>

            <div className="col-12 col-md-6 col-xl-6 pt-md-50 pb-md-50">
              <div className="ph-20">
                <h3 className="h3 mb-20">Evaluation of ideas</h3>
                <p className="text-large mb-20">+ Is it feasible and profitable?</p>
                <p className="text-large mb-20">
                  + What is the budget estimate to create MVP and launch sales?
                </p>
                <p className="text-large mb-20">
                  + Does it have scaling potential for other markets?
                </p>
                <p className="text-large mb-60">
                  + How to estimate your product value and attract first investors?
                </p>

                <h3 className="h3 mb-20">Enhancement of economy</h3>
                <p className="text-large mb-20">
                  + How to boost revenue for existing products/services??
                </p>
                <p className="text-large mb-20">
                  + What is the budget estimate to create MVP and launch sales?
                </p>
                <p className="text-large mb-20">+ How to reduce CAC? (Customer Acquisition Cost)</p>
                <p className="text-large mb-20">
                  + What the core features required for a successful release?
                </p>
                <p className="text-large mb-20">+ How to reach stable ROI?</p>
                <p className="text-large mb-60">
                  + What is the optimal development strategy for the X market?
                </p>

                <h3 className="h3 mb-20">Expansion to new territories</h3>
                <p className="text-large mb-20">
                  + How to minimize the risks of ineffective spending and avoid negative ROI?
                </p>
                <p className="text-large mb-20">+ How to build communication with the client?</p>
                <p className="text-large mb-20">
                  + What are the features your users need right now?
                </p>
                <p className="text-large mb-20">+ How can we increase sales/reduce CAC?</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--title-left-img3 mb-60 mb-md-0">
        <div className="container p-0">
          <div className="row">
            <div className="col-12 col-md-6 col-xl-6 mb-60 mb-md-0 pb-xl-50 ">
              <div className="section__title-box section__title-box--img3 p-20 pt-120 pb-120">
                <h2 className="section__title section__title--small ta-left ta-md-right">
                  WHAT YOU ARE
                  <br />
                  GETTING AFTER <br />
                  THE RESEARCH?
                </h2>
              </div>
            </div>

            <div className="col-12 col-md-6 col-xl-4 offset-xl-1 pt-md-50 pb-md-50 pt-xl-100 pb-xl-100">
              <div className="ph-20">
                <ListWithIcon arr={arr1} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--title-right mb-40 mb-md-0">
        <div className="container p-0">
          <div className="row">
            <div className="col-12 col-md-6 col-xl-5 mb-40 mb-md-0 order-md-1 d-flex offset-xl-1 aligin-center">
              <div className="section__title-box section__title-box--img2 p-20 pt-80 pb-80 pt-md-100">
                <h2 className="section__title ta-left section__title--large">
                  HOW
                  <br />
                  IT
                  <br />
                  WORKS
                </h2>
              </div>
            </div>

            <div className="col-12 col-md-6 col-xl-6">
              <div className="ph-20 pt-md-50 pb-md-20 pt-xl-100 pb-xl-100">
                <h3 className="h3 mb-60">3 steps to a successful customer research</h3>
                <p className="text text--large text--primary text--fw-500 text--lighten tt-upper">
                  STEP 1
                </p>
                <p className="text text--large text--primary text--fw-500">QUALITATIVE RESEARCH</p>
                <p className="text text--fw-500 text--lighten mb-20">7-21 days</p>
                <ul className="list-grey">
                  <li className="mb-20">
                    <p className="text text--dark">
                      We brainstorm with your team to identify top audience pains and key clients
                      problems.
                    </p>
                  </li>
                  <li className="mb-20">
                    <p className="text text--dark">
                      Preparing open-ended questions for phone interviews.
                    </p>
                  </li>
                  <li className="mb-20">
                    <p className="text text--dark">
                      We build a list of potential respondents and get your approval.
                    </p>
                  </li>
                  <li className="mb-20">
                    <p className="text text--dark">
                      We process the results and refine the initial pains list.
                    </p>
                  </li>
                  <span className="line mb-20"></span>
                  <p className="text text--dark italic mb-20">
                    All interviews are recorded and shared with you.
                  </p>
                  <p className="text text--dark italic mb-40">
                    Phone interviews usually last 30-60 mins.
                    <br />
                    We never compensate the respondents to avoid biased responses.
                  </p>

                  <p className="text text--large text--primary text--fw-500 text--lighten tt-upper">
                    STEP 2
                  </p>
                  <p className="text text--large text--primary text--fw-500">
                    QUALITATIVE RESEARCH
                  </p>
                  <p className="text text--dark text--fw-500 text--lighten mb-20">14-21 days</p>
                  <ul className="list-grey">
                    <li className="mb-20">
                      <p className="text text--dark">
                        We compile pain stories based on qualitative research results and present
                        case studies where customers lost their money or got stuck with the
                        development. Case studies are presented below in an intuitive way and can be
                        easily grasped by the general audiences.
                      </p>
                    </li>
                    <li className="mb-20">
                      <p className="text text--dark">
                        We design an online survey using typeform.com and incorporate pain stories
                        in it. Respondents are suggested multiple-choice questions and should pick
                        one that describes their case most accurately: <br /> - I miss opportunities
                        or loose money due to X problem; <br /> - I had an X problem and solved it
                        with Y - I didn&apos;t have an X problem, or it didn&apos;t bother me..
                      </p>
                    </li>
                    <li className="mb-20">
                      <p className="text text--dark">
                        We design and produce your marketing materials, set up your Facebook page
                        and Facebook Ads account, and develop your advertising campaign.
                      </p>
                    </li>
                    <li className="mb-20">
                      <p className="text text--dark">
                        We set up your Google Analytics account to track conversions from Facebook
                        Ads and launch your advertising campaign.
                      </p>
                    </li>
                    <li className="mb-60">
                      <p className="text text--dark">
                        We process survey results, extract stats, and verify initial hypotheses.to
                        track conversions from Facebook Ads and launch your advertising campaign.
                      </p>
                    </li>
                  </ul>

                  <p className="text text--large text--primary text--fw-500 text--lighten tt-upper">
                    STEP 3
                  </p>
                  <p className="text text--large text--primary text--fw-500">
                    CONCLUSIONS RECOMMENDATIONS
                  </p>
                  <p className="text text--fw-500 text--lighten mb-20">2-5 days</p>
                  <ul className="list-grey">
                    <li className="mb-20">
                      <p className="text text--dark">
                        TOP-3 customers pains (customers need a solution and are willing to pay for
                        it).
                      </p>
                    </li>
                    <li className="mb-20">
                      <p className="text text--dark">Your Ideal Client Profile (ICP).</p>
                    </li>
                    <li className="mb-20">
                      <p className="text text--dark">
                        Hot leads ready to try your product upon its release.
                      </p>
                    </li>
                    <li className="mb-20">
                      <p className="text text--dark">
                        Strategic product development recommendations.
                      </p>
                    </li>
                  </ul>
                </ul>
                <span className="line mb-25"></span>
                <h3 className="text text--large text--primary text--fw-500 ml-50 mb-30">
                  PROBLEM DISTRIBUTION <br /> FOR TARGET AUDIENCE
                </h3>
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
                        Know about such a problem but do not <br />
                        consider it necessary to solve it
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
      <LetsTalk />
    </MainLayout>
  );
}
