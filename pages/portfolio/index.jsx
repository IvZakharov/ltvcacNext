import axios from 'axios';
import Hero from '../../components/Hero/Hero';
import Ticker from '../../components/Ticker/Ticker';
import HeroAdvantages from '../../components/HeroAdvantages/HeroAdvantages';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import { MainLayout } from '../../layouts/MainLayout';

export default function Portfolio({ projects }) {
  return (
    <MainLayout
      title={'Our cases'}
      description="Some of the projects we worked on. Feel free to request for more!">
      <Hero
        title={'Our cases'}
        subtitle={'Some of the projects we worked on. Feel free to request for more!'}
        heroImg={'imgFourth'}
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
                  title={obj.attributes.Title}
                  subtitle={obj.attributes.Subtitle}
                  tags={obj.attributes?.Tags}
                />
              ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export async function getStaticProps() {
  try {
    const res = await axios.get('https://murmuring-ocean-17174.herokuapp.com/api/works');
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
