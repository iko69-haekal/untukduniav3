import { Button, Input, message } from "antd";
import Footer from "../components/footer";
const { default: Navbar } = require("../components/navbar");
import { UserOutlined, MailOutlined } from "@ant-design/icons";
import { useState } from "react";
import TextArea from "antd/lib/input/TextArea";
import Axios from "axios";
import { api } from "../config/urlapi";
import Image from "next/image";
function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [messages, setMessages] = useState("");
  const [loading, setLoading] = useState(false);
  const data = { name, email, message: messages };
  const submit = () => {
    setLoading(true);
    Axios.post(api + "notification-management/email", data)
      .then((res) => {
        message.success("berhasil mengirim pesan");
      })
      .catch((err) => {
        err.response.data.email
          ? message.error(err.response.data.email[0])
          : null;
        err.response.data.name
          ? message.error(err.response.data.name[0])
          : null;
        err.response.data.message
          ? message.error(err.response.data.message[0])
          : null;
      })
      .finally(() => setLoading(false));
  };
  return (
    <>
      <Navbar />
      <div className="container my-5">
        <div className="row">
          <div className="col-md-6">
            <h2>Contact</h2>

            <Input
              required
              size="large"
              placeholder="name"
              prefix={<UserOutlined />}
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <br />
            <Input
              size="large"
              placeholder="email"
              prefix={<MailOutlined />}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <br />
            <TextArea
              rows={4}
              placeholder="message"
              onChange={(e) => setMessages(e.target.value)}
            />
            <br />
            <br />
            <Button loading={loading} type="primary" onClick={submit} block>
              submit
            </Button>
          </div>
          <div className="col-md-5 mbl-hide">
            <img src="/human.png" style={{ width: "100%", height: "55vh" }} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
