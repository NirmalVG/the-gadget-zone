"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
    Row,
    Col,
    ListGroup,
    Image,
    Form,
    Button,
    Card,
    Container,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { FaTrash } from "react-icons/fa";
import Message from "../Message";
import { addToCart, removeFromCart } from "../../redux/slices/cartSlice";

const Cart = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;
    const addToCartHandler = async (product, qty) => {
        dispatch(addToCart(...product, qty));
    };

    const removeFromCartHandler = async (id) => {
      dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    router.push("/login")
  }

    return (
        <Container>
            <Row>
                <Col md={8}>
                    <h1 style={{ marginBottom: "20px" }}>Shopping Cart</h1>
                    {cartItems.length === 0 ? (
                        <Message>
                            Your cart is empty <Link href="/">Go Back</Link>
                        </Message>
                    ) : (
                        <ListGroup variant="flush">
                            {cartItems.map((item) => {
                                return (
                                    <ListGroup.Item key={item._id}>
                                        <Row>
                                            <Col md={2}>
                                                <Image
                                                    src={item?.image}
                                                    alt={item?.name}
                                                    fluid
                                                    rounded
                                                />
                                            </Col>
                                            <Col md={3}>
                                                <Link
                                                    href={`/product/${item._id}`}
                                                >
                                                    {item?.name}
                                                </Link>
                                            </Col>
                                            <Col md={2}>${item?.price}</Col>
                                            <Col md={2}>
                                                <Form.Control
                                                    as="select"
                                                    value={item?.qty}
                                                    onChange={(e) =>
                                                        addToCartHandler(
                                                            item,
                                                            Number(
                                                                e.target.value
                                                            )
                                                        )
                                                    }
                                                >
                                                    {Array.from(
                                                        Array(
                                                            item?.countInStock
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
                                            <Col md={2}>
                                                <Button
                                                    type="button"
                                                    variant="light"
                                                    onClick={() => removeFromCartHandler(item?._id)}
                                                >
                                                    <FaTrash />
                                                </Button>
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                );
                            })}
                        </ListGroup>
                    )}
                </Col>
                <Col md={4}>
                    <Card>
                        <ListGroup variant="flush">
                            <h2>
                                Subtotal (
                                {cartItems.reduce(
                                    (acc, item) => acc + item.qty,
                                    0
                                )}
                                )
                            </h2>
                            $
                            {cartItems
                                .reduce(
                                    (acc, item) => acc + item.qty * item.price,
                                    0
                                )
                                .toFixed(2)}
                        </ListGroup>
                        <ListGroup.Item>
                            <Button
                                type="button"
                                className="btn-block"
                                disabled={cartItems === 0}
                               onClick={checkoutHandler}
                            >
                                Proceed To Checkout
                            </Button>
                        </ListGroup.Item>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Cart;
