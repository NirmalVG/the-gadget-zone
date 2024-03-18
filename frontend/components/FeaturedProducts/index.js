import Link from "next/link";
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Product from "../Product";
import styles from "./FeaturedProducts.module.css"

const FeaturedProducts = ({ data }) => {
    return (
        <Container>
            <Row>
                <Col md={6} lg={8}><h1>Featured Products</h1></Col>
                <Col md={6} lg={4}><Link href="/products"><Button className={`${styles.view_button}`}>View All Products</Button></Link></Col>
            </Row>
            
            <Row>
                {data?.slice(0, 4).map((product) => {
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
