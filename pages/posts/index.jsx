import axios from 'axios';
import urlBuilder from '../../lib/imageUrl';
import Hero from '../../components/Hero/Hero';
import Ticker from '../../components/Ticker/Ticker';
import PostCard from '../../components/PostCard/PostCard';
import { MainLayout } from '../../layouts/MainLayout';

export default function Blog({ posts }) {
  return (
    <MainLayout
      title={'Blog'}
      description="Some of the projects we worked on. Feel free to request for more!">
      <Hero
        title={'Blog'}
        subtitle={'Some of the projects we worked on. Feel free to request for more!'}
        heroImg={'imgFourth'}
      />
      <Ticker />
      <div className="blog-grid">
        <div className="container p-0">
          <div className="row">
            {posts &&
              posts.map((obj) => (
                <div key={obj.id} className={'col-12 col-md-6 col-xl-4 p-4'}>
                  <PostCard
                    slug={obj.attributes.Slug}
                    image={obj.attributes.postImage.data ? urlBuilder(obj.attributes.postImage.data.attributes.url) : '/img/placeholder.jpg'}
                    title={obj.attributes.Title}
                    subtitle={obj.attributes?.Subtitle}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export async function getStaticProps() {
  try {
    const res = await axios.get('https://murmuring-ocean-17174.herokuapp.com/api/posts?populate=*');
    const posts = await res.data.data;

    return {
      props: {
        posts,
      },
    };
  } catch (error) {
    return { error };
  }
}
