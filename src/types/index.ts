export interface ArticleType {
  object: string;
  id: string;
  created_time: string;
  last_edited_time: string;
  created_by: TedBy;
  last_edited_by: TedBy;
  cover: null | Cover;
  icon: null;
  parent: Parent;
  archived: boolean;
  properties: Properties;
  url: string;
}

export interface TedBy {
  object: string;
  id: string;
}

export interface Cover {
  type: string;
  external: {
    url: string;
  };
}

export interface Parent {
  type: string;
  database_id: string;
}

export interface Properties {
  Tags: Tags;
  Summary: Summary;
  Name: Name;
}

export interface Name {
  id: string;
  type: string;
  title: Title[];
}

export interface Title {
  type: string;
  text: Text;
  annotations: Annotations;
  plain_text: string;
  href: null;
}

export interface Annotations {
  bold: boolean;
  italic: boolean;
  strikethrough: boolean;
  underline: boolean;
  code: boolean;
  color: string;
}

export interface Text {
  content: string;
  link: null;
}

export interface Summary {
  id: string;
  type: string;
  rich_text: Title[];
}

export interface Tags {
  id: string;
  type: string;
  multi_select: MultiSelect[];
}

export interface MultiSelect {
  id: string;
  name: string;
  color: string;
}

export interface MTag {
  name: string;
  count: number;
  id: string;
}
