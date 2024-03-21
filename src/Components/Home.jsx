import { Link, Outlet } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <nav className="navbar bg-success">
        <ul className="navbar-menu d-flex justify-content-center align-item-center gap-5 nav-ul fs-2 ">
          <Link to={"/"} style={{ color: "white ", textDecoration: "none" }}>
            All
          </Link>
          <Link
            to={"/fullstack"}
            style={{ color: "white ", textDecoration: "none" }}
          >
            Fullstack
          </Link>
          <Link
            to={"/datascience"}
            style={{ color: "white ", textDecoration: "none" }}
          >
            Datascience
          </Link>
          <Link
            to={"/cybersecurity"}
            style={{ color: "white ", textDecoration: "none" }}
          >
            Cybersecurity
          </Link>
          <Link
            to={"/Careers"}
            style={{ color: "white ", textDecoration: "none" }}
          >
            Careers
          </Link>
        </ul>
      </nav>
     
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
