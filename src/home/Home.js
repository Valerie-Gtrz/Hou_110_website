import cleanup from "../images/cleanup.jpg";
import WhoWeAre from "../data/whoWeAre";

function Home() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 my-3">
            <img src={cleanup} alt="" />
          </div>

          <div className="col-lg-5 my-3">
            <h5 className="card-title">Card title that wraps to a new line</h5>
            <p className="card-text">
              <WhoWeAre />
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 my-3">
            <img src={cleanup} alt="" />
          </div>

          <div className="col-lg-5 my-3">
            <h5 className="card-title">Card title that wraps to a new line</h5>
            <p className="card-text">
              <WhoWeAre />
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
