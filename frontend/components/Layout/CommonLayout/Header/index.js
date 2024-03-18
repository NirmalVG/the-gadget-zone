"use client";
import React from "react";
import { Navbar, Nav, Container, Badge, NavDropdown } from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import logo from "../../../../assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import { useSelectedLayoutSegments } from "next/navigation";
import useLogoutMutation from "../../../../redux/slices/usersApiSlices"
import {logout} from "../../../../redux/slices/authSlice"

const Header = () => {
    const { cartItems } = useSelector((state) => state.cart);
    const {userInfo} = useSelector((state) => state.auth)

    const dispatch = useDispatch()

    const logoutHandler = async() => {
        try {
            await logoutApiCall().unwrap()
            dispatch(logout())
        } catch(err) {
            console.log(err)
        }
    }
    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
                <Container>
                    <Link href="/" className="text-decoration-none">
                        <Navbar.Brand>
                            <Image src={logo} alt="The Gadget Zone" />
                            The Gadget Zone
                        </Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Link href="/cart" className="text-decoration-none">
                                <Nav.Link>
                                    <FaShoppingCart /> Cart
                                    {cartItems.length > 0 && (
                                        <Badge
                                            pill
                                            bg="success"
                                            style={{ marginLeft: "5px" }}
                                        >
                                            {cartItems.reduce(
                                                (a, c) => a + c.qty,
                                                0
                                            )}
                                        </Badge>
                                    )}
                                </Nav.Link>
                            </Link>
                            {userInfo? (<NavDropdown title={userInfo.name} id="username">
                                <Link href="/profile">
                                    <NavDropdown.Item>Profile</NavDropdown.Item>
                                </Link>
                                <NavDropdown.Item onClick={logoutHandler}>
                                    Logout
                                </NavDropdown.Item>
                            </NavDropdown>): (<Link
                                href="/login"
                                className="text-decoration-none"
                            >
                                <Nav.Link>
                                    <FaUser /> Sign In
                                </Nav.Link>
                            </Link>)}
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
