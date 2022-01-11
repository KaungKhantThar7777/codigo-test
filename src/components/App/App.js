import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Footer from "../Footer";
import OurWork from "../OurWork";
import WorkDetails from "../WorkDetails";

function App() {
  return (
    <Wrapper>
      <Routes>
        <Route path="/" element={<OurWork />} />
        <Route path="/work/:slug" element={<WorkDetails />} />
      </Routes>

      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.div``;
export default App;
