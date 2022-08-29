import axios from 'axios';
import Hero from '../../components/Hero/Hero';
import Ticker from '../../components/Ticker/Ticker';
import HeroAdvantages from '../../components/HeroAdvantages/HeroAdvantages';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import { MainLayout } from '../../layouts/MainLayout';
import LetsTalk from '../../components/LetsTalk/LetsTalk';

export default function Portfolio({ projects }) {
  return (
    <MainLayout
      title={'Our cases'}
      description="Some of the projects we worked on. Feel free to request for more!">
      <Hero
        title={'Our cases'}
        subtitle={'Some of the projects we worked on. Feel free to request for more!'}
        imageUrls={{ desktop: '/img/hero/5.jpg', mobile: '/img/hero/5mob.jpg' }}
      />
      <Ticker />
      <HeroAdvantages />
      <div className="portfolio-grid">
        <div className="container p-0">
          <div className="row">
            {projects &&
              projects.map((obj) => (
                <ProjectCard
                  slug={obj.attributes.slug}
                  key={obj.id}
                  title={obj.attributes.projectName}
                  subtitle={obj.attributes?.subtitle}
                  tags={obj.attributes?.tags}
                />
              ))}
          </div>
        </div>
      </div>
      <LetsTalk contentSide={'left'} />
    </MainLayout>
  );
}

export async function getServerSideProps() {
  try {
    const res = await axios.get(
      'https://ltvcac-admin-8hyn2.ondigitalocean.app/api/portfolios?populate=*',
    );
    const projects = await res.data.data;

    return {
      props: {
        projects,
      },
    };
  } catch (error) {
    return { error };
  }
}
