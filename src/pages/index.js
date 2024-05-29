import Head from "next/head";
import Layout, { siteTitle } from "./Layout";
import Link from "next/link";
import Date from "./date";

import { getSortedPostsData } from "../../utils/posts";

const Home = ({ allPostsData }) => {
  return (
    <Layout home>
      <div>
        <Head>
          <title>{siteTitle}</title>
        </Head>

        <section className="text-xl leading-normal text-center">
          <p>你好，我是 Ethan</p>
          <p>一个又菜又爱玩的前端小白，欢迎来到我的博客！</p>
        </section>

        <section className="text-xl leading-normal pt-4">
          <h2 className=" text-2xl my-4 font-bold">Blog</h2>
          <ul>
            {allPostsData.map(({ id, date, title }) => (
              <li key={id} className="mb-5">
                <Link legacyBehavior href={`/posts/${id}`}>
                  {title}
                </Link>
                <br />
                <small>
                  <Date dateString={date} />
                </small>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </Layout>
  );
};

export const getStaticProps = async () => {
  // 获取文章列表
  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData,
    },
  };
};

export default Home;
