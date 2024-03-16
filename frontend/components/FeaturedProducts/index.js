
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Product from "../Product";

const FeaturedProducts = ({ data }) => {
    return (
        <Container>
            <h1>Featured Products</h1>
            <Row>
                {data?.map((product) => {
                    return (
                        <Col sm={12} md={6} lg={4} xl={3} key={product?._id}>
                            <Product product={product} />
                        </Col>
                    );
                })}
            </Row>
        </Container>
    );
};

export default FeaturedProducts;
