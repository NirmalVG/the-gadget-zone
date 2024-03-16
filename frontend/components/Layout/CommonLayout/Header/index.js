"use client";
import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import logo from "../../../../assets/logo.png";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
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
                                </Nav.Link>
                            </Link>
                            <Link
                                href="/login"
                                className="text-decoration-none"
                            >
                                <Nav.Link>
                                    <FaUser /> Sign In
                                </Nav.Link>
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
