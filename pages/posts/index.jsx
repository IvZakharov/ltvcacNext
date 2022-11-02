import axios from 'axios';

import Hero from '../../components/Hero/Hero';
import Ticker from '../../components/Ticker/Ticker';
import PostCard from '../../components/PostCard/PostCard';
import { MainLayout } from '../../layouts/MainLayout';
import Subscribe from '../../components/Subscribe/Subscribe';

export default function Blog({ posts }) {
  return (
    <MainLayout
      title={'Our blog - read content on web development, design and more | LTV:CAC'}
      description="Here you can find experts sharing their knowledge and experience in designing and developing websites, automating business processes, analyzing data, optimizing apps in stores and best practices in paid advertising channels. ">
      <Hero
        title={'Blog'}
        subtitle={'Our blog features only expert content from our team of experts.'}
        imageUrls={{ desktop: '/img/hero/1.jpg', mobile: '/img/hero/1mob.jpg' }}
      />
      <Ticker />
      <div className="blog-grid">
        <div className="container p-0">
          <div className="row">
            {posts &&
              posts.map((obj) => (
                <div key={obj.id} className={'col-12 col-md-6 col-xl-4 p-4'}>
                  <PostCard
                    slug={obj.attributes.slug}
                    image={
                      obj.attributes.postImage.data
                        ? obj.attributes.postImage.data.attributes.url
                        : '/img/placeholder.jpg'
                    }
                    title={obj.attributes.postName}
                    subtitle={obj.attributes?.subtitle}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
      <Subscribe />
    </MainLayout>
  );
}

export async function getServerSideProps() {
    try {
        const res = await axios.get(`${process.env.API_URL}/blogs?sort=createdAt:desc&populate=*`);
        const posts = await res.data.data;

        return {
            props: {
                posts,
            },
        };
    } catch (error) {
        return {error};
    }
}
