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

        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossorigin="anonymous"
        />

        <title>
          website iot kumpulan hasil karya siswa siswi smk wirabuana{" "}
        </title>

        <script
          src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
          integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
          integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
          integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
          crossorigin="anonymous"
        ></script>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
