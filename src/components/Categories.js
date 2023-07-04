import styled from "styled-components"
import {cat} from "../data"
import CategorieItem from "./CategorieItem"
import { mobile } from "../responsive"


const Container =styled.div`
display: flex;
padding: 20px;
justify-content: space-between;
${mobile({padding :"0px" , flexDirection:"column"})}


`

const Categories = () => {
  return (
    <Container>
{cat.map(item=>(
    <CategorieItem item ={item} key={item.id}/>
))}
    </Container>
  )
}

export default Categories