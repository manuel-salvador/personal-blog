import { Client } from '@notionhq/client';
import { NotionAPI } from 'notion-client';

import { ArticleType } from '@/types';

const notionClient = new NotionAPI();

const notion = new Client({ auth: process.env.NOTION_KEY });
const databaseId = process.env.NOTION_DATABASE_ID as string;

export const getDatabase = async () => {
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      property: 'Published',
      checkbox: {
        equals: true,
      },
    },
    sorts: [
      {
        property: 'Created',
        direction: 'descending',
      },
    ],
  });

  return response.results;
};

export const getArticle = async (articleId: string) => {
  const response = await notionClient.getPage(articleId);

  return response;
};

export const getAllTags = async () => {
  const pages = (await getDatabase()) as ArticleType[];

  const tagCount: { [key: string]: { count: number; id: string } } = {};

  pages.forEach((article) => {
    article.properties.Tags.multi_select.forEach((tag) => {
      if (tag.name in tagCount) {
        tagCount[tag.name].count += 1;
      } else {
        tagCount[tag.name] = { count: 1, id: tag.id };
      }
    });
  });

  const tags = Object.keys(tagCount).map((tagName) => {
    return { name: tagName, count: tagCount[tagName].count, id: tagCount[tagName].id };
  });

  return tags;
};

export const getArticlesByTag = async (tag: string) => {
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      and: [
        {
          property: 'Published',
          checkbox: {
            equals: true,
          },
        },
        {
          or: [
            {
              property: 'Tags',
              multi_select: {
                contains: tag,
              },
            },
          ],
        },
      ],
    },
    sorts: [
      {
        property: 'Created',
        direction: 'descending',
      },
    ],
  });

  return response.results;
};
