import styled, { css } from "styled-components";
import { QUERIES } from "../../constants";
import Legend from "../Legend";

const Work = ({ work, willSpan }) => {
  return (
    <Wrapper willSpan={willSpan}>
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
const Wrapper = styled.a`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 280px;
  padding: 30px;
  color: var(--color-white);
  cursor: pointer;
  transition: background 0.8s ease-in;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.1);

  @media ${QUERIES.tabletAndUp} {
    min-height: 42vw;
    ${(p) => {
      return p.willSpan && Span2;
    }}
  }

  &:hover {
    transition: background 0.6s ease-in;
    background-color: rgba(0, 0, 0, 0.325);
  }

  @media ${QUERIES.tabletAndUp} {
    min-height: 32.5vw;
    max-height: 32.5vw;
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
    transform: scale(1.15);
    transition: transform 0.5s ease-in-out;
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
