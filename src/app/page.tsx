import Homepage from "./components/HomePage";
import { Article } from "./blog/page";
// import { PiHouseLight, PiGithubLogoLight } from "react-icons/pi";
async function getData() {
  const res = await fetch(
    "https://v1.nocodeapi.com/nadiasultana/medium/kFWlrJJqeXGwhsXy"
  );
  const data = await res.json();
  console.log("Raw data from API:", data);
  return data;
}


async function page() {
  const data = await getData();

  return (
    <div>
      <Homepage data={data as Article[]} />{" "}
    </div>
  );
}

export default page;
