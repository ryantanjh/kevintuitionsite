import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from "./NavbarElements";
const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            Kevin's Tuition
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                About us
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="services"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                What we can offer
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="timings"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Class Timings
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="achievements"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Our Achievements
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="book"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Book a class
              </NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
