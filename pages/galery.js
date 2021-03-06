import React from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Axios from "axios";
import { api } from "../config/urlapi";
import Head from "next/head";

function galery({ galery }) {
  return (
    <>
      <Head>
        <title>Galery</title>
        <meta
          name="description"
          content="foto foto kegiatan siswa siswi berprestasi smk wirabuana gemilang dan cerdas untuk masa depan bangsa indonesia dengan mebuat teknologi yang berguna "
        />
        <meta
          property="og:description"
          content="foto foto kegiatan siswa siswi berprestasi smk wirabuana gemilang dan cerdas untuk masa depan bangsa indonesia dengan mebuat teknologi yang berguna "
          key="ogdesc"
        />
      </Head>
      <Navbar />
      <div className="container pt-5 mt-4 mb-5 pb-5">
        <div className="row">
          {galery.map((data) => {
            return (
              <div className="col-lg-4 col-md-6">
                <img
                  className="img-fluid"
                  style={{ width: "100%", height: "25vh" }}
                  src={data.image}
                  alt={data.image_title}
                />
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}

export const getServerSideProps = async ({}) => {
  let galery = await Axios.get(api + "gallery");

  galery = galery.data.data;

  return {
    props: { galery },
  };
};
export default galery;
