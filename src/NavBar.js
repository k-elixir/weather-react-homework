import React from "react";

export default function NavBar(props) {
  return (
    <nav className="navbar fixed-top ">
      <div className="container-fluid">
        <button
          className="navbar-toggler fs-2"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasDarkNavbar"
          aria-controls="offcanvasDarkNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-start text-bg-dark"
          tabindex="-1"
          id="offcanvasDarkNavbar"
          aria-labelledby="offcanvasDarkNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title h1" id="offcanvasDarkNavbarLabel">
              Menu
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <form
              className="d-flex mt-3"
              role="search"
              onSubmit={props.handleSearch}
            >
              <input
                className="form-control me-2 p-2"
                type="search"
                placeholder="Enter City ..."
                aria-label="Search"
                // onChange={props.cityInput}
              />
              <button className="btn btn-success" type="submit">
                Search
              </button>
            </form>
            <button
              className="btn btn-warning form-control mt-4 p-2"
              type="submit"
              onClick={props.getCurrentLoc}
            >
              Current Location
            </button>
            <a
              href="https://github.com/k-elixir/weather-react-homework"
              className="fixed-bottom m-4"
            >
              Open source code by Kimia Rafi
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
