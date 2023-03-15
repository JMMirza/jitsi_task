import React from 'react'
import { Container, Button, Row, Col, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import { object, string } from 'yup';

export default function Index() {

    const navigate = useNavigate();
    let userSchema = object({
        name: string().required('name is required'),
        room_no: string().required('room no is required')
    });

    return (
        <>
            <Container>
                <Row className='startpage-content'>
                    <Col>
                        <h1>Secure video conferencing for every</h1>
                        <p>Connect, collaborate and celebrate from anywhere with Google Meet</p>
                        <Formik
                            initialValues={{ name: '', room_no: '' }}
                            validationSchema={userSchema}
                            onSubmit={(values) => {
                                console.log(values);
                                navigate('/meet', { state: { name: values.name, room_no: values.room_no } })
                            }}
                        >
                            {({
                                values,
                                errors,
                                touched,
                                handleChange,
                                handleSubmit,
                            }) => (
                                <Form>
                                    <Form.Group className="mb-3" controlId="formBasicName">
                                        <Form.Label>User Name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Name" onChange={handleChange('name')} value={values.name} />
                                        <Form.Text className="text-muted">
                                            {errors.name && touched.name && errors.name}
                                        </Form.Text>

                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicLink">
                                        <Form.Label>Link</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Meet Link" onChange={handleChange('room_no')} value={values.room_no} />
                                        <Form.Text className="text-muted">
                                            {errors.room_no && touched.room_no && errors.room_no}
                                        </Form.Text>
                                    </Form.Group>
                                    <Button variant="primary" type="submit" onClick={handleSubmit}>
                                        Get Started
                                    </Button>
                                </Form>)}
                        </Formik>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>

        </>
    )
}
