import { Button, message, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import Axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { api } from "../../../../config/urlapi";
import Admin from "../../../../components/admin";

const UbahProduk = ({ produk }) => {
  const history = useRouter();
  const { id } = history.query;
  useEffect(() => {
    setTitle(produk.image_title);
    setImage(produk.image);
  }, [id]);
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");

  const submit = () => {
    if (title.length < 5) {
      message.error("title too short");
      return false;
    }
    setLoading(true);
    const form = new FormData();
    form.append("image_title", title);
    form.append("image", image);
    form.append("old_pict", image);

    Axios.post(`${api}/product/` + id, form, {
      headers: {
        "content-type":
          "multipart/form-data; boundary=---011000010111000001101001",
        api_token: localStorage.getItem("token"),
      },
    })
      .then((res) => {
        history.push("/admin/produk");
      })
      .catch((err) => {
        console.log("Error" + err);
        message.error("pastikan semua input terisi");
      })
      .finally((e) => setLoading(false));
  };
  return (
    <>
      <Admin>
        <div className="row justify-content-center mt-5 pt-5">
          <div className="col-md-6">
            <div className="form-group">
              <label>Nama produk</label>
              <input
                value={title}
                type="text"
                className="form-control"
                placeholder="masukan nama produk"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Gambar Produk: </label>
              <br />
              <Upload
                beforeUpload={(file) => {
                  if (file.size > 700000) {
                    message.error("file terlalu besar");
                    return false;
                  }
                  setImage(file);
                  return false;
                }}
              >
                <Button icon={<UploadOutlined />}>Click to Upload</Button>
              </Upload>
            </div>
            <Button loading={loading} onClick={submit} type="primary" block>
              Ubah
            </Button>
          </div>
        </div>
      </Admin>
    </>
  );
};
UbahProduk.getInitialProps = async ({ query }) => {
  const { id } = query;
  let produk = await Axios.get(api + "product/" + id);
  produk = produk.data.data;
  return { produk: produk };
};
export default UbahProduk;
