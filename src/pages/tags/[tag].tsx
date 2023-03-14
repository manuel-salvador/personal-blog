import ArticleList from '@/components/ArticleList';
import MainLayout from '@/layouts/MainLayout';
import { getAllTags, getArticlesByTag } from '@/services/notion';
import { MTag } from '@/types';

export default function ArticlesByTagsPage({ articles, tag }: { articles: any; tag: string }) {
  const title = `${tag.toUpperCase()} | Blog Manu S.`;

  return (
    <MainLayout title={title}>
      <h2 className="text-3xl font-semibold mt-4 mb-10">Últimos articulos - {tag.toUpperCase()}</h2>
      <ArticleList articles={articles} />
    </MainLayout>
  );
}

export async function getStaticPaths() {
  const tags: MTag[] = await getAllTags();

  const paths = tags.map((tag) => ({ params: { tag: tag.name } }));

  return {
    paths,
    fallback: 'blocking',
  };
}

export async function getStaticProps(context: { params: { tag: string } }) {
  const { tag } = context.params;

  const articles = await getArticlesByTag(tag);

  return {
    props: { articles, tag },
    revalidate: 60 * 60 * 24 * 7,
  };
}
