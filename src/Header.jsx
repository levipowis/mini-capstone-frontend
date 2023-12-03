import { Link } from "react-router-dom";
import { LogoutLink } from "./LogoutLink";

export function Header() {
  let authLinks;

  if (localStorage.jwt === undefined) {
    authLinks = (
      <>
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/signup">
            Signup
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/login">
            Login
          </Link>
        </li>
      </>
    );
  } else {
    authLinks = (
      <li className="nav-item">
        <LogoutLink />
      </li>
    );
  }

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">
                  All Posts
                </Link>
              </li>
              {authLinks}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
