import Axios from "axios";
import Head from "next/head";
import htmr from "htmr";
import Navbar from "../../components/navbar";
import { api } from "../../config/urlapi";

function Detail({ artikel }) {
  return (
    <>
      <Head>
        <meta name="description" content={artikel.article_sub_content} />
        <meta
          property="og:title"
          content={artikel.artikel_title}
          key="ogtitle"
        />
        <meta
          property="og:description"
          content={artikel.article_sub_content}
          key="ogdesc"
        />
        <title>{artikel.article_title}</title>
      </Head>
      <Navbar />
      <div className="container my-5">
        <article>
          <div
            style={{
              width: "100%",
              height: "70vh",
              position: "relative",
              borderRadius: "2px",
            }}
            className="thumbs"
          >
            <img
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "25px",
              }}
              src={artikel.image}
              alt={artikel.article_title}
            />
          </div>
          <br />
          <br />
          <h1>{artikel.article_title}</h1>
          <p>{htmr(artikel.article_content)}</p>
        </article>
      </div>
    </>
  );
}

export const getServerSideProps = async ({ query }) => {
  const { id } = query;
  let artikel = await Axios.get(api + "article/" + id);
  artikel = artikel.data.data;
  return { props: { artikel } };
};

export default Detail;
