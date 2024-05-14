import React from 'react';
import styles from './Article.module.css';

// import { useLocation } from 'react-router-dom';
interface Props {
  title: string;
  source: string;
  sourceUrl: string;
  // contributors?: Object[];
  // mediaEmbedded?: Object[];
  dates?: {
    published: string;
    updated?: string;
  };
};

const Article = ({ title, dates, source, sourceUrl }: Props): JSX.Element => {
  return (
    <article className={styles.embedded}>
    </article>
  );
};

export default Article;
