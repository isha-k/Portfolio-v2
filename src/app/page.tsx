import Homepage from "../pages/Home/Home";
import Petals from "./components/Petals";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | My Portfolio</title>
        <meta name="description" content="This is the homepage of my portfolio NextJs app"></meta>
      </Head>
      <Petals/>
      <Homepage/> 
    </>
  );
}
