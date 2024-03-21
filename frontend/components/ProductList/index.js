"use client"
import React, {useState} from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Product from "../Product";
import styles from "./ProductList.module.css"
import { useSelector, useDispatch } from "react-redux";
import { toggleExpand } from "@/redux/slices/expandSlice";

const ProductList = ({ data }) => {
    const expand = useSelector(state => state.expand);
    const dispatch = useDispatch();

    const expandHandler = () => {
        dispatch(toggleExpand())
    }
    return (
        <Container>
            <Row>
                <Col>
                    <h1>All Products</h1>
                </Col>
                <Col>
                    <Button className={`${styles.expand_button} btn btn-light`} onClick={expandHandler}>{expand ? "Expand" : "Shrink"}</Button>
                </Col>
            </Row>          
            <Row>
                {data?.map((product) => {
                    return (
                        <Col sm={12} md={6} lg={3} xl={expand?4:3} key={product?._id}>
                            <Product product={product} />
                        </Col>
                    );
                })}
            </Row>
        </Container>
    );
};

export default ProductList;