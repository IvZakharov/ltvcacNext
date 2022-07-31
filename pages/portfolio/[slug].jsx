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
    const res = await axios.get('http://localhost:1337/api/works');
    const projects = await res.data.data;
    const paths = projects.map((project) => ({ params: { slug: project.attributes.slug } }));

    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    return { error };
  }
}

export async function getStaticProps({ params }) {
  const { slug } = params;

  try {
    const res = await axios.get(
      `http://localhost:1337/api/works?populate=*&filters\[Slug\]=${slug}`,
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
