import { Facebook, Instagram, Linkedin, Twitter } from "react-feather";
import styled, { css, keyframes } from "styled-components";

import { QUERIES, WEIGHTS } from "../../constants";

import UnstyledButton from "../UnstyledButton";

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Overlay isOpen={isOpen}>
      <Content aria-label="Menu">
        <Nav>
          <NavLink href="/work">Work</NavLink>
          <NavLink href="/solutions">Solutions</NavLink>
          <NavLink href="/services">Services</NavLink>
          <NavLink href="/about-us">About us</NavLink>
          <NavLink href="/blog">Blog</NavLink>
          <NavLink href="/quote">Request a quote</NavLink>
          <NavLink href="/chat">Let's chat</NavLink>
        </Nav>
        <Socials>
          <SubLink>
            <Facebook width={40} height={30} />
          </SubLink>
          <SubLink>
            <Twitter width={40} height={30} />
          </SubLink>
          <SubLink>
            <Instagram width={40} height={30} />
          </SubLink>
          <SubLink>
            <Linkedin width={40} height={30} />
          </SubLink>
        </Socials>
      </Content>
    </Overlay>
  );
};
const AnimMobileMenu = css`
  transform: translate(0%, 0%);
  opacity: 1;
`;
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--color-backdrop);
  display: flex;
  justify-content: flex-end;
  z-index: 1;
  transform: translate(100%, -100%);
  opacity: 0;
  transition: transform 0.5s ease-in-out, opacity 0.4s ease;

  ${(p) => p.isOpen && AnimMobileMenu}
`;

const Content = styled.div`
  background: var(--color-gray);
  color: var(--color-white);
  width: 100%;
  height: 100%;
  padding: 24px 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border-radius: 0% 10% 0% 45% / 0% 0% 10% 15%;
  padding-top: 100px;
`;

const Socials = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-bottom: 30px;
  margin-top: 32px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const NavLink = styled.a`
  color: var(--color-white);
  font-weight: ${WEIGHTS.medium};
  text-decoration: none;
  font-size: 1.3rem;
  text-transform: uppercase;
  margin-bottom: 24px;
`;

const SubLink = styled.a`
  color: var(--color-white);
  font-size: 0.875rem;
  text-decoration: none;
  cursor: pointer;
`;

export default MobileMenu;
