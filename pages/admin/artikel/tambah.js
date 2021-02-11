import { useState } from "react";
import { UploadOutlined } from "@ant-design/icons";
import Admin from "../../../components/admin";

import Axios from "axios";
import { message, Button, Upload } from "antd";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
const importJodit = () => import("jodit-react");

const JoditEditor = dynamic(importJodit, {
  ssr: false,
});
const Tambah = () => {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [sub, setSub] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [loading, setLoading] = useState(false);

  const history = useRouter();
  const submit = () => {
    if (title.length < 5) {
      message.error("title too short");
      return false;
    }
    if (sub.length >= 5000) {
      message.error("subcontent max 5000 char");
      return false;
    }
    setLoading(true);
    const form = new FormData();
    form.append("article_title", title);
    form.append("article_content", content);
    form.append("article_sub_content", sub);
    form.append("image", thumbnail);
    form.append("category", "education");

    Axios.post("https://api.untukdunia.com/article", form, {
      headers: {
        "content-type":
          "multipart/form-data; boundary=---011000010111000001101001",
        api_token: localStorage.getItem("token"),
      },
    })
      .then((res) => {
        document.location.href = "/admin/artikel";
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
        <div className="container pb-5">
          <div className="form-group">
            <label>title</label>
            <input
              minLength={5}
              type="text"
              className="form-control"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label>subcontent</label>
            <textarea
              maxLength={5000}
              type="text"
              className="form-control"
              value={sub}
              onChange={(e) => {
                setSub(e.target.value);
              }}
            ></textarea>
          </div>
          <label>deskripsi</label>
          <JoditEditor
            value={content}
            tabIndex={1}
            onChange={(newContent) => setContent(newContent)}
          />
          <br />
          <div className="form-group">
            <label>thumbnail</label>
            <br />
            <Upload
              beforeUpload={(file) => {
                if (file.size > 700000) {
                  message.error("file terlalu besar");
                  return false;
                }
                setThumbnail(file);
                return false;
              }}
            >
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
          </div>

          <Button onClick={submit} loading={loading} type="primary" block>
            Tambah
          </Button>
        </div>
      </Admin>
    </>
  );
};

export default Tambah;
