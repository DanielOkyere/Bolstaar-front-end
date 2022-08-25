import React from "react";
import Container from "react-bootstrap"
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import axios from "axios";


const BASE_URL = import.meta.env.VITE_SERVER_URL;


function Products() {
    const products = axios.get(`${VITE_CMS_URL}/api/tools`)
    .then((Products) => Products.data.map((product) => {
        return product;
    }))
    .catch((error) => console.log(error))
    return (
        <>
            <NavBar></NavBar>
            <Container>

            </Container>
            <Footer></Footer>
        </>
    )
}

export default Products;