import Homepage from "./components/HomePage";
import { Article } from "./blog/page";
// import { PiHouseLight, PiGithubLogoLight } from "react-icons/pi";
async function getData() {
  const res = await fetch(
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@nadia-sultana"
  );
  const data = await res.json();
  console.log("Raw data from API:", data);
  return data;
}

async function page() {
  const data = await getData();
  console.log(data.items);
  return (
    <div>
      <Homepage data={data?.items as Article[]} />{" "}
    </div>
  );
}

export default page;
