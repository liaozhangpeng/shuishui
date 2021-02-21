import Head from "next/head";
import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <div className="container">
        <Head>
          <title>税税</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="container d-flex flex-column align-items-center">
          <div>
            <img src="/me.jpg" className="avatar" />
          </div>
          <div style={{ backgroundColor: "#fff", fontSize: "1.5em" }}>
            👩‍🦰 <strong>Hi 我是税税</strong> ✌
          </div>
        </div>
      </div>
    </Layout>
  );
}
