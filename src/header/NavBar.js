

function NavBar(){
return(
    <div>
        <ul className="nav justify-content-center">
  <li className="nav-item">
    <a className="nav-link active link" aria-current="page" href="/home">Home</a>
  </li>
  <li className="mt-2"><span className="iconify" data-icon="ph:git-commit-light"></span></li>
  <li className="nav-item">
    <a className="nav-link active link" href="/about">About Us</a>
  </li>
  <li className="mt-2"><span className="iconify" data-icon="ph:git-commit-light"></span></li>
  <li className="nav-item">
    <a className="nav-link active link" href="/contact">Contact</a>
  </li>
</ul>
<hr />
    </div>
)
}

export default NavBar;
