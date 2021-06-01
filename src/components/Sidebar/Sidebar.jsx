import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarLink,
  SidebarWrapper,
  SidebarMenu,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <>
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to="about" onClick={toggle}>
              About us
            </SidebarLink>
            <SidebarLink to="offer" onClick={toggle}>
              What we can offer
            </SidebarLink>
            <SidebarLink to="timings" onClick={toggle}>
              Class Timings
            </SidebarLink>
            <SidebarLink to="achievements" onClick={toggle}>
              Our Achievements
            </SidebarLink>
            <SidebarLink to="book" onClick={toggle}>
              Book a class
            </SidebarLink>
          </SidebarMenu>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
