import styled from "styled-components";
import { QUERIES } from "../../constants";
import Work from "../Work";

const spans2 = [1, 6, 7, 8, 11, 12, 15, 16, 17, 18];

const WorkGrid = ({ works }) => {
  return (
    <Wrapper>
      {works.map((work, i) => (
        <Work key={work.title} work={work} willSpan={spans2.includes(i + 1)} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media ${QUERIES.tabletAndUp} {
    grid-template-columns: 1fr 1fr;
  }

  @media ${QUERIES.laptopAndUp} {
    grid-template-columns: repeat(4, 1fr);
  }
`;
export default WorkGrid;
