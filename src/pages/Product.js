import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Newsletter from "../components/NewsLetter";
import Footer from "../components/Footer";
import { Add, Remove } from "@mui/icons-material";
import { mobile } from "../responsive";

const Container = styled.div`


`;

const Wrapper = styled.div`
  display: flex;
  padding: 50px;
  ${mobile({ padding: "10px", flexDirection:"column" })}
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;  
  ${mobile({ padding: "10px" })}

`;

const Title = styled.h1`
  font-weight: 200;
  color: #3498db;
`;

const Desc = styled.p`
  margin: 20px 0;
  line-height: 1.6em;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 2rem;
  color: #e74c3c;
`;  

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.2) -1px -0.1rem 1rem inset;
`;
const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;
  ${mobile({ width: "100%" })}

`;
const Amount = styled.span`
  width: 2rem;
  height: 2rem;
  border-radius: 0.5rem;
  border: 1px solid #000;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.5rem;
  margin: 0 1rem;
  color: #000;
  background-color: #fff;


`;
const Button = styled.button`
  padding: 1rem;
  border: 1px solid #000;
  background-color: #fff;
  cursor: pointer;
  font-weight: 500;
  font-size: 1.2rem;
  border-radius: 0.5rem;
  &:hover {
    background-color: #000;
    color: #fff;
  }
  &:focus {
    outline: none;
  }
  &:active {
    transform: scale(0.98);
  }
  @media screen and (max-width: 780px) {
    font-size: 1rem;
  }
  @media screen and (max-width: 480px) {
    font-size: 0.8rem;  
  }
  @media screen and (max-width: 360px) {
    font-size: 0.7rem;
  }
  @media screen and (max-width: 320px) {
    font-size: 0.6rem;
  }
  @media screen and (max-width: 280px) {
    font-size: 0.5rem;
  }
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 1.5rem;
  color: #000;
  @media screen and (max-width: 780px) {
    font-size: 1rem;
  }
  @media screen and (max-width: 480px) {
    font-size: 0.8rem;
  }
  @media screen and (max-width: 360px) {
    font-size: 0.7rem;
  }
  @media screen and (max-width: 320px) {
    font-size: 0.6rem;
  }
  @media screen and (max-width: 280px) {
    font-size: 0.5rem;
  }
  

`;

const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80" />
        </ImgContainer>
        <InfoContainer>
          <Title>Tony loz</Title>
          <Desc>
            <p>lorem </p>
          </Desc>
          <Price>20$</Price>
          <AddContainer>
            <AmountContainer>
              <Remove/>
              <Amount>1</Amount>
              <Add/>
            </AmountContainer>
            <Button>Add to cart</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>

      <Newsletter />
      <Footer />
    </Container>
    
  );
};

export default Product;
