import Axios from "axios";
import { message, Popconfirm } from "antd";
import { useRouter } from "next/router";
import Link from "next/link";
import { api } from "../../../config/urlapi";
import Admin from "../../../components/admin";

const galeryMin = ({ galery }) => {
  const history = useRouter();

  function hapus(id) {
    Axios.delete(`${api}gallery/${id}`, {
      headers: {
        api_token: localStorage.getItem("token"),
      },
    })
      .then((res) => {
        message.success("data berhasil dihapus");
        history.push("/admin/galery");
      })
      .catch((err) => console.log(err));
  }
  return (
    <>
      <Admin>
        <Link href="/admin/galery/tambah">
          <button className="btn btn-primary btn-sm">tambah galery</button>
        </Link>
        <div className="row">
          {galery.map((data) => {
            return (
              <div className="col-lg-4 col-md-6 mt-4">
                <img
                  className="img-fluid"
                  style={{ width: "100%", height: "25vh" }}
                  src={data.image}
                  alt={data.image_title}
                />
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
                      history.push("/admin/galery/ubah/" + data.id);
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
galeryMin.getInitialProps = async () => {
  let galery = await Axios.get(api + "gallery");
  galery = galery.data.data;
  return {
    galery: galery,
  };
};
export default galeryMin;
