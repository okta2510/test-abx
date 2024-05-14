import React from 'react';
import styles from './Article.module.css';
import MoreStories from '../Organisms/MoreStories/MoreStories'
import ArticleContent from '../Molecules/ArticleContent/ArticleContent'
import PeopleList from '../Molecules/PeopleList/PeopleList'
import {dateFormat} from '../../helpers/ArticlesInfo'
// import { useLocation } from 'react-router-dom';
interface Props {
  children: React.ReactNode;
  title: string;
  source: string;
  sourceUrl: string;
  contributors?: Object[];
  mediaEmbedded?: Object[];
  dates?: {
    published: string;
    updated?: string;
  };
};

const formatToJSON = function(val:any){
  return JSON.parse(val)
}

const Article = ({ children, title, contributors, dates, source, sourceUrl, mediaEmbedded }: Props): JSX.Element => {
  return (
    <article className={styles.article}>
      <div className={styles.main}>
        <div className={styles.header}>
          <h1 className=''>{title}</h1>
          {contributors && contributors.length && (
            <span className={styles.contributors}>
              <a className='text-blue-600' href={sourceUrl} target="_blank" rel="noreferrer">{source}</a> / By <PeopleList people={contributors}></PeopleList>
            </span>
          )}
          {dates && (
            <span className={styles.date}>
              {dates.published && (<span>Posted {dateFormat(dates.published)}</span>)}
              {dates.updated && (<span>{' '}Updated {dateFormat(dates.updated)}</span>)}
            </span>
          )}
        </div>
        <div className={styles.content}>
          <ArticleContent content={formatToJSON(children)} mediaEmbedded={mediaEmbedded} />
        </div>
      </div>
      <div className={styles.sidebar}>
        <h2>More Stories</h2>
        <MoreStories />
        <div className={styles.moreStories} />
      </div>
    </article>
  );
};

export default Article;
