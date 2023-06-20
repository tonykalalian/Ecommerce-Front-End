import Badge from "@mui/material/Badge";
import styled from "styled-components";
import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import {mobile} from "../responsive";
const Navbar = () => {
  const Container = styled.div`
    height: 60px;
    background-color: #fff;
    color: #000;
    top: 0;
    left: 0;
    right: 0;
    z-index: 3;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px;
    ${mobile({ height: "50px" })}

    

  `;

  const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ padding: "10px 0px" })}


  `;

  const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    .icon {
      font-size: 20px;
      margin-right: 15px;
      ${mobile({ display: "none" })}

    }
  `;

  const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({ display: "none" })}


  `;

  const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
    width: fit-content;
    ${mobile({ marginLeft: "10px" })}


  `;

  const Input = styled.input`
    border: none;
    outline: none!important;
    ${mobile({ width: "50px" })}

  `;

  const Center = styled.div`
    flex: 1;
    text-align: center;
    color: white;
    border-radius: 5px;
    padding: 5px;
    ${mobile({ flex: 1, textAlign: "left" })}
    &:hover{
      color: #000;
    }


  `;

  const Logo = styled.h1`
    font-weight: bold;
    ${mobile({ fontSize: "24px" })}
  `;
  const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({ flex: 2, justifyContent: "center" })}
    

  `;

  const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({ fontSize: "12px", marginLeft: "10px" })}
    &:hover{
      color: #000;
    }
    svg {
      font-size: 20px;
    }


  `;
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>OLIVA </Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
