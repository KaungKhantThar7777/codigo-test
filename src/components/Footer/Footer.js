import {
  ArrowRight,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "react-feather";
import styled from "styled-components";
import { QUERIES } from "../../constants";

const chats = [
  {
    title: "Build",
    text: "Help you build something",
  },
  {
    title: "Co-incubate",
    text: "Co-incubate an indea together",
  },
  {
    title: "Customise",
    text: "Customise a asolution for your business",
  },
  {
    title: "Organise",
    text: "Organise learning session with us",
  },
];
const Footer = () => {
  return (
    <Wrapper>
      <Title>Let's have a chat</Title>
      <Chats>
        {chats.map(({ title, text }) => (
          <Chat key={text}>
            <ChatTitle>
              {title}
              <Arrow color="var(--color-primary)" />
            </ChatTitle>
            <p>{text}</p>
          </Chat>
        ))}
      </Chats>

      <Contact>
        <Socials>
          <Facebook width={40} height={30} />
          <Twitter width={40} height={30} />
          <Instagram width={40} height={30} />
          <Linkedin width={40} height={30} />
        </Socials>
        <p>Copyright © Codigo - Mobile App Developer Singapore</p>
        <p>
          +65 6455 9790 • 24 Sin Ming Lane, Midview City #04-91 Singapore 573970
        </p>
      </Contact>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding-top: 50px;
  padding-left: 16px;
  padding-right: 16px;
  background: rgb(250, 250, 250);
`;
const Title = styled.h4`
  text-align: center;
  font-size: 2.5rem;
  font-weight: var(--color-weight-bold);
  color: var(--color-primary);
  padding-bottom: 40px;
`;

const Chats = styled.div`
  display: flex;
  flex-direction: column;

  @media ${QUERIES.laptopAndUp} {
    flex-direction: row;
    justify-content: space-between;

    width: 90%;
    max-width: 1400px;
    margin: 0 auto 85px;
  }
`;
const Chat = styled.div`
  position: relative;
  padding: 20px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  @media ${QUERIES.laptopAndUp} {
    border-bottom: none;
    padding: 20px 40px;
    &:not(:last-of-type) {
      padding-right: 60px;
      border-right: 1px solid rgba(0, 0, 0, 0.1);
    }
  }
  p {
    font-size: 0.8rem;
  }
`;

const ChatTitle = styled.h5`
  position: relative;
  display: inline-block;
  width: 90%;
  font-weight: var(--font-weight-bold);
  font-size: 1.8rem;
  transition: color 0.8s cubic-bezier(0.2, 0.6, 0.4, 1);
  ${Chat}:hover & {
    color: var(--color-primary);
  }

  @media ${QUERIES.laptopAndUp} {
    display: inline;
  }
`;

const Arrow = styled(ArrowRight)`
  display: block;
  position: absolute;
  right: -32px;
  top: 5px;

  transition: right 1.25s cubic-bezier(0.2, 0.6, 0.4, 1);
  ${Chat}:hover & {
    right: -48px;
  }
`;

const Contact = styled.div`
  padding: 65px 0;

  p {
    font-size: 0.875rem;
    text-align: center;
  }

  p:last-of-type {
    margin-top: 15px;
  }
`;

const Socials = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-bottom: 30px;
`;
export default Footer;
