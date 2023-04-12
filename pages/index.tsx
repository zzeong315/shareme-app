import Link from "next/link";
import React from "react";
import FloationgButton from "../components/floating-button";
import Layout from "../components/layout";
import Tweet from "../components/tweet";

const Home = () => (
  <Layout hasTabBar canGoBack>
    <div>
      {[1, 2, 3, 4, 5].map((_, i) => (
        <Link href={`/tweet/${i}`}>
          <a>
            <Tweet key={i} />
          </a>
        </Link>
      ))}
    </div>
    <FloationgButton />
  </Layout>
);

export default Home;