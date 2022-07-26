import urlBuilder from '../../lib/imageUrl';
import { HeroPost } from '../../components/HeroPost/HeroPost';
import PostFull from '../../components/PostFull/PostFull';
import { MainLayout } from '../../layouts/MainLayout';
import axios from 'axios';

export default function Post({ post }) {
  return (
    <MainLayout
      title={post.attributes?.Seo?.Title}
      description={post.attributes?.Seo?.Description}
      keywords={post.attributes?.Seo?.Keywords}>
      {post && (
        <HeroPost
          title={post.attributes.Title}
          subtitle={post.attributes.Subtitle}
          image={urlBuilder(post.attributes?.postImage?.data.attributes.url)}
        />
      )}
      {post && <PostFull content={post.attributes.body} />}
    </MainLayout>
  );
}

export async function getStaticPaths() {
  const res = await axios.get('http://localhost:1337/api/posts');
  const posts = await res.data.data;
  const paths = posts.map((post) => ({ params: { slug: post.attributes.Slug } }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;

  const res = await axios.get(`http://localhost:1337/api/posts?populate=*&filters\[Slug\]=${slug}`);
  const data = await res.data.data;
  const post = data[0];

  return {
    props: { post },
  };
}
