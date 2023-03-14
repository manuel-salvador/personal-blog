import { NotionRenderer } from 'react-notion-x';
import { Code } from 'react-notion-x/build/third-party/code';
import { getBlockTitle } from 'notion-utils';

import { getDatabase, getArticle } from '@/services/notion';
import MainLayout from '@/layouts/MainLayout';

export default function ArticlePage({ article }: any) {
  const keys = Object.keys(article.block || {});
  const block = article.block[keys[0]]?.value;
  let title = getBlockTitle(block, article);

  title = title + ' | Blog Manu S.';

  return (
    <MainLayout title={title}>
      <NotionRenderer
        recordMap={article}
        darkMode
        fullPage
        components={{ Code, Header: () => null }}
        className="bg-transparent"
      />
    </MainLayout>
  );
}

export async function getStaticPaths() {
  const database = await getDatabase();

  const paths = database.map((page) => ({ params: { id: page.id } }));

  return {
    paths,
    fallback: 'blocking',
  };
}

export async function getStaticProps(context: { params: { id: string } }) {
  const { id } = context.params;

  const article = await getArticle(id);

  return {
    props: { article },
    revalidate: 60 * 60 * 24 * 7,
  };
}
