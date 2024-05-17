import styled from "styled-components";
import Announcements from '../components/Announcements';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const Container = styled.div`

`;

const Wrapper = styled.div`
    padding:20px;

`;

const Title = styled.h1`
    font-weight:300;
    text-align:center;
    font-size:40px;
`;

const Top = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:20px;
`;

const Bottom = styled.div`
    display:flex;
    justify-content:space-between;
`;

const TopButton = styled.button`
    padding:10px;
    font-weight:600;
    cursor:pointer;
    border:2px solid lightgray;
    border:${props => props.type === "filled" && "none"};
    background-color:${props => props.type === "filled" ? "black" : "transparent"};
    color:${props => props.type === "filled" && "white"};
`;

const TopText = styled.div`
    text-decoration:underline;
    cursor:pointer;
    margin:0px 10px;
`;

const TopTexts = styled.div`

`;
const Info = styled.div`
    flex:3;
`;
const Summary = styled.div`
    flex:1;
`;
const Product = styled.div`
`;
const ProductDetail = styled.div`
`;
const Image = styled.img`
`;
const Details = styled.div`
`;
const ProductName = styled.p`
`;
const ProductId = styled.p`
`;
const ProductColor = styled.div`
`;
const ProductSize = styled.p`
`;
const PriceDetail = styled.div`
`;


const Cart = () => {
  return (
    <Container>
      <Announcements />
      <NavBar />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopText>
            <TopTexts>
              Shopping Bag(4)
            </TopTexts>
            <TopTexts>
              Your WishList (0)
            </TopTexts>
          </TopText>
          <TopButton type="filled">CHECK OUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
                <Details>
                  <ProductName><b>Product: </b>JESSIE THUNDER SHOES</ProductName>
                  <ProductId><b>ID: </b>2334378288949</ProductId>
                  <ProductColor />
                  <ProductSize><b>Size: </b>XL</ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                price
              </PriceDetail>
            </Product>
          </Info>
          <Summary>summary</Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  )
}

export default Cart
