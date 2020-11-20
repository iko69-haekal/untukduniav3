import Axios from "axios";
import { message, Popconfirm } from "antd";
import { useRouter } from "next/router";
import { api } from "../../../config/urlapi";
import Admin from "../../../components/admin";

const jmbMin = ({ image }) => {
  const history = useRouter();
  function hapus(id) {
    Axios.delete(`${api}image-management/images/${id}`, {
      headers: {
        api_token: localStorage.getItem("token"),
      },
    })
      .then((res) => {
        message.success("data berhasil dihapus");
        history.push("/admin/jumbotron");
      })
      .catch((err) => console.log(err));
  }
  return (
    <>
      <Admin>
        <div className="row">
          {image.map((data) => {
            return (
              <div className="col-lg-4 col-md-6 mt-4">
                <img
                  className="img-fluid"
                  style={{ width: "100%", height: "30vh" }}
                  src={data.image}
                  alt="gambar iot smk wirabuana"
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
                      history.push("/admin/jumbotron/ubah/" + data.id);
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
jmbMin.getInitialProps = async () => {
  let image = await Axios.get(api + "image-management/images");
  image = image.data.data;
  return {
    image: image,
  };
};
export default jmbMin;
