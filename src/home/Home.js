import cleanup from "../images/cleanup.jpg";
import WhoWeAre from "../data/whoWeAre";

function Home() {
  return (
    <>
      <div className="d-flex flex-row bd-highlight justify-content-start mb-3">
        
          <div>
            <img
              src={cleanup}
              alt="jesse h. jones park clean up"
              width="650"
              height="500"
              className="mx-4"
            />
          </div>

          <div>
            <WhoWeAre />
          </div>
        
      </div>
    </>
  );
}

export default Home;
