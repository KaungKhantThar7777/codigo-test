import { useState } from "react";
import { Menu, X } from "react-feather";
import styled, { css, keyframes } from "styled-components";
import UnstyledButton from "../UnstyledButton";
import MaxWidthWrapper from "../MaxWidthWrapper";
import MobileMenu from "../MobileMenu";
import { QUERIES } from "../../constants";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const Icon = isOpen ? X : Menu;
  return (
    <MaxWidthWrapper>
      <Wrapper>
        <Logo>
          <img src="/logo.svg" alt="codigo" />
        </Logo>

        <Nav>
          <NavLink to="/work">Work</NavLink>
          <NavLink to="/solutions">Solutions</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/about-us">About us</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <Quote>Request a quote</Quote>
        </Nav>

        <MobileAction onClick={() => setIsOpen((prev) => !prev)}>
          <Icon color="white" width={24} height={24} />
        </MobileAction>
      </Wrapper>
      <ContentBg isOpen={isOpen}></ContentBg>
      <MobileMenu isOpen={isOpen} onDismiss={() => setIsOpen(false)} />
    </MaxWidthWrapper>
  );
};

const AnimWrapper = keyframes`
  from{
    transform:translateY(-10px);
    opacity:0;
  }
  to{
    transform:translateY(0);
    opacity:1;
  }
`;
const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 18px;

  animation: ${AnimWrapper} 0.7s ease-in-out;

  @media ${QUERIES.laptopAndUp} {
    padding-top: 30px;
  }
`;
const Logo = styled.div`
  width: 110px;
  img {
    width: 100%;
    display: block;
  }

  @media ${QUERIES.laptopAndUp} {
    width: 145px;
  }
`;

export const Nav = styled.nav`
  display: none;

  @media ${QUERIES.laptopAndUp} {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 16px;
  }
`;

const NavLink = styled(Link)`
  color: var(--color-black);
  text-decoration: none;
  font-size: 0.875rem;
  margin-right: 40px;
  position: relative;
  cursor: pointer;

  &:hover {
    /* border-bottom: 1px solid var(--color-black); */

    &::before {
      background: var(--color-black);
      width: 100%;
      transition: all 0.4s cubic-bezier(0.2, 0.6, 0.4, 1);
    }
  }

  &::before {
    content: "";
    width: 0;
    height: 1px;
    background: #fff;
    display: inline-block;
    position: absolute;
    top: calc(100% + 3px);
    left: -1px;
    transition: all 0.5s cubic-bezier(0.4, 0.6, 0.6, 1);
  }
`;

export const Quote = styled(UnstyledButton)`
  color: var(--color-white);
  background-color: var(--color-gray);

  padding: 17px 22px;
  border-radius: 30px;
  display: inline-block;
  transition: all 0.3s;

  &::before {
    height: 0px;
  }
  &:hover {
    transform: scale(1.1);
  }
`;
const AnimIcon = keyframes`
  from{
    opacity:0;
  }
  to{
    opacity:1
  }
`;
export const MobileAction = styled(UnstyledButton)`
  background-color: var(--color-gray);
  padding: 16px;
  border-radius: 50%;
  position: relative;
  z-index: 99;
  transition: all 0.3s;

  @media ${QUERIES.laptopAndUp} {
    display: none;
  }

  svg {
    animation: ${AnimIcon} 0.6s ease-in-out;
    display: block;
  }
`;

const MenuBg = css`
  width: 140vh;
  height: 140vh;
  background: var(--color-gray);
  transition-delay: 0ms;
  transform: translate(36%, -22%);

  @media ${QUERIES.tabletAndUp} {
    width: 150vw;
    height: 150vw;
    transform: translate(26%, -48%);
  }
`;
const ContentBg = styled.div`
  transition-delay: 350ms;
  width: 10px;
  height: 10px;

  transition: all 500ms ease-in-out;

  ${(props) => props.isOpen && MenuBg}
  z-index: -1;
  border-radius: 50%;

  position: absolute;
  top: 0;
  right: 0;
  margin: -40px;
`;

export default Navbar;
