import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
flex:1; 
margin: 3px;
height: 70vh;
position: relative;
overflow: hidden;
border: solid black 2px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  ${mobile({ height: "30vh" })}
`;


const Title = styled.h1`
color: white;
margin-bottom: 20px;
font-size: calc(.8vw + 6pt) ;
text-align: center;
opacity:.9;
@media (max-width : 768px){
  font-size: calc(1.5vw + 6pt) ;
}

`;

const Info = styled.div`
position: absolute;
top:0;
left:0;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
width: 100%;
height: 100%;
background-color: rgba(0,0,0,.2);
transition: all ease-in-out .5s;
opacity: 0;
&:hover{
  opacity: 1;
}

`;

const CustomButton = styled.button`
border:none;
padding: 10px;
background-color: white;
color:gray;
cursor: pointer;
font-weight: 600;
transition: all ease-in-out .5s;
&:hover{
  background-color: #e9f5f5;
  color: black;
}


`;

const CategorieItem = ({ item }) => {
  return (
    <Container>
      <Link to ={`/products/${item.cat}`}>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <CustomButton>Shop now</CustomButton>
      </Info>
      </Link>

    </Container>
  );
};

export default CategorieItem;
