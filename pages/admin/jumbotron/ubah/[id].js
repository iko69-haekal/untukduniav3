import { Button, message, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import Axios from "axios";
import { useState, useEffect } from "react";

import Admin from "../../../../components/admin";
import { api } from "../../../../config/urlapi";
import { useRouter } from "next/router";

const ubahJmb = ({ image }) => {
  const router = useRouter();
  const { id } = router.query;
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState("");

  useEffect(() => {
    setImages(image.image);
  }, []);
  const submit = () => {
    setLoading(true);
    const form = new FormData();

    form.append("image", images);
    form.append("old_pict", images);

    Axios.post(`${api}image-management/images/` + id, form, {
      headers: {
        "content-type":
          "multipart/form-data; boundary=---011000010111000001101001",
        api_token: localStorage.getItem("token"),
      },
    })
      .then((res) => {
        document.location.href = "/admin/galery";
      })
      .catch((err) => {
        console.log("Error" + err);
        message.error("pastikan semua input terisi dengan benar");
      })
      .finally((e) => setLoading(false));
  };
  return (
    <>
      <Admin>
        <div className="row justify-content-center mt-5 pt-5">
          <div className="col-md-6">
            <div class="form-group">
              <label>Gambar Produk: </label>
              <br />
              <Upload
                beforeUpload={(file) => {
                  if (file.size > 700000) {
                    message.error("file terlalu besar");
                    return false;
                  }
                  setImages(file);
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
ubahJmb.getInitialProps = async ({ query }) => {
  const { id } = query;
  let image = await Axios.get(`${api}image-management/images/` + id);
  image = image.data.data;
  return { image: image };
};

export default ubahJmb;
