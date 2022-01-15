import { useState } from "react";
import { ArrowLeft, Menu, X } from "react-feather";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import styled, { keyframes } from "styled-components";
import { QUERIES } from "../../constants";
import { workDetails } from "../../data";
import MobileMenu from "../MobileMenu";
import { MobileAction, Nav, Quote } from "../Navbar/Navbar";

const WorkDetails = () => {
  const [isOpen, setIsOpen] = useState(false);
  const Icon = isOpen ? X : Menu;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Wrapper>
      <Header>
        <BackHome to="/">
          <ArrowLeft color="var(--color-primary)" />
          Back To Work
        </BackHome>

        <MobileAction onClick={() => setIsOpen((prev) => !prev)}>
          <Icon color="white" width={24} height={24} />
        </MobileAction>

        <Nav>
          <Quote>Request a quote</Quote>
        </Nav>
      </Header>

      <Title>{workDetails.name}</Title>

      <Details>
        <SliderWrapper>
          <SliderBg background={workDetails.colour_scheme} />
          <StyledSlider {...settings}>
            {workDetails.gallery.map((photo) => (
              <ImgWrapper>
                <img src={photo.normal} alt={workDetails.name} />
              </ImgWrapper>
            ))}
          </StyledSlider>
        </SliderWrapper>

        <Texts>
          <Actions>
            <Action
              href={workDetails.ios_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Ios />
              <div>
                <p>Available on </p>
                <p>App Store</p>
              </div>
            </Action>

            <Action
              href={workDetails.android_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Android />
              <div>
                <p>Available on </p>
                <p>Google play</p>
              </div>
            </Action>
          </Actions>

          <Description>{workDetails.description}</Description>

          <FeaturesContainer>
            <FeatureTitle>Key Features</FeatureTitle>
            <KeyFeatures
              dangerouslySetInnerHTML={{ __html: workDetails.key_features }}
            ></KeyFeatures>
          </FeaturesContainer>
        </Texts>
      </Details>

      <MobileMenu isOpen={isOpen} onDismiss={() => setIsOpen(false)} />
    </Wrapper>
  );
};

const AnimWork = keyframes`
  from{
    transform: translateY(-50px);
    opacity:0;
  }
  to{
    transform: translateY(0%);
    opacity:1;
  }
`;
const Wrapper = styled.div`
  animation: ${AnimWork} 1s ease-in-out;
  width: 90%;
  margin: 0 auto;
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
`;
const BackHome = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Title = styled.h3`
  font-size: 2.8rem;
  margin-bottom: 30px;
  padding-top: 80px;
  font-weight: var(--font-weight-bold);
  @media ${QUERIES.tabletAndUp} {
    margin-bottom: 30px;
  }
`;

const AnimSlider = keyframes`
  from{
    transform: scale(0%);
    opacity: 0;
  }

  to{
    transform: scale(100%);
    opacity:1;
  }
`;

const AnimBg = keyframes`
  from{
    transform:scale(0%);
  }
  to{
    transform:scale(100%);
  }
`;

const SliderBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 75%;
  height: 75%;
  background: ${(props) => props.background};
  border-radius: 50%;
  z-index: -1;

  animation: ${AnimBg} 0.5s ease-in-out;
  animation-fill-mode: both;
  animation-delay: 1s;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0;

  @media ${QUERIES.tabletAndUp} {
    padding: 0;
    padding-bottom: 60px;
  }

  @media ${QUERIES.laptopAndUp} {
    flex-direction: row-reverse;
    align-items: start;
    padding-bottom: 90px;
    flex-wrap: wrap;
    gap: 32px;
    padding: 0;
    padding-bottom: 90px;
  }
`;

const SliderWrapper = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;

  @media ${QUERIES.laptopAndUp} {
    width: 50%;
    margin-top: -100px;
  }
`;

const StyledSlider = styled(Slider)`
  animation: ${AnimSlider} 1s ease-in-out;
  animation-delay: 1.5s;
  animation-fill-mode: both;
`;
const ImgWrapper = styled.div`
  > img {
    width: 100%;
    object-fit: cover;
  }
`;
const Actions = styled.div`
  margin-top: 48px;
  display: flex;
`;

const Action = styled.a`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 8px 12px;
  border: 1px solid #dad6da;
  font-size: 0.5rem;
  font-weight: var(--font-weight-bold);
  letter-spacing: 0.05em;
  text-transform: uppercase;

  p:last-of-type {
    font-size: 0.7rem;
    letter-spacing: 0;
    text-transform: none;
  }

  @media ${QUERIES.tabletAndUp} {
    padding: 12px;

    padding-right: 127px;
  }

  @media ${QUERIES.laptopAndUp} {
    padding: 16px 48px;
    flex-direction: row;
  }
`;
const Icon = styled.div`
  width: 25px;
  height: 25px;
  background-repeat: no-repeat;
  background-size: contain;
`;
const Ios = styled(Icon)`
  background-image: url(https://www.codigo.co/img/ui/ico-app_store.png);
`;

const Android = styled(Icon)`
  background-image: url(https://www.codigo.co/img/ui/ico-google_play-store.png);
`;

const Texts = styled.div`
  @media ${QUERIES.laptopAndUp} {
    flex: 1;
  }
`;
const Description = styled.p`
  margin: 30px 0;
  font-size: 0.9rem;
  line-height: 1.6rem;
  color: #272727;
`;

const FeatureTitle = styled.p`
  font-size: 1rem;
  font-weight: var(--font-weight-bold);
  color: #272727;
  margin-bottom: 15px;
`;

const FeaturesContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 24px;
  @media ${QUERIES.laptopAndUp} {
    flex-direction: row;
    gap: 64px;
  }
`;
const KeyFeatures = styled.div`
  font-size: 1rem;
  @media ${QUERIES.laptopAndUp} {
    padding-left: 32px;
    border-left: 1px solid #dad6da;
  }
  & li {
    margin-bottom: 15px;
  }
`;

export default WorkDetails;
