"use client"
import { useState, useEffect } from "react";
import Link from "next/link";
import { Form, Button, Row, Col } from "react-bootstrap";
import FormContainer from "../FormContainer";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader"
import {useRegisterMutation} from "../../redux/slices/usersApiSlices"
import {setCredentials} from "../../redux/slices/authSlice"
import {toast} from "react-toastify"

const Register = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("")

    const dispatch = useDispatch()

    const [register, {isLoading}] = useRegisterMutation()

    const {userInfo} = useSelector((state) => state.auth)


    const submitHandler = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            toast.error('Passwords do not match');
            return;
        } else {
            try {
                const res = await register({ name, email, password }).unwrap();
                dispatch(setCredentials({...res}));
            } catch (error) {
                if (error && error.data && error.data.message) {
                    toast.error(error.data.message);
                } else {
                    toast.error('An error occurred. Please try again.');
                }
            }
        }
    };

    return (
        <FormContainer>
            <h1>Sign Up</h1>
            <Form onSubmit={submitHandler}>
            <Form.Group controlId="name" className="my-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    ></Form.Control>
                </Form.Group>
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
                <Form.Group controlId="confirmPassword" className="my-3">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Confirm password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                <Button type="submit" variant="primary" className="mt-2" disabled={isLoading}>
                    Register
                </Button>
                {isLoading && <Loader />}
            </Form>
            <Row className="py-3">
                <Col>
                    Already have an account? <Link href="/login">Login</Link>
                </Col>
            </Row>
        </FormContainer>
    );
};

export default Register;