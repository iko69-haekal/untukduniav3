import Axios from "axios";
import { message, Popconfirm } from "antd";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import { api } from "../../../config/urlapi";
import Admin from "../../../components/admin";

const ProdukMin = ({ produk }) => {
  const history = useRouter();

  function hapus(id) {
    Axios.delete(`${api}product/${id}`, {
      headers: {
        api_token: localStorage.getItem("token"),
      },
    })
      .then((res) => {
        message.success("data berhasil dihapus");
        history.push("/admin/produk");
      })
      .catch((err) => console.log(err));
  }
  return (
    <>
      <Admin>
        <Link href="/admin/produk/tambah">
          <button className="btn btn-primary btn-sm">tambah produk</button>
        </Link>
        <div className="row pt-3 pb-5">
          {produk.map((data, i) => {
            return (
              <div className="col-md-4 mb-3" key={i}>
                <div className="card">
                  <Image
                    className="card-img-top"
                    src={data.image}
                    alt={data.image_title}
                    width="100%"
                    height="200"
                    unoptimized
                  />
                  <div className="card-body">
                    <h5 style={{ fontSize: "16pt" }} className="card-title ">
                      {data.image_title}
                    </h5>
                  </div>
                </div>
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
                      history.push("/admin/produk/ubah/" + data.id);
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
ProdukMin.getInitialProps = async () => {
  let produk = await Axios.get(api + "product");
  produk = produk.data.data;
  return {
    produk: produk,
  };
};
export default ProdukMin;
