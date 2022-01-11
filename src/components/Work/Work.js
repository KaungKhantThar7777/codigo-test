import styled, { css, keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { QUERIES } from "../../constants";
import Legend from "../Legend";

const Work = ({ work, willSpan }) => {
  return (
    <Wrapper willSpan={willSpan} to={"/work/something"}>
      <Img src={work.photo} alt={work.title} />
      <Categories>
        {work.category.map((c, i) => (
          <span key={c}>
            {c}
            {i + 1 === work.category.length ? "" : ", "}
          </span>
        ))}
      </Categories>
      <Title>{work.title}</Title>
      <Legends>
        {work.legends.map((legend) => (
          <LegendWrapper key={legend}>
            <Legend id={legend} size={20} color="black" />
          </LegendWrapper>
        ))}
      </Legends>
    </Wrapper>
  );
};

const Span2 = css`
  grid-column: span 2;
`;
const AnimWork = keyframes`
  from{
    transform:scale(0%) translateY(-100%);
    opacity:0;
  }
  to{
    transform:scale(100%) translateY(0%);
    opacity:1;
  }
`;
const Wrapper = styled(Link)`
  perspective: 1000px;
  display: flex;
  flex-direction: column;
  position: relative;
  height: 280px;
  padding: 30px;
  color: var(--color-white);
  cursor: pointer;
  transition: background 0.8s ease-in;
  animation: ${AnimWork} 0.8s both cubic-bezier(0.4, 0.6, 0.6, 1);
  transform-origin: 80% 90%;
  animation-delay: 0.0339282s;
  backface-visibility: visible;
  overflow: hidden;

  @media ${QUERIES.tabletAndUp} {
    min-height: 42vw;
    ${(p) => {
      return p.willSpan && Span2;
    }}
  }

  @media ${QUERIES.laptopAndUp} {
    min-height: 32.5vw;
    max-height: 32.5vw;
  }

  &::after {
    content: "";
    width: 100%;
    height: 100%;
    background: #000;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    z-index: -1;
    transition: opacity 0.8s;
  }
  &:hover {
    &::after {
      opacity: 0.325;
    }
  }
`;
const Img = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  backface-visibility: visible;
  z-index: -1;
  transition: transform 0.7s ease-in-out;
  will-change: transform;
  ${Wrapper}:hover & {
    transform: scale(1.1);
    transition: all 0.5s ease-in;
    background-color: rgba(0, 0, 0, 0.325);
  }
`;

const Title = styled.p`
  font-size: 5.5vw;
  font-weight: var(--font-weight-bolder);

  @media ${QUERIES.tabletAndUp} {
    font-size: 3.25vw;
  }

  @media ${QUERIES.laptopAndUp} {
    font-size: 1.25vw;
  }
`;

const Categories = styled.div`
  font-size: 2.75vw;
  font-weight: var(--font-weight-bold);

  @media ${QUERIES.laptopAndUp} {
    font-size: 0.875vw;
  }
`;

const Legends = styled.div`
  display: flex;
  margin-top: auto;

  gap: 10px;
`;
const LegendWrapper = styled.div`
  background: var(--color-white);
  padding: 6px;
  border-radius: 50%;
  & > svg {
    display: block;
  }
`;
export default Work;
