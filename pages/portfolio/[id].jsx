import { projects } from '../../data/projects';
import Hero from '../../components/Hero/Hero';
import ProjectFull from '../../components/ProjectFull/ProjectFull';

function Project() {
  const project = projects.find((project) => project.id === id);

  return (
    <>
      <Hero
        title={project.title}
        subtitle={project.subtitle}
        heroImg={'imgFourths'}
        tags={project.tags}
      />
      <ProjectFull project={project} />
    </>
  );
}

export default Project;
