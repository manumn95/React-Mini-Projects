import { Link, Outlet } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <nav className="navbar navbar-expand-lg mb-5 text-size-3 ">
              <div
                className="container-fluid d-flex align-item-center justify-content-between g-5 bg-success"
                style={{
                  textAlign: "center",
                  backgroundColor: "rgb(255,255,255",
                  borderBottom: "1px solid lightgrey",
                }}
              >
                <hr></hr>
                <ul className="navbar-nav mx-auto d-flex gap-5">
                  <li className="nav-item">
                    <Link
                      className=" text-dark fs-5 text-decoration-none style"
                      to="/"
                    >
                      All
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className=" text-dark fs-5 text-decoration-none style"
                      to="/fullstack"
                    >
                      Fullstack
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className=" text-dark fs-5 text-decoration-none style"
                      to="/datascience"
                    >
                      DataScience
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className=" text-dark fs-5 text-decoration-none style"
                      to="/cybersecurity"
                    >
                      Cybersecurity
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className=" text-dark fs-5 text-decoration-none style"
                      to="/careers"
                    >
                      Careers
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>

      <Outlet></Outlet>
    </div>
  );
};

export default Home;
