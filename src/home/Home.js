import cleanup from "../images/cleanup.jpg";
import WhoWeAre from "../data/whoWeAre";

function Home() {
  return (
     

<div className="card mb-3 width-50">
  <div className="row g-0">
    <div className="col-md-4">
    <img src={cleanup} alt="jesse h. jones park clean up" />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Who We Are</h5>
        <p className="card-text"><WhoWeAre /></p>
        <p className="card-text"><small className="text-muted">Jesse H. Jones park clean up</small></p>
      </div>
    </div>
  </div>
</div>
  );
}

export default Home;
