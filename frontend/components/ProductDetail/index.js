"use client";
import React, { useState } from "react";
import {
    Container,
    Row,
    Col,
    ListGroup,
    Card,
    Button,
    Image,
    Form,
} from "react-bootstrap";
import Rating from "../Rating";
import Link from "next/link";
import { addToCart } from "@/redux/slices/cartSlice";
import { useDispatch } from "react-redux";
import { useRouter } from 'next/navigation'


const ProductDetail = ({ product }) => {
    const [qty, setQty] = useState(1);
    const dispatch = useDispatch();
    const router = useRouter();

    const addToCartHandler = ( ) => {
        dispatch(addToCart({...product, qty}))
        router.push('/cart')
    }

    return (
        <Container>
            <Link className="btn btn-light my-3" href="/">
                Go Back
            </Link>
            <Row>
                <Col md={5}>
                    <Image src={product?.image} alt={product?.name} fluid />
                </Col>
                <Col md={4}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <h3>{product?.name}</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Rating
                                value={product?.rating}
                                text={`${product?.numReviews} reviews`}
                            />
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Price: ${product?.price}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Description: ${product?.description}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <Card>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <Row>
                                    <Col>Price:</Col>
                                    <Col>${product?.price}</Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Status:</Col>
                                    <Col>
                                        {product?.countInStock > 0
                                            ? "In Stock"
                                            : "Out of Stock"}
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            {product?.countInStock > 0 && (
                                <ListGroup.Item>
                                    <Row>
                                        <Col>Qty</Col>
                                        <Col>
                                            <Form.Control
                                                as="select"
                                                value={qty}
                                                onChange={(e) =>
                                                    setQty(
                                                        Number(e.target.value)
                                                    )
                                                }
                                            >
                                                {Array.from(
                                                    Array(
                                                        product?.countInStock
                                                    ).keys()
                                                ).map((x) => (
                                                    <option
                                                        key={x + 1}
                                                        value={x + 1}
                                                    >
                                                        {x + 1}
                                                    </option>
                                                ))}
                                            </Form.Control>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                            )}
                            <ListGroup.Item>
                                <Button
                                    className="btn-block"
                                    type="button"
                                    onClick={addToCartHandler}
                                    disabled={product?.countInStock === 0}
                                >
                                    Add to Cart
                                </Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default ProductDetail;
