export default function test () {
    const url = 'https://www.ltvcac.agency/porfolio/';
    let slug = [
        'portfolio-interweave',
        'portfolio-loft_denim',
        'portfolio-togezzer',
        'portfolio-keyou',
        'portfolio-matahari_hills'
    ];
    let urls = []

    slug.map(function (el){
       urls.push(url+el);
    });

    return (
    `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"> 
    <url>
      <loc>http://www.example.com/foo.html</loc>
      <lastmod>2021-01-01</lastmod>
    </url>
    </urlset>`
    );

    console.log(urls);

}
