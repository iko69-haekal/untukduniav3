import Axios from "axios";
import { message, Popconfirm } from "antd";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import { api } from "../../../config/urlapi";
import Admin from "../../../components/admin";
const Artikelmin = ({ artikel }) => {
  const history = useRouter();

  function hapus(id) {
    Axios.delete(`${api}article/${id}`, {
      headers: {
        api_token: localStorage.getItem("token"),
      },
    })
      .then((res) => {
        message.success("data berhasil dihapus");
        history.push("/admin/artikel");
      })
      .catch((err) => console.log(err));
  }
  return (
    <>
      <Admin>
        <Link href="/admin/artikel/tambah">
          <button className="btn btn-primary btn-sm">tambah artikel</button>
        </Link>
        <div className="row pt-3 pb-5">
          {artikel.map((data, i) => {
            return (
              <div className="col-md-6 col-12 mb-5" key={i}>
                <a target="_blank" href={`/artikel/${data.id}`}>
                  <div className="card clickable">
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
                </a>
                <div className="my-3">
                  <Popconfirm
                    title="yakin ingin menghapus?"
                    onConfirm={() => hapus(data.id)}
                    okText="Yes"
                    cancelText="No"
                  >
                    <button className="btn btn-danger mr-2">hapus</button>
                  </Popconfirm>

                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      history.push("/admin/artikel/ubah/" + data.id);
                    }}
                    className="btn btn-primary"
                  >
                    ubah
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </Admin>
    </>
  );
};
Artikelmin.getInitialProps = async () => {
  let artikel = await Axios.get(api + "article");
  artikel = artikel.data.data;
  return {
    artikel: artikel,
  };
};
export default Artikelmin;
