import React from 'react';
import Article from '../components/Article/Article';
import data from '../data/article1.json';
import {mapContributorsToNames} from '../helpers/ArticlesInfo'

const contributorNames = mapContributorsToNames(data._embedded.contributors)
const Article1 = () => (
  <Article title={data.title} dates={data.dates} contributors={contributorNames} source={data.source} sourceUrl={data.sourceURL}>
    {JSON.stringify(data.text)}
  </Article>
);

export default Article1;
