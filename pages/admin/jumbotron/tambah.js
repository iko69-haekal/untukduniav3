import { Button, message, Upload } from "antd";
import Axios from "axios";
import React, { useState } from "react";
import Admin from "../../../components/admin";
import { UploadOutlined } from "@ant-design/icons";
import { api } from "../../../config/urlapi";
const TambahGalery = () => {
  const [loading, setLoading] = useState(false);

  const [image, setImage] = useState("");

  const submit = () => {
    setLoading(true);
    const form = new FormData();

    form.append("image", image);

    Axios.post(`${api}image-management/images`, form, {
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
            <div className="form-group">
              <label>Gambar: </label>
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
              Tambah
            </Button>
          </div>
        </div>
      </Admin>
    </>
  );
};

export default TambahGalery;
