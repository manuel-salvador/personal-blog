import React from 'react';

import { ArticleType } from '@/types';

import Article from './Article';

type Props = {
  articles: ArticleType[];
};

export default function ArticleList({ articles }: Props) {
  return (
    <ul>
      {articles.map((article) => (
        <Article article={article} key={article.id} />
      ))}
    </ul>
  );
}
