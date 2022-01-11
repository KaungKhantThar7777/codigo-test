import { useState } from "react";
import { Layout, Monitor, Settings, Smartphone } from "react-feather";
import styled, { css } from "styled-components";
import { QUERIES } from "../../constants";
import { categories, works } from "../../data";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Navbar from "../Navbar";
import UnstyledButton from "../UnstyledButton";
import WorkGrid from "../WorkGrid";

const OurWork = () => {
  const [category, setCategory] = useState("All");

  const showWorks =
    category === "All"
      ? works
      : works.filter((w) => w.category.includes(category));
  return (
    <>
      <Navbar />
      <MaxWidthWrapper>
        <Description>
          <p>Here's the 5% of</p>
          <p>our published work.</p>
          <p>See 100% of our power.</p>
        </Description>
        <CategoriesWrapper>
          <Categories>
            {categories.map((c) => (
              <UnstyledButton key={c} onClick={() => setCategory(c)}>
                <Category isActive={category === c}>{c}</Category>
              </UnstyledButton>
            ))}
          </Categories>
          <Legend>
            <p>LEGEND</p>
            <LegendTypes>
              <LegendType>
                <Smartphone width={20} />
                APP
              </LegendType>

              <LegendType>
                <Monitor width={20} />
                WEB
              </LegendType>

              <LegendType>
                <Settings width={20} />
                CMS
              </LegendType>

              <LegendType>
                <Layout width={20} />
                UI/UX
              </LegendType>
            </LegendTypes>
          </Legend>
        </CategoriesWrapper>
      </MaxWidthWrapper>
      <WorkGrid works={showWorks} />
    </>
  );
};

const Description = styled.div`
  padding-top: 120px;
  padding-bottom: 60px;
  font-weight: var(--font-weight-bold);

  p {
    font-size: 11vw;
    line-height: 13vw;

    @media ${QUERIES.tabletAndUp} {
      font-size: 6.5vw;
    }

    @media ${QUERIES.laptopAndUp} {
      font-size: 4rem;
      line-height: 5rem;
    }
  }
  p:last-of-type {
    color: var(--color-primary);
  }
`;

const CategoriesWrapper = styled.div`
  display: none;
  gap: 64px;

  @media ${QUERIES.tabletAndUp} {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    flex-wrap: wrap;
    margin-bottom: 50px;
  }

  @media ${QUERIES.laptopAndUp} {
    margin-bottom: 80px;
  }
`;

const Categories = styled.div`
  min-width: 500px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5px;
  flex: 3;
`;

const ActiveCategory = css`
  font-weight: var(--font-weight-bold);
  margin-left: 25px;
`;
const Category = styled.p`
  padding: 8px 0;
  position: relative;
  transition: margin-left 0.6s cubic-bezier(0.2, 1, 0.2, 1), top 1.5s;

  ${(p) => p.isActive && ActiveCategory}

  &::before {
    content: "";
    width: 0;
    height: 2px;
    position: absolute;
    top: 50%;
    margin-top: -1px;
    left: -24px;
    display: inline-block;
    background-color: #d5333e;
    transition: width 0.4s cubic-bezier(0.2, 1, 0.2, 1);

    ${(p) => p.isActive && "width: 15px;"}
  }
`;
const Legend = styled.div`
  margin-top: 48px;
  flex: 1;

  p {
    font-weight: var(--font-weight-bold);
    font-size: 0.7rem;
    margin-bottom: 15px;
  }
`;

const LegendTypes = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  padding: 4px 18px;
  border-left: 1px solid var(--color-black);
`;
const LegendType = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.725rem;
  svg {
    display: block;
    margin-right: 10px;
  }
`;
export default OurWork;
