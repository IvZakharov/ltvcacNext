import styles from './ProjectFull.module.scss';
import Image from 'next/image';

function ProjectFull({ project }) {
  const images = project.attributes?.gallery.data;

  return (
    <section className={styles.projectFull}>
      <div className="container p-0">
        <div className="row">
          <div className="col-12 col-md-6 col-xl-4 pt-60 pb-60">
            <div className="ph-20">
              <h3 className="h3 mb-20">Project overview</h3>
              <pre className={styles.overview}>{project.attributes?.overview}</pre>
              <h3 className="h3 mb-20">What we delivered</h3>
              <pre className={styles.delivered}>{project.attributes?.delivered}</pre>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-7 offset-xl-1 lh-0 pt-xl-60 pb-xl-60">
            {images &&
              images.map((obj) => (
                <Image
                  key={obj.id}
                  alt={obj.attributes.name}
                  src={obj.attributes.url}
                  width={obj.attributes.width}
                  height={obj.attributes.height}
                />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectFull;
