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

          image={post.attributes.postImage.data ? urlBuilder(post.attributes.postImage.data.attributes.url) : ''}
        />
      )}
      {post && <PostFull content={post.attributes.body} />}
    </MainLayout>
  );
}

export async function getStaticPaths() {
  try {
    const res = await axios.get('https://murmuring-ocean-17174.herokuapp.com/api/posts');
    const posts = await res.data.data;
    const paths = posts.map((post) => ({ params: { slug: post.attributes.Slug } }));
  
    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    return { error };
  }
}

export async function getStaticProps({ params }) {
  try {
    const { slug } = params;
    const res = await axios.get(
      `https://murmuring-ocean-17174.herokuapp.com/api/posts?populate=*&filters\[Slug\]=${slug}`,
    );
    const data = await res.data.data;
    const post = data[0];

    console.log(data);

    return {
      props: { post },
    };
  } catch (error) {
    return { error };
  }
}
