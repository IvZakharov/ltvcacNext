import axios from "axios";
import {getServerSideSitemap} from "next-sitemap";

export async function getServerSideProps() {
    try {
        const post = await axios.get(`${process.env.API_URL}/blogs?sort=createdAt:desc&populate=*`);
        const posts = await post.data.data;

        // const porfolio = await axios.get(`${process.env.API_URL}/portfolios?populate=*`);
        // const porfolios = await porfolio.data.data;

        const url = 'https://www.ltvcac.agency/posts/';
        //console.log(posts)
        const fields = [
            {
                loc: url,
                lastmod: new Date().toString(),
            },
            {
                loc: url,
                lastmod: new Date().toString(),
            }
        ]
        return getServerSideSitemap(ctx, fields, posts)
    } catch (error) {
        return {error};
    }
}

export default function Sitemap(posts){};