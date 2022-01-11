import { Facebook, Instagram, Linkedin, Twitter } from "react-feather";
import styled, { css } from "styled-components";
import { WEIGHTS } from "../../constants";

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Overlay isOpen={isOpen}>
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
    </Overlay>
  );
};
const Overlay = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: flex-end;
  z-index: -1;

  ${(props) => props.isOpen && "z-index: 1;"}
`;

const ModalOpen = css`
  width: 100vw;
  transform: scale(100%);
  border-radius: 0% 0% 2% 52% / 0% 1% 5% 17%;
  opacity: 1;
`;

const Content = styled.div`
  color: var(--color-white);

  padding: 24px 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  opacity: 0;

  background: var(--color-gray);

  padding-top: 100px;
  transform: scale(0%);
  border-radius: 50%;
  transform-origin: 83% 6%;
  transition: transform 0.5s ease, opacity 0.5s ease,
    border-radius 0.2s ease-in-out 0.2s;
  ${(props) => props.isOpen && ModalOpen}
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
