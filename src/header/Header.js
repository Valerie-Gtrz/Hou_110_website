import Title from "./Title";
import NavBar from "./NavBar";

function Header() {
  return (
    <div className="container-fluid text-center">
        <div className="row row-2">
        <div className="row">
      <Title />
      </div>
      <div className="row">
      <NavBar />
      </div>
      </div>
    </div>
  );
}

export default Header;
