import styled from "styled-components";
import Footer from "../Footer";
import Navbar from "../Navbar";
import OurWork from "../OurWork";

function App() {
  return (
    <Wrapper>
      <Navbar />
      <OurWork />
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.div``;
export default App;
