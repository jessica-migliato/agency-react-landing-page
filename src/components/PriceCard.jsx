import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-right: 50px;
  padding: 20px;
  -webkit-box-shadow: 3px 3px 26px -3px rgba(0, 0, 0, 0.35);
  box-shadow: 3px 3px 26px -3px rgba(0, 0, 0, 0.35);
  background-color: #ffffff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 1024px) {
    display: grid;
    margin-right: 0;
    margin-bottom: 10px;
    padding: 5px;
    grid-template-columns: 1fr;
    padding: 5px;
    margin-bottom: 5px;
    justify-content: center;
  }
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Price = styled.span`
  font-weight: bold;
  font-size: 50px;

  @media only screen and (max-width: 1024px) {
    font-size: 30px;
    display: grid;
  }
`;

const Type = styled.button`
  padding: 10px;
  margin: 10px 10px;
  border: 1.5px solid #59a96a;
  color: #59a96a;
  background-color: #ffffff;
  border-radius: 20px;

  @media only screen and (max-width: 1024px) {
    display: flex;
  }
`;

const List = styled.ul`
  list-style: none;
  padding-inline-start: 0;

  @media only screen and (max-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr;
  }
`;

const ListItem = styled.li`
  margin: 30px 0;

  @media only screen and (max-width: 1024px) {
    margin: 10px;
    font-size: 12px;
    display: grid;
    margin-bottom: 10px;
    margin-right: 20px;
  }
`;

const Button = styled.button`
  border: none;
  background-color: #59a96a;
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
  padding: 15px;
  border-radius: 10px;
  cursor: pointer;

  @media only screen and (max-width: 1024px) {
    font-size: 12px;
    padding: 5px;
    text-align: center;
  }
`;

const PriceCard = ({ price, type }) => {
  return (
    <Container>
      <PriceContainer>
        $<Price>{price}</Price>/month
        <Type>{type} Plan</Type>
      </PriceContainer>
      <List>
        <ListItem>200 Hand-Crafted Templates</ListItem>
        <ListItem>Exclusive Support</ListItem>
        <ListItem>50+ PreBuilt Websites</ListItem>
        <ListItem>Premium Plugins</ListItem>
        {""}
      </List>
      <Button>Join Now</Button>
    </Container>
  );
};

export default PriceCard;
