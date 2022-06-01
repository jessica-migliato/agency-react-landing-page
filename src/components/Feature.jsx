import React from "react";
import styled from "styled-components";
import App3 from "../img/app-3.png";
import AnimatedShapes from "./AnimatedShapes";

const Container = styled.div`
  display: flex;

  @media only screen and (max-width: 1024px) {
    flex-direction: column;
    padding: 30px 20px;
  }
`;

const Left = styled.div`
  width: 50%;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 1024px) {
    display: none;
  }
`;

const Image = styled.img`
  width: 80%;
`;

const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media only screen and (max-width: 1024px) {
    width: 100%;
  }
`;

const Title = styled.span`
  font-size: 70px;

  @media only screen and (max-width: 1024px) {
    font-size: 50px;
  }
`;

const SubTitle = styled.span`
  font-size: 24px;
  font-style: italic;
  color: #474a2c;
  margin-top: 30px;
`;

const Desc = styled.p`
  font-size: 20px;
  color: #636940;
  margin-top: 30px;
`;

const Button = styled.button`
  width: 150px;
  border: none;
  padding: 15px 20px;
  background-color: #59a96a;
  color: #ffffff;
  font-size: 20px;
  border-radius: 20px;
  margin-top: 20px;
  cursor: pointer;
`;

const Feature = () => {
  return (
    <Container>
      <Left>
        <Image src={App3} />
      </Left>
      <Right>
        <Title>
          <b>Good</b> design
          <br />
          <b>Good</b> business
        </Title>
        <SubTitle>We know that good design means good business.</SubTitle>
        <Desc>
          We help our clients succeed by creating brand identities, digital
          experiences, and print materials that communicate clearly, achieve
          marketing goals, and look fantastic.
        </Desc>
        <Desc>
          We care your business and guarantee you to achieve marketing goals.
        </Desc>
        <Button>Learn More</Button>
      </Right>
      <AnimatedShapes />
    </Container>
  );
};
export default Feature;
