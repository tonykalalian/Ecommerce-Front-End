import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Footer from "../components/Footer";
import NewsLetter from "../components/NewsLetter";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 95%;
  margin: 0 auto;
  padding: 3rem;
  background: #fff;
  border-radius: 0.4rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
  @media screen and (max-width: 780px) {
    width: 100%;
    padding: 2rem;
  }
`;
const Title = styled.h1`
  margin: 20px;
  color: #f0b50a;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 3em;
  line-height: 1.5;
  text-align: center;
  @media screen and (max-width: 780px) {
    font-size: 2em;
  }
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 40px;
  border-bottom: solid black 1px;
  @media screen and (max-width: 780px) {
    flex-direction: column;
    padding: 0px;
  }
`;
const Filter = styled.div`
  margin: 20px;
  display: flex;
  align-items: center;
  @media screen and (max-width: 780px) {
    margin: 0px;
    padding: 10px;
    width: 100%;
    justify-content: space-between;
    border-bottom: solid black 1px;
  }
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  @media screen and (max-width: 780px) {
    font-size: 15px;
    margin-right: 0px;
    margin-bottom: 10px;
  }
`
const Select =styled.select`
    padding: 10px;
    margin-right: 20px;
    @media screen and (max-width: 780px) {
    margin-right: 0px;
    margin-bottom: 10px;
    }
    ${mobile({ margin: "10px 0px" })}

`
const Option =styled.option`
    font-size: 20px;
    font-weight: 600;
    @media screen and (max-width: 780px) {
    font-size: 15px;
    margin-right: 0px;
    margin-bottom: 10px;
    }

`

const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>Poultry </Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Option disabled selected>
                weight
            </Option>
            <Option>200 g</Option>
            <Option>400 g</Option>
            <Option>600 g</Option>
            <Option>800 g</Option>
            <Option>1000 g</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option >Price (asc)</Option>
            <Option >Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default ProductList;
