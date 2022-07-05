import styles from './ProjectFull.module.scss';

function ProjectFull({ project }) {
  return (
    <section className={styles.projectFull}>
      <div className="container p-0">
        <div className="row">
          <div className="col-12 col-md-6 col-xl-4 pt-60 pb-60">
            <div className="ph-20 ">
              <h3 className="h3 mb-20">Project overview</h3>
              <ul className={styles.overview}>
                {project.overview.map((item, i) => (
                  <li key={i} className="text-large">
                    {item}
                  </li>
                ))}
              </ul>

              <h3 className="h3 mb-20">What we delivered</h3>
              <ul className={styles.delivered}>
                {project.delivered.map((item, i) => (
                  <li key={i} className="text-large">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-7 offset-xl-1 lh-0 pt-xl-60 pb-xl-60">
            {project.imagesUrl.map((obj, i) => (
              <picture loading="lazy" key={i} className="lh-0">
                <source
                  loading="lazy"
                  srcSet={`${obj.desk}, ${obj.desk2x} 2x`}
                  media="(min-width: 1200px)"
                />
                <img
                  loading="lazy"
                  src={obj.mob}
                  className="img"
                  alt=""
                  srcSet={`${obj.mob2x} 2x`}
                />
              </picture>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectFull;
