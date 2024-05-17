import styled from "styled-components"
import NavBar from "../components/NavBar"
import NewsLetter from "../components/NewsLetter"
import Announcements from "../components/Announcements"
import Footer from "../components/Footer"

const Container = styled.div`
    display: flex;
    flex-direction: column;
`
const Wrapper = styled.div`
    display: flex;
    padding: 50px;
`
const ImageContainer = styled.div`
    flex: 1;
`
const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
`
const Title = styled.h1`
    font-weight: 200;
    font-size: 50px;
`
const Desc = styled.p`
    margin: 20px 0px;
    font-size: 20px;
`
const Price = styled.span`
    font-size: 40px;
    font-weight: 100;
    margin-top: 20px;
`
const FilterContainer = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-between;
    margin: 30px 0px;
`

const Filter = styled.div`
    display: flex;
    align-items: center;
`

const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`

const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
    margin: 0px 5px;
    cursor: pointer;
`

const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`

const FilterSizeOption = styled.option`
    padding: 5px;
`


const Product = () => {
    return (
        <Container>
            <Announcements />
            <NavBar />
            <Wrapper>
                <ImageContainer>
                    <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
                </ImageContainer>
                <InfoContainer>
                    <Title>
                        Denim Jumpsuit
                    </Title>
                    <Desc>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit, consequatur. Cumque ea sunt doloribus, tenetur cum quae. Libero excepturi quidem laboriosam reprehenderit ea, esse sunt, obcaecati eum reiciendis totam ex?
                    </Desc>
                    <Price>$20</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color="black" />
                            <FilterColor color="darkblue" />
                            <FilterColor color="gray" />
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>XS</FilterSizeOption>
                                <FilterSizeOption>S</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>L</FilterSizeOption>
                                <FilterSizeOption>XL</FilterSizeOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                </InfoContainer>
            </Wrapper>
            <NewsLetter />
            <Footer />
        </Container>
    )
}

export default Product
