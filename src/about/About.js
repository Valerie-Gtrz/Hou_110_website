import WhoWeAre from "../data/whoWeAre";
import cleanup from "../images/cleanup.jpg";

function About() {
  return (
    <>
      <div class="container">
        <div className="row">
          <div className="col-lg-6 my-3">
            <img src={cleanup} alt="" />
          </div>

          <div className="col-lg-5 my-3">
            <h5 class="card-title">Card title that wraps to a new line</h5>
            <p class="card-text">
              <WhoWeAre />
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
