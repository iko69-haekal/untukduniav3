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
        <title>{artikel.article_title}</title>
      </Head>
      <Navbar />
      <div className="container my-5">
        <div className="row">
          <div className="col-md-12">
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
            {htmr(artikel.article_content)}
          </div>
        </div>
      </div>
    </>
  );
}

Detail.getInitialProps = async ({ query }) => {
  const { id } = query;
  let artikel = await Axios.get(api + "article/" + id);
  artikel = artikel.data.data;
  return { artikel: artikel };
};

export default Detail;
