import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{ backgroundColor: "white" }}
      >
        <div className="container">
          <Image
            src="/log.png"
            width="150"
            height="53"
            className="d-inline-block align-top"
            alt="untuk dunia logo"
          />

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link href="/">
                  <a
                    className={`nav-link  ${
                      router.pathname == "/" ? "active" : ""
                    }`}
                    style={{ fontSize: "1rem" }}
                  >
                    Home
                  </a>
                </Link>
              </li>
              <li className="nav-item ml-1">
                <Link href="/about">
                  <a
                    className={`nav-link  ${
                      router.pathname == "/about" ? "active" : ""
                    }`}
                    style={{ fontSize: "1rem" }}
                  >
                    Tentang Kami
                  </a>
                </Link>
              </li>
              <li className="nav-item ml-1">
                <Link href="/artikel">
                  <a
                    className={`nav-link  ${
                      router.pathname == "/artikel" ? "active" : ""
                    }`}
                    style={{ fontSize: "1rem" }}
                  >
                    Artikel
                  </a>
                </Link>
              </li>
              <li className="nav-item ml-1">
                <Link href="/product">
                  <a
                    className={`nav-link  ${
                      router.pathname == "/product" ? "active" : ""
                    }`}
                    style={{ fontSize: "1rem" }}
                  >
                    Produk
                  </a>
                </Link>
              </li>
              <li className="nav-item ml-1">
                <Link href="/galery">
                  <a
                    className={`nav-link  ${
                      router.pathname == "/galery" ? "active" : ""
                    }`}
                    style={{ fontSize: "1rem" }}
                  >
                    Galery
                  </a>
                </Link>
              </li>
            </div>
          </div>
        </div>
      </nav>

      <style jsx>
        {`
          nav {
            box-shadow: 0 2px 2px -2px rgba(0, 0, 0, 0.2) !important;
          }

          .active {
            color: #1b9ed9 !important;
          }
        `}
      </style>
    </>
  );
};

export default Navbar;
