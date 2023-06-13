import React from "react";
import styled from "styled-components";

const Container = styled.div``;

const Image = styled.img``;

const Title = styled.h1``;

const Info = styled.div``;

const CustomButton = styled.button``;

const CategorieItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <CustomButton>Shop now</CustomButton>
      </Info>
    </Container>
  );
};

export default CategorieItem;
