import React, { useState } from "react";
import Admin from "../../../../components/admin";
import JoditEditor from "jodit-react";
import Axios from "axios";
import { UploadOutlined } from "@ant-design/icons";
import { useEffect } from "react";
import { message, Button, Upload } from "antd";
import { useRouter } from "next/router";
import { api } from "../../../../config/urlapi";
const Ubah = ({ artikel }) => {
  const router = useRouter();
  const { id } = router.query;
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [sub, setSub] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setContent(artikel.article_content);
    setTitle(artikel.article_title);
    setSub(artikel.article_sub_content);
    setThumbnail(artikel.image);
  }, []);
  const submit = () => {
    if (title.length < 5) {
      message.error("title too short");
      return false;
    }
    if (sub.length >= 40) {
      message.error("subcontent max 40 char");
      return false;
    }
    setLoading(true);
    const form = new FormData();
    form.append("article_title", title);
    form.append("article_content", content);
    form.append("article_sub_content", sub);
    form.append("image", thumbnail);
    form.append("category", "education");
    form.append("old_pict", thumbnail);

    Axios.post(`${api}article/` + id, form, {
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
          <div class="form-group">
            <label>title</label>
            <input
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
              maxLength={25}
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

          <Button onClick={submit} type="primary" block loading={loading}>
            Ubah
          </Button>
        </div>
      </Admin>
    </>
  );
};

Ubah.getInitialProps = async ({ query }) => {
  const { id } = query;
  let artikel = await Axios.get(api + "article/" + id);
  artikel = artikel.data.data;
  return { artikel: artikel };
};

export default Ubah;
