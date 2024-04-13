import Blogs from "../components/Blogs";

export interface Article {
  title: string;
  link: string;
  author: string;
  published: number;
  created: number;
  categories: string[];
  content: string;
  enclosures: any[];
  content_encoded: string;
  media: any;
}

async function getData() {
  const res = await fetch(
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@nadia-sultana"
  );
  const data = await res.json();
  return data;
}

async function BlogPage() {
  const data = await getData();
  return <Blogs data={data.items as Article[]} />;
}

export default BlogPage;
