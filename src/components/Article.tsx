import React from 'react';
import Link from 'next/link';

import { ArticleType } from '@/types';

type Props = {
  article: ArticleType;
};

export default function Article({ article }: Props) {
  const date = new Date(article.last_edited_time).toLocaleString('es-AR', {
    month: 'long',
    day: '2-digit',
    year: 'numeric',
  });
  return (
    <li className="border-t-2 border-gray-700 py-10 flex gap-20">
      <div className="w-52">
        <p className="text-gray-400 text-lg">{date}</p>
      </div>
      <div className="flex flex-col gap-3 flex-1">
        <div>
          <h3 className="text-xl font-semibold">{article.properties.Name.title[0].text.content}</h3>
          <ul className="flex gap-4 mt-2 text-cyan-400">
            {article.properties.Tags.multi_select.map((tag) => (
              <li key={tag.id}>{tag.name.toUpperCase()}</li>
            ))}
          </ul>
        </div>
        <p className="text-gray-400 text-lg">
          {article.properties.Summary.rich_text[0]?.text.content}
        </p>
        <Link href={`/article/${article.id}`} className="text-cyan-400">
          Leer mas →
        </Link>
      </div>
    </li>
  );
}
