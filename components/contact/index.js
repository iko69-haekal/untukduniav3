const Contact = () => {
  return (
    <div>
      <div className="container my-5 pt-3">
        <div className="row justify-content-center">
          <div className="col-lg-3 col-md-6 mb-2 hover">
            <img className="icon" src="/facebook.png" alt="kontak kami" />{" "}
            <span
              className="content text-white"
              style={{ backgroundColor: "#3A589B" }}
            >
              untukdunia
            </span>
          </div>
          {/*  */}
          <div className="col-lg-3 col-md-6 mb-2 hover">
            <img className="icon" src="whatsapp.png" alt="kontak kami" />{" "}
            <span
              className="content text-white"
              style={{ backgroundColor: "#67C15E" }}
            >
              +625814910369
            </span>
          </div>
          {/*  */}
          <div className="col-lg-3 col-md-6 mb-2 hover">
            <img className="icon" src="/instagram.png" alt="kontak kami" />{" "}
            <span
              className="content text-white"
              style={{ backgroundColor: "#4F7BA4" }}
            >
              untukdunia
            </span>
          </div>
          {/*  */}
          <div className="col-lg-3 col-md-6 mb-2 hover">
            <img className="icon" src="/gmail.png" alt="kontak kami" />{" "}
            <span
              className="content text-white"
              style={{ backgroundColor: "#D04F47" }}
            >
              wirabuanaiot@gmail.com
            </span>
          </div>
        </div>
      </div>

      <style jsx>
        {`
          .icon {
            width: 50px !important;
            height: 50px !important;
          }

          .content {
            border-radius: 20px;
            padding: 5px 15px;
            margin-left: 10px;
            width: 100% !important;
            text-align: center;
            font-size: 14px !important;
          }
        `}
      </style>
    </div>
  );
};

export default Contact;
