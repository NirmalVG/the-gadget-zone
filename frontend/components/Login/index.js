"use client"
import { useState, useEffect } from "react";
import Link from "next/link";
import { Form, Button, Row, Col } from "react-bootstrap";
import FormContainer from "../FormContainer";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader"
import {useLoginMutation} from "../../redux/slices/usersApiSlices"
import {setCredentials} from "../../redux/slices/authSlice"
import {toast} from "react-toastify"

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch()

    const [login, {isLoading}] = useLoginMutation()

    const {userInfo} = useSelector((state) => state.auth)


    const submitHandler = async(e) => {
        e.preventDefault();
        try {
            const res = await login({email, password}).unwrap()
            dispatch(setCredentials({...res, }))
        } catch(error) {
            toast.error(err.data.message || err.error)
        }
    };

    return (
        <FormContainer>
            <h1>Sign In</h1>
            <Form onSubmit={submitHandler}>
                <Form.Group controlId="email" className="my-3">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                <Form.Group controlId="password" className="my-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                <Button type="submit" variant="primary" className="mt-2" disabled={isLoading}>
                    Sign In
                </Button>
                {isLoading && <Loader />}
            </Form>
            <Row className="py-3">
                <Col>
                    New Customer? <Link href="/register">Register</Link>
                </Col>
            </Row>
        </FormContainer>
    );
};

export default Login;
