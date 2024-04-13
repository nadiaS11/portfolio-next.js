import Blogs from "../components/Blogs";

export interface Article {
  title: string;
  link: string;
  author: string;
  published: number;
  created: number;
  category: string[];
  content: string;
  enclosures: any[]; // You might want to define a specific type for enclosures if needed
  content_encoded: string;
  media: any; // You might want to define a specific type for media if needed
}

async function getData() {
  const res = await fetch(
    "https://v1.nocodeapi.com/nadiasultana/medium/kFWlrJJqeXGwhsXy"
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  console.log("from blog page getdata");

  return res.json();
}

export default async function BlogPage() {
  const data = await getData();
  return <Blogs data={data as Article[]} />;
}
