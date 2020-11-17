const { default: Navbar } = require("../components/navbar");
import Image from "next/image";
import Axios from "axios";
import { api } from "../config/urlapi";
import Footer from "../components/footer";
function product({ produk }) {
  return (
    <>
      <Navbar />
      <div className="container my-5">
        <div className="row mt-5">
          {produk.map((produk, i) => {
            return (
              <div className="col-md-4 mb-3" key={i}>
                <div className="card">
                  <Image
                    className="card-img-top"
                    src={produk.image}
                    alt={produk.image_title}
                    width="100%"
                    height="200"
                    unoptimized
                  />
                  <div className="card-body">
                    <h5 style={{ fontSize: "16pt" }} className="card-title ">
                      {produk.image_title}
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
product.getInitialProps = async () => {
  let produk = await Axios.get(api + "product");

  produk = produk.data.data;

  return {
    produk: produk,
  };
};

export default product;
