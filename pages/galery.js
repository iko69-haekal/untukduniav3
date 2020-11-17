import React from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Axios from "axios";
import { api } from "../config/urlapi";
const galery = ({ galery }) => {
  return (
    <>
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
};
galery.getInitialProps = async () => {
  let galery = await Axios.get(api + "gallery");

  galery = galery.data.data;

  return {
    galery: galery,
  };
};

export default galery;
