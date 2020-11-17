import React from "react";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import Image from "next/image";
import Axios from "axios";
import { api } from "../../config/urlapi";
import { useRouter } from "next/router";
function artikel({ artikel }) {
  const router = useRouter();
  return (
    <>
      <Navbar />
      <div className="container my-4">
        <div className="row">
          {artikel.map((data, i) => {
            return (
              <div className="col-md-6 col-12 " key={i}>
                <div
                  className="card clickable"
                  onClick={() => router.push("/artikel/" + data.id)}
                >
                  <Image
                    className="card-img-top"
                    src={data.image}
                    alt={data.article_title}
                    width="100%"
                    height="200"
                    unoptimized
                  />
                  <div className="card-body">
                    <h5 style={{ fontSize: "16pt" }} className="card-title ">
                      {data.article_title}
                    </h5>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}
artikel.getInitialProps = async () => {
  let artikel = await Axios.get(api + "article");
  artikel = artikel.data.data;
  return {
    artikel: artikel,
  };
};
export default artikel;
