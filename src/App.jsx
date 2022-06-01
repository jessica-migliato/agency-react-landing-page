import React from "react";
import styled, { css } from "styled-components";
import Contact from "./components/Contact";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Price from "./components/Price";
import Service from "./components/Service";

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

const PriceContainer = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;

  @media only screen and (max-width: 1024px) {
    height: unset;
    padding: 20px 0;
  }
`;

const Shape = css`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

const IntoShape = styled.div`
  ${Shape}
  clip-path: polygon(67% 0%, 100% 0%, 100% 100%, 55% 100%);
  background-color: #b4e7ce;
`;

const FeatureShape = styled.div`
  ${Shape}
  clip-path: polygon(0% 0%, 55% 0%, 33% 100%, 0% 100%);
  background-color: #9bdeac;
`;

const ServiceShape = styled.div`
  ${Shape}
  clip-path: polygon(0% 0%, 33% 0%, 33% 100%, 0% 100%);
  background-color: #b4e7ce;
`;

const PriceShape = styled.div`
  ${Shape}
  clip-path: polygon(33% 0%, 100% 0%, 100% 100%, 67% 100%);
  background-color: #9bdeac;
`;

const App = () => {
  const smallScreen = window.screen.width <= 480 ? true : false;

  return (
    <>
      <Container>
        <Navbar />
        <Intro />
        <IntoShape />
      </Container>
      <Container>
        <Feature />
        <FeatureShape />
      </Container>
      <Container>
        <Service />
        <ServiceShape />
      </Container>
      <PriceContainer>
        <Price />
        {!smallScreen && <PriceShape />}
      </PriceContainer>
      <Container>
        <Contact />
        <Footer />
      </Container>
    </>
  );
};

export default App;
