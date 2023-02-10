import React from "react";
import styled from "styled-components";
import MenuSvg from "../assets/apps.svg";

const Header = () => {
  return (
    <Container>
      <Logo>LOGO</Logo>
      <NavContainer>
        <NavItem>로그인</NavItem>
        <NavItem>
          <MenuSvg />
        </NavItem>
      </NavContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: NotoSansKR-Regular;
  font-size: 1rem;
`;

const Logo = styled.div`
  display: flex;
  font-family: NotoSansKR-Bold;
  font-size: 1.5rem;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const NavItem = styled.div`
  padding-left: 1rem;
`;
export default Header;
