import ArticleList from '@/components/ArticleList';
import { getDatabase } from '@/services/notion';
import { ArticleType } from '@/types';
import MainLayout from '@/layouts/MainLayout';

type HomeProps = {
  articles: ArticleType[];
};

export default function Home({ articles }: HomeProps) {
  return (
    <MainLayout title="Blog Manu S.">
      <p className="text-3xl font-semibold mt-4 mb-10">Últimos articulos</p>
      <ArticleList articles={articles} />
    </MainLayout>
  );
}

export async function getStaticProps() {
  const database = await getDatabase();
  return {
    props: {
      articles: database,
    },
  };
}
