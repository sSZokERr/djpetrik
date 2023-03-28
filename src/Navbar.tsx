import { Link } from "react-router-dom";
import './App.css';


function Navbar() {
    return (
        <div className="bg-dark">
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <h1 className="navbar-brand">Dj Petrik</h1>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className=" collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto ">
              <li className="nav-item">
                <Link className="nav-link mx-2" aria-current="page" to="/">Fő oldal</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-2" to="/tapasztalat">Szakmai tapasztalat</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-2" to="/idopont">Időpontfoglalás </Link>
              </li>
            </ul>
          </div>
        </div>
        </nav>
        </div>
    );
  }
  
  export default Navbar;