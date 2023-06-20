import styled from "styled-components"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

const Container=styled.div`
flex: 1;
margin: 5px;
min-width: 280px;
height: 350px;
display: flex;
align-items: center;
justify-content: center;
background-color: #f5fbfd;
position: relative;
border-radius: .4rem;
transition: all ease-in-out .3s ;
&:hover{
    transform: scale(1.05);
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
}



`
const Circle =styled.div`
width: 100px;
height: 100px;
border-radius: 50%;
background-color: transparent;
position: absolute;
top:-46px;
left: -79px;
z-index: 1;
box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
animation: animate 2s linear infinite;
@keyframes animate{
    0%{
        transform: rotate(0deg);
    }
    100%{
        transform: rotate(360deg);
    }
}



`
const Image =styled.img`
height: 75%;
z-index: 2;
object-fit: cover;
opacity:.8;
transition: all ease-in-out .3s ;
&:hover{
    opacity: 1;
}

`
const Info =styled.div`
width: 100%;
height: 100%;
position: absolute;
top:0;
left: 0;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
transition: all ease-in-out .3s ;
opacity: 0;
z-index: 3;
padding: 1em;
&:hover{
    background-color: rgba(0,0,0,.1);
    opacity: 1;
}



`
const Icon =styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
margin: 5px;
cursor: pointer;
transition: all ease-in-out .3s ;
&:hover{
    background-color: #e9f5f5;
    transform: scale(1.1);
}


`
const Product = ({item}) => {
  return (
    <Container>
<Circle/>
<Image src={item.img}/>
<Info>
    <Icon>
    <ShoppingCartOutlinedIcon/>
    </Icon>
    <Icon>
    <SearchOutlinedIcon/>
    </Icon>
    <Icon>
    <FavoriteBorderOutlinedIcon/>
    </Icon>
</Info>
    </Container>
  )
}

export default Product