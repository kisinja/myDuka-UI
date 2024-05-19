import styled from "styled-components";
import axios from "axios";
import { popularProducts } from "../data";
import Product from "./Product";
import { mobile } from "../responsive";
import { useEffect, useState } from "react";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`
const Products = ({ cat, filters, sort }) => {

    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = axios.get()
            } catch (error) {
                console.log(error.message);
            }
        };
        getProducts();
    }, [cat]);


    return (
        <Container>
            {popularProducts.map(item => (
                <Product key={item.id} item={item} />
            ))}
        </Container>
    )
}

export default Products