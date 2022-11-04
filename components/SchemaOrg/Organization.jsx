
function strip(html) {
    var one = html.replace(/<\/?[^>]+(>|$)/gm, "");
    var two = one.replace(/[\r\n]\s*[\r\n]/gm, "");
    return two;
}

const Schema = () => {
    return (
            <script type="application/ld+json">
                {`{
                "@context":"https://schema.org",
                "@graph":[
                  {
                      "@type":"Organization",
                     "@id":"https://www.ltvcac.agency/#organization",
                     "name":"LTVCAC Agency",
                     "url":"https://www.ltvcac.agency/",
                     "sameAs":[
                          "https://linkedin.com/company/ltvcac-agency",
                          "https://facebook.com/ltvcac",
                          "https://instagram.com/ltvcac.agency",
                      ],
                         "logo":{
                         "@type":"ImageObject",
                         "@id":"https://seoquick.com.ua/#logo",
                         "url":"https://seoquick.com.ua/wp-content/uploads/2021/10/seoquick-600x600-1.png",
                         "width":336,
                         "height":333,
                         "caption":"LTVCAC"
                         },
                         "image":{
                              "@id":"https://www.ltvcac.agency/#logo"
                              }
                     },
                     {
                          "@type":"WebSite",
                          "@id":"https://www.ltvcac.agency/#website",
                          "url":"https://www.ltvcac.agency/",
                          "name":"LTVCAC Agency",
                          "publisher":{
                              "@id":"https://www.ltvcac.agency/#organization"
                              }
                     },
                     {
                          "@type":"WebPage",
                          "@id":"https://www.ltvcac.agency/#webpage",
                          "url":"https://www.ltvcac.agency/",
                          "inLanguage":"en-EN",
                          "name":"title",
                          "isPartOf":{
                              "@id":"https://www.ltvcac.agency/#website"
                              },
                          "about":{
                              "@id":"https://www.ltvcac.agency/#organization"
                              },
                          "datePublished":"2015-06-17T13:45:57+03:00",
                          "dateModified":"2022-10-20T08:15:44+03:00",
                          "description":"description"
                              }
                        ]
                    }`}
            </script>
    );
};

export default Schema;