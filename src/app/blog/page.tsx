import Blogs from "../components/Blogs";

export interface Article {
  title: string;
  link: string;
  author: string;
  published: number;
  created: number;
  category: string[];
  content: string;
  enclosures: any[];
  content_encoded: string;
  media: any;
}

async function getData() {
  const res = await fetch(
    "https://v1.nocodeapi.com/nadiasultana/medium/kFWlrJJqeXGwhsXy"
  );
  const data = await res.json();
  console.log("Raw data from API:", data);
  return data;
}

async function BlogPage() {
  const data = await getData();
  return <Blogs data={data as Article[]} />;
}

export default BlogPage;
