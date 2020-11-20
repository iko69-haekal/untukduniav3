import Head from "next/head";
import "../styles/globals.css";
import "antd/dist/antd.css";
import Router from "next/router";
import NProgress from "nprogress"; //nprogress module
import "nprogress/nprogress.css"; //styles of nprogress//Binding events.
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());
function MyApp({ Component, pageProps }) {
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
          content="foto foto kegiatan siswa siswi berprestasi smk wirabuana gemilang"
          key="ogdesc"
        />
        <meta
          name="keywords"
          content="iot,smk,smk bisa,gemilang,untukdunia,wirabuana,untuk dunia,internet of things,door lock"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>
          website iot kumpulan hasil karya siswa siswi smk wirabuana{" "}
        </title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
        />
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"></script>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
