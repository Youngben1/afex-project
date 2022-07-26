import { useSession } from "next-auth/react";
import Head from "next/head";
import Navbar from "../components/Navbar";

const Home = () => {
  const {data: session} = useSession();
  



  return (
    <div>
      <Head>
        <title>Afex</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <Navbar />
      </div>
    </div>
  );
};

export default Home;
