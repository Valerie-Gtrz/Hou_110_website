import Title from "./Title";
import NavBar from "./NavBar";

function Header() {
  return (
    <div className="container-fluid">
        <header className="row row-2">
        <div className="row">
      <Title />
      </div>
      <div className="row">
      <NavBar />
      </div>
      </header>
    </div>
  );
}

export default Header;
