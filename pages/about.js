import Head from "next/head";
import Contact from "../components/contact";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

const About = () => {
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
        <title>tentang kami</title>
      </Head>
      <Navbar />
      <div className="container mt-5 mb-4">
        <div className="row">
          <div className="col-md-5 mb-3">
            <p
              style={{ textIndent: "30px" }}
              className="lead font-weight-light text-muted text-justify"
            >
              Untuk dunia hadir sebagai organisasi berorientasi profit tentu
              saja perusahaan ini akan dikelola secara profesional dan
              senantiasa mematuhi peraturan perundangan yang berlaku serta
              menjunjung tinggi nilai moral yang jujur dan amanah. Dengan adanya
              era revolusi industri 4.0 yang merubah kembali tatanan cara
              berbisnis dan cara bekerja. Penggunanaan teknologi informasi
              berbasis internet menyentuh hampir semua lini bisnis.
            </p>
          </div>
          <div className="col-md-7">
            <img
              src="https://pontas.id/wp-content/uploads/2019/05/Ilustrasi-Industri-4.0.jpeg"
              alt="tentang untuk dunia"
              className="img-fluid"
              style={{ height: "300px", width: "100%" }}
            />
          </div>
        </div>
      </div>
      {/*  */}
      <div className="container mt-3 pt-3">
        <div className="row">
          <div className="col-12 mb-4">
            <h1>Visi</h1>
            <p className="font-weight-light text-muted lead">
              “Menjadi sebuah perusahaan bisnis yang menyediakan produk dan jasa
              berbasis teknologi Internet of Things (IOT) dengan konsep teaching
              factory yang mampu bersinergi dengan dunia pendidikan di Indonesia
              khususnya sekolah kejuruan.”
            </p>
          </div>
          <div className="col-12">
            <h1>Misi</h1>
            <p className="font-weight-light text-muted lead">
              "Menyediakan produk dan jasa berbasis teknologi IOT yang
              berkualitas dan terjangkau bagi seluruh lapisan masyarakat di
              Indonesia dan dunia, dan menjadi bagian dari solusi tersedianya
              lapangan pekerjaan bagi lulusan- lulusan terbaik putera-puteri
              bangsa dimulai dari tingkatan Sekolah Menengah Kejuruan sampai
              Perguruan Tinggi."
            </p>
          </div>
        </div>
      </div>
      {/*  */}
      <div style={{ backgroundColor: "#fffffe" }}>
        <div className="container mt-5 pt-3">
          <div className="row">
            <div className="col-md-6">
              <h2>Mengapa kami?</h2>
              <p
                style={{ textIndent: "30px" }}
                className="text-muted text-justify font-weight-light lead"
              >
                Karena kami memiliki semangat yang kuat untuk memberikan segenap
                kemampuan terbaik kami dalam bekerja dan berinovasi untuk
                menghasilkan produk-produk berkualitas dengan fitur unggulan
                teknologi terkini berbasis Internet of Things yang bermanfaat
                bagi seluruh lapisan masyarakat.
              </p>
            </div>
            <div className="col-md-6 mt-3">
              <img
                src="https://i1.wp.com/prieds.com/wp-content/uploads/2020/08/Smart-Manufacturing-11-1.jpg?fit=768%2C387&ssl=1"
                alt="tentang untuk dunia"
                className="img-fluid"
                style={{ height: "200px", width: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>
      <Contact />
      <Footer />
    </>
  );
};

export default About;
