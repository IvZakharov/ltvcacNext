import styles from './PostFull.module.scss';

import Image from 'next/image';

const parse = require('html-react-parser');

function PostFull({ content }) {
  const contentData = JSON.parse(content);
  let blocks;
  if (contentData) {
    blocks = contentData.blocks;
  } else {
    blocks = false;
  }

  const renderBlocks = (block) => {
    switch (block.type) {
      case 'header':
        const level = block.data?.level;
        return level === 1 ? (
          <h1 className={styles.title}>{block.data?.text}</h1>
        ) : level === 2 ? (
          <h2 className={styles.title}>{block.data?.text}</h2>
        ) : level === 3 ? (
          <h3 className={styles.title}>{block.data?.text}</h3>
        ) : level === 4 ? (
          <h4 className={styles.title}>{block.data?.text}</h4>
        ) : level === 5 ? (
          <h5 className={styles.title}>{block.data?.text}</h5>
        ) : (
          <h6 className={styles.title}>{block.data?.text}</h6>
        );
      case 'paragraph':
        return <p className={styles.text}>{parse(block.data?.text)}</p>;
      case 'image':
        return (
          <Image
            src={block.data?.file?.url}
            width={block.data?.file?.width}
            height={block.data?.file?.height}
            alt={block.data?.file?.alt}
            className={styles.image}
          />
        );
      case 'list':
        return (
          <ul className={styles.list}>
            {block.data?.items.map((item, index) => (
              <li key={index}>{parse(item)}</li>
            ))}
          </ul>
        );
      case 'warning':
        return (
          <div className={styles.warning}>
            <b>{block.data?.title}</b> <span>{parse(block.data?.message)}</span>
          </div>
        );
      case 'code':
        return <code className={styles.code}>{parse(block.data?.code)}</code>;
      case 'raw':
        return <pre className={styles.raw}>{block.data?.html}</pre>;
      case 'quote':
        return (
          <div className={styles.quote}>
            <q>{parse(block.data?.text)}</q>
            <span>{parse(block.data?.caption)}</span>
          </div>
        );
      case 'checklist':
        <ul className={styles.checklist}>
          {block.data?.items.map((item, index) => (
            <li key={index}>{item.text}</li>
          ))}
        </ul>;
      case 'delimiter':
        return <span className={styles.delimiter}></span>;
      default:
        <div></div>;
    }
  };

  return (
    <section className={styles.postFull}>
      <div className="container p-0">
        <div className={styles.content}>
          {blocks &&
            blocks.map((obj, index) => (
              <div className={styles.block} key={index}>
                {renderBlocks(obj)}
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default PostFull;
