import { Facebook, Instagram, Linkedin, Twitter } from "react-feather";
import styled, { css, keyframes } from "styled-components";
import { WEIGHTS } from "../../constants";

const MobileMenu = ({ isOpen }) => {
  return (
    <Content aria-label="Menu" isOpen={isOpen}>
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
  );
};

const OpenStyles = css`
  transform: scale(100%);
  transition-delay: 0ms;
`;
const Content = styled.div`
  color: var(--color-white);
  padding-top: 100px;
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  flex-direction: column;

  align-items: center;
  text-align: center;

  transform: scale(0%);
  transition: transform 350ms;
  transition-delay: 350ms;
  transition-property: transform;
  ${(props) => props.isOpen && OpenStyles}
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
`;

const NavLink = styled.a`
  color: var(--color-white);
  font-weight: ${WEIGHTS.medium};
  text-decoration: none;
  font-size: 1.3rem;
  margin-bottom: 24px;
`;

const SubLink = styled.a`
  color: var(--color-white);
  font-size: 0.875rem;
  text-decoration: none;
  cursor: pointer;
`;

export default MobileMenu;
