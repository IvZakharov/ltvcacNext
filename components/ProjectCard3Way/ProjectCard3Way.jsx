import styles from "./ProjectCard3Way.module.scss";
import Link from "next/link";

function ProjectCard3Way({title, subtitle, tags, slug, id}) {
    let tagsArr;
    if (tags) {
        tagsArr = tags.split(',')
    } else {
        tagsArr = [];
    }
    let size;
    if(id && id == 'big'){
        size = 'col-md-12';
    }


    return (
        <div className={`col-12 p-0 ${size}`}>
            <Link href={'/portfolio/[slug]'} as={`/portfolio/${slug}`}>
                <a className={styles.card}>
                    <article className={`${styles.projectCard}`}>
                        <h3 className={`${styles.title} mb-20`}>{title}</h3>
                        {}
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

export default ProjectCard3Way;