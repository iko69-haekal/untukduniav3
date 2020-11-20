import { Carousel } from "antd";
const Carousels = ({ jmb }) => {
  return (
    <>
      <Carousel autoplay>
        {jmb.map((data) => {
          return (
            <div>
              <img
                className="d-block w-100"
                style={{ width: "100%", height: "100%", maxHeight: "85vh" }}
                src={data.image}
                alt="First slide"
              />
            </div>
          );
        })}
      </Carousel>
    </>
  );
};
Carousels.getInitialProps = async () => {
  let jmb = await Axios.get(api + "image-management/images");

  jmb = jmb.data.data;

  return {
    jmb: jmb,
  };
};
export default Carousels;
