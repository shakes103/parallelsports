//import Link from 'next/link'
import Image from "next/image";
import logo from '../public/images/parallel_logo.png';

const NavBar = () => {
  return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
  <a className="navbar-brand" href="#">
  <Image src={logo} alt="Parallel Sports Coaching logo" />
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About Us</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          About Us
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a className="dropdown-item" href="#">Mission Statement</a></li>
            <li><a className="dropdown-item" href="#">Culture and Environment</a></li>
            <li><a className="dropdown-item" href="#">Charity of the Year</a></li>
            <li><a className="dropdown-item" href="#">Newsletter</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Meet Our Team</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Our Services
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a className="dropdown-item" href="#">School Breakfast Club</a></li>
            <li><a className="dropdown-item" href="#">School Lunch Club</a></li>
            <li><a className="dropdown-item" href="#">After School Club</a></li>
            <li><a className="dropdown-item" href="#">Holiday Camps</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Children&apos;s Party</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">What&apos;s On</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  );
};

export default NavBar;
