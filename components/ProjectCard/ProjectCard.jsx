import styles from './ProjectCard.module.scss';
import Link from 'next/link';

function ProjectCard({title, subtitle, tags, slug}) {
  let tagsArr;
  if (tags) {
    tagsArr = tags.split(',')
  } else {
    tagsArr = [];
  }
  
  
  return (
      <div className="col-12 col-md-6 p-0">
        <Link href={'/portfolio/[slug]'} as={`/portfolio/${slug}`}>
          <a>
            <article className={`${styles.projectCard}`}>
              <h3 className={`${styles.title} mb-20`}>{title}</h3>
              <p className={`${styles.subtitle} mb-30`}>{subtitle}</p>
              <ul className={`${styles.tags} tags mb-40`}>
                {tagsArr && tagsArr.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
              <button className={`${styles.button} button button--transparent`}>READ MORE</button>
            </article>
          </a>
        </Link>
      </div>
  );
}

export default ProjectCard;
