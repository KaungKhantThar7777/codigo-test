import { useState } from "react";
import { Menu, X } from "react-feather";
import styled, { keyframes } from "styled-components";
import UnstyledButton from "../UnstyledButton";
import MaxWidthWrapper from "../MaxWidthWrapper";
import MobileMenu from "../MobileMenu";
import { QUERIES } from "../../constants";

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
          <NavLink href="/work">Work</NavLink>
          <NavLink href="/solutions">Solutions</NavLink>
          <NavLink href="/services">Services</NavLink>
          <NavLink href="/about-us">About us</NavLink>
          <NavLink href="/blog">Blog</NavLink>
          <Quote href="/quote">Request a quote</Quote>
        </Nav>

        <MobileAction onClick={() => setIsOpen((prev) => !prev)}>
          <Icon color="white" width={24} height={24} />
        </MobileAction>
      </Wrapper>

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

const NavLink = styled.a`
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

export const Quote = styled(NavLink)`
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
export default Navbar;
