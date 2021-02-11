import Axios from "axios";
import Head from "next/head";
import Image from "next/image";
import { Carousel } from "antd";
import Contact from "../components/contact";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { api } from "../config/urlapi";
import "../styles/Home.module.css";
export default function Home({ produk, galery, jmb }) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content=" Untuk dunia hadir sebagai organisasi berorientasi profit tentu
              saja perusahaan ini akan dikelola secara profesional dan
              senantiasa mematuhi peraturan perundangan yang berlaku serta
              menjunjung tinggi nilai moral yang jujur dan amanah."
        />
        <meta
          property="og:description"
          content="Untuk dunia hadir sebagai organisasi berorientasi profit tentu
          saja perusahaan ini akan dikelola secara profesional dan
          senantiasa mematuhi peraturan perundangan yang berlaku serta
          menjunjung tinggi nilai moral yang jujur dan amanah."
          key="ogdesc"
        />
        <meta
          name="keywords"
          content="iot,smk,smk bisa,gemilang,untukdunia,wirabuana,untuk dunia,internet of things,door lock"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>
      <Navbar />
      <Carousel autoplay>
        {jmb.map((data) => {
          return (
            <>
              <div>
                <img
                  style={{
                    minHeight: "76vh",
                    maxHeight: "86vh",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                  src={data.image}
                  alt="First slide"
                />
              </div>
            </>
          );
        })}
      </Carousel>
      <div className="container my-5">
        <h4 className="text-center">OUR PRODUCT</h4>
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
      {/* end product */}
      <div className="my-5">
        <h3 className="text-center mb-4">GALERY</h3>
        <div className="row justify-content-center no-gutters">
          {galery.map((galery, i) => {
            return (
              <div className="col-lg-3 col-md-4 col-6" key={i}>
                <div className="item">
                  <img
                    width="100%"
                    height="100%"
                    className="img-fluid"
                    src={galery.image}
                    alt={galery.image_title}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* end galery */}
      <Contact />
      <Footer />
    </>
  );
}

export const getServerSideProps = async ({}) => {
  let produk = await Axios.get(api + "product");
  let galery = await Axios.get(api + "gallery");
  let jmb = await Axios.get(api + "image-management/images");
  jmb = jmb.data.data;
  produk = produk.data.data;
  galery = galery.data.data;
  return {
    props: {
      produk: produk.length <= 3 ? produk : produk.slice(0, 3),
      galery: galery.length <= 4 ? galery : galery.slice(0, 4),
      jmb: jmb,
    },
  };
};
