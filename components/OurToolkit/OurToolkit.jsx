import styles from './OurToolkit.module.scss';

function OurToolkit() {
  const itemsFirsts = [
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

  const itemsSeconds = [
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

  return (
    <section className="section section--title-right mb-60 mb-md-0">
      <div className="container p-0">
        <div className="row">
          <div className="col-12 col-md-6 col-xl-5 offset-xl-1 mb-60 mb-md-0 order-md-1 pb-xl-50 d-xl-flex flex-column justify-content-between">
            <div className="section__title-box pl-20 pt-80 pb-160 pt-md-100 pb-xl-0">
              <h2 className="section__title ta-left">
                OUR
                <br />
                TOOLKIT
              </h2>
            </div>
            <a href="https://tally.so/r/wkdaBd/">
              <button className="button button--transparent mr-auto d-none d-md-block CTA">
                CONTACT US
              </button>
            </a>
          </div>

          <div className="col-8 col-md-6 col-xl-6 pt-md-50 pb-md-50 pt-xl-130 pb-xl-160">
            <div className={`${styles.ourToolkit} ph-20 row`}>
              <div className="col-12 col-xl-6">
                {itemsFirsts.map((obj, i) => (
                  <div key={i} className={`${styles.item}`}>
                    <i className={styles.icon}>
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M26.3522 2.19608H5.64629C3.74037 2.19608 2.19531 3.74113 2.19531 5.64706V26.3529C2.19531 28.2589 3.74037 29.8039 5.64629 29.8039H26.3522C28.2581 29.8039 29.8032 28.2589 29.8032 26.3529V5.64706C29.8032 3.74113 28.2581 2.19608 26.3522 2.19608Z"
                          stroke="#23A6F0"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M10.8242 16L14.2752 19.451L21.1772 12.549"
                          stroke="#23A6F0"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </i>
                    <div className={styles.info}>
                      <h3 className="h3 mb-10">{obj.title}</h3>
                      <p className={styles.text}>{obj.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="col-12 col-xl-6 pr-xl-30">
                {itemsSeconds.map((obj, i) => (
                  <div key={i} className={`${styles.item}`}>
                    <i className={styles.icon}>
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M26.3522 2.19608H5.64629C3.74037 2.19608 2.19531 3.74113 2.19531 5.64706V26.3529C2.19531 28.2589 3.74037 29.8039 5.64629 29.8039H26.3522C28.2581 29.8039 29.8032 28.2589 29.8032 26.3529V5.64706C29.8032 3.74113 28.2581 2.19608 26.3522 2.19608Z"
                          stroke="#23A6F0"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M10.8242 16L14.2752 19.451L21.1772 12.549"
                          stroke="#23A6F0"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </i>
                    <div className={styles.info}>
                      <h3 className="h3 mb-10">{obj.title}</h3>
                      <p className={styles.text}>{obj.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurToolkit;
