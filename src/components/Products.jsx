import styled from "styled-components";
import axios from "axios";
import Product from "./Product";
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
    const BASE_URL = "http://localhost:5050/api/products";

    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get(cat ? `${BASE_URL}?category=${cat}` : `${BASE_URL}`);
                const data = res.data.products;
                console.log(data);
                setProducts(data);
            } catch (error) {
                console.log(error.message);
            }
        }
        getProducts();
    }, [cat]);

    useEffect(() => {
        cat &&
            setFilteredProducts(
                products.filter(item =>
                    Object.entries(filters).every(([key, value]) =>
                        item[key].includes(value)
                    )
                )
            );
    }, [products, cat, filters]);

    useEffect(() => {
        if (sort === "newest") {
            setFilteredProducts(prev =>
                [...prev].sort((a, b) => (a.createdAt > b.createdAt ? -1 : 1))
            );
        } else if (sort === "asc") {
            setFilteredProducts(prev =>
                [...prev].sort((a, b) => (a.price > b.price ? 1 : -1))
            );
        } else {
            setFilteredProducts(prev =>
                [...prev].sort((a, b) => (a.price > b.price ? -1 : 1))
            );
        }
    }, [sort])

    return (
        <Container>

            {cat ? filteredProducts.map((item) =>
                <Product key={item.id} item={item} />
            ) : products.slice(0, 8).map((item) =>
                <Product item={item} key={item.id} />
            )}
        </Container>
    )
}

export default Products