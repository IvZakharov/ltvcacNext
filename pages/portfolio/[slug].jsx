import axios from 'axios';
import Hero from '../../components/Hero/Hero';
import ProjectFull from '../../components/ProjectFull/ProjectFull';
import { MainLayout } from '../../layouts/MainLayout';

export default function Project({ project }) {
  let tagsArr;
  if (project.attributes.tags) {
    tagsArr = project.attributes.tags.split(',');
  } else {
    tagsArr = [];
  }

  return (
    <MainLayout
      title={project.attributes?.Seo?.metaTitle}
      description={project.attributes?.Seo?.metaDescription}
      keywords={project.attributes?.Seo?.keywords}>
      <Hero
        title={project.attributes?.projectName}
        subtitle={project.attributes?.subtitle}
        imageUrls={{ desktop: '/img/hero/5.jpg', mobile: '/img/hero/5mob.jpg' }}
        tags={tagsArr}
      />
      <ProjectFull project={project} />
    </MainLayout>
  );
}

export async function getServerSideProps({ params }) {
  try {
    const { slug } = params;
    const res = await axios.get(
      `${process.env.API_URL}/portfolios?populate=*&filters\[slug\]=${slug}`,
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
