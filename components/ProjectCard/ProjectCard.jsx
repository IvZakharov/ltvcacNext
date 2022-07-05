import styles from './ProjectCard.module.scss';
import { Link } from 'react-router-dom';

function ProjectCard({ id, title, subtitle, tags }) {
  return (
    <div className="col-12 col-md-6 p-0">
      <Link to={id}>
        <article className={`${styles.projectCard}`}>
          <h3 className={`${styles.title} mb-20`}>{title}</h3>
          <p className={`${styles.subtitle} mb-30`}>{subtitle}</p>
          <ul className={`${styles.tags} tags mb-40`}>
            {tags.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          <button className={`${styles.button} button button--transparent`}>READ MORE</button>
        </article>
      </Link>
    </div>
  );
}

export default ProjectCard;
