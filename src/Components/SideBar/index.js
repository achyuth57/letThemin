import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SideBarWrapper,
  SideBarLink,
  SideBarMenu,
  SideBtnWrapper,
  SideBarRoute,
} from "./SidebarElements";

const SideBar = ({ isOpen, toggle }) => {
  return (
    <>
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon>
          <CloseIcon />
        </Icon>
        <SideBarWrapper>
          <SideBarMenu>
            <SideBarLink to="about" onClick={toggle}>
              About
            </SideBarLink>
            <SideBarLink to="discover" onClick={toggle}>
              Discover
            </SideBarLink>
            <SideBarLink to="services" onClick={toggle}>
              Services
            </SideBarLink>
            <SideBarLink to="signup" onClick={toggle}>
              Sign Up
            </SideBarLink>
          </SideBarMenu>
          <SideBtnWrapper>
            <SideBarRoute to="/signin">Sign In</SideBarRoute>
          </SideBtnWrapper>
        </SideBarWrapper>
      </SidebarContainer>
    </>
  );
};

export default SideBar;
