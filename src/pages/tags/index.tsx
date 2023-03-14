import Link from 'next/link';

import { getAllTags } from '@/services/notion';
import { MTag } from '@/types';
import MainLayout from '@/layouts/MainLayout';

type Props = {
  tags: MTag[];
};

export default function TagsPage({ tags }: Props) {
  return (
    <MainLayout title="Tags | Blog Manu S.">
      <h2 className="text-3xl font-semibold mt-4 mb-10 text-center">Tags</h2>
      <ul className="flex justify-center gap-8 uppercase font-semibold">
        {tags.map((tag) => (
          <li key={tag.id}>
            <Link href={`/tags/${tag.name}`} className="flex gap-2">
              <span className="text-cyan-400 hover:text-cyan-300">{tag.name}</span>
              <span className="text-sm">({tag.count})</span>
            </Link>
          </li>
        ))}
      </ul>
    </MainLayout>
  );
}

export async function getStaticProps() {
  const tags = await getAllTags();
  return {
    props: {
      tags,
    },
  };
}
