import React from "react";
import { NavLink, Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav>
        <section className='item'>
          <Link to="/">
            <img
              src="http://chasebovineservices.com/wp-content/uploads/2019/09/CBS-Logo.20190924-305x194.jpg"
              alt="Chase Bovine Services"
            />
            <p>Dairy Nutrition and Veterinary Consulting</p>
          </Link>
        
        <ul className= 'navBarHeadings'>
          <li >
            <NavLink exact to="/" activeClassName="active-nav-link" className='btn'>
              <h6>Home</h6>  
            </NavLink>
          </li>
          <li >
            <NavLink to="/about-me" activeClassName="active-nav-link" className='btn'>
              <h6>About Me</h6>
            </NavLink>
          </li>
          <li >
            <NavLink to="/resources" activeClassName="active-nav-link" className='btn'>
              <h6>Resources</h6>
            </NavLink>
          </li>
          <li >
            <NavLink to="/contact" activeClassName="active-nav-link" className='btn'>
              <h6>Contact</h6>
            </NavLink>
          </li>
          <li > 
            <NavLink to="/login" activeClassName="active-nav-link" className='btn'>
              <h6>login</h6>
            </NavLink>
          </li>
        </ul>
        </section>
      </nav>
    </>
  );
}

export default Navbar;
