import axios from 'axios';
import Hero from '../../components/Hero/Hero';
import ProjectFull from '../../components/ProjectFull/ProjectFull';
import { MainLayout } from '../../layouts/MainLayout';

export default function Project({ project }) {
  const tagsArr = project.attributes?.Tags.split(',');

  return (
    <MainLayout
      title={project.attributes?.Seo?.Title}
      description={project.attributes?.Seo?.Description}
      keywords={project.attributes?.Seo?.Keywords}>
      <Hero
        title={project.attributes?.Title}
        subtitle={project.attributes?.Subtitle}
        heroImg={'imgFourth'}
        tags={tagsArr}
      />
      <ProjectFull project={project} />
    </MainLayout>
  );
}

export async function getStaticPaths() {
  try {
    const res = await axios.get('https://murmuring-ocean-17174.herokuapp.com/api/works');
    const projects = await res.data.data;
    const paths = projects.map((project) => ({ params: { slug: project.attributes.slug } }));
    
    return {
      paths,
      fallback: true,
    };
  } catch (error) {
    return { error };
  }
}

export async function getStaticProps({ params }) {
  try {
    const { slug } = params;
    const res = await axios.get(
      `https://murmuring-ocean-17174.herokuapp.com/api/works?populate=*&filters\[slug\]=${slug}`,
    );
    const data = await res.data.data;
    const project = data[0];

    return {
      props: { project },
    };
  } catch (error) {
    return { error };
  }
}
