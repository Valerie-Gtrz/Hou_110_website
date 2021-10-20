import cleanup from "../images/cleanup.jpg"
import WhoWeAre from "../data/whoWeAre";


function Home(){
    return(
<>
<div className="container mt-5">
    <div className="row">
    <div class="col">
<img src={cleanup} alt="jesse h. jones park clean up" width="650" height="500"/>
</div>


<div class="col"><WhoWeAre /></div>
</div>
</div>

</>
    )
};

export default Home;