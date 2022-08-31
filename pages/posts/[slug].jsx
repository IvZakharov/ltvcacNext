import { HeroPost } from '../../components/HeroPost/HeroPost';
import PostFull from '../../components/PostFull/PostFull';
import { MainLayout } from '../../layouts/MainLayout';
import axios from 'axios';

export default function Post({ post }) {
  return (
    <MainLayout
      title={post.attributes?.Seo?.metaTitle}
      description={post.attributes?.Seo?.metaDescription}
      keywords={post.attributes?.Seo?.keywords}>
      {post && (
        <HeroPost
          title={post.attributes.postName}
          subtitle={post.attributes.subtitle}
          image={
            post.attributes.postImage.data
              ? post.attributes.postImage.data.attributes.formats.large.url
              : ''
          }
        />
      )}
      {post && <PostFull content={post.attributes.content} />}
    </MainLayout>
  );
}

export async function getServerSideProps({ params }) {
  try {
    const { slug } = params;
    console.log(process.env.API_URL);
    const res = await axios.get(`${process.env.API_URL}/blogs?populate=*&filters\[slug\]=${slug}`);

    const data = await res.data.data;
    const post = data[0];

    return {
      props: { post },
    };
  } catch (error) {
    return { error };
  }
}
