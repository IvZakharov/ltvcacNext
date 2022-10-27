import axios from "axios";

export default function test ({posts}) {
    // const url = 'https://www.ltvcac.agency/porfolio/';
    // let slug = [
    //     'portfolio-interweave',
    //     'portfolio-loft_denim',
    //     'portfolio-togezzer',
    //     'portfolio-keyou',
    //     'portfolio-matahari_hills'
    // ];
    // let urls = []

    const url = 'https://www.ltvcac.agency/posts/'

    console.log(posts);

    slug.map(function (el){
       urls.push(url+el);
    });

    return (
    `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"> 
    ${posts && posts.map((obj) =>{
        <url>
            <loc>{url + obj.attributes.slug}</loc>
            <lastmod>{obj.attributes.updatedAt}</lastmod>
            <changefreq>daily</changefreq>
            <priority>0.7</priority>
        </url>
    }) }
    
    
    </urlset>`
    );

    console.log(urls);

}
export async function getServerSideProps() {
    try {
        const post = await axios.get(`${process.env.API_URL}/blogs?sort=createdAt:desc&populate=*`);
        const posts = await post.data.data;

        // const porfolio = await axios.get(`${process.env.API_URL}/portfolios?populate=*`);
        // const porfolios = await porfolio.data.data;

        return {
            props: {
                posts
            },
        };
    } catch (error) {
        return {error};
    }
}