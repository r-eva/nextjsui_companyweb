import React from 'react';
import {useState} from 'react'
import Layout from '../../component/Layout/Layout'
import {Card, Form, Button} from "react-bootstrap"
import {urlApi} from '../../Helpers/database'

const Contact = () => {
    const [customerName, setCustomerName] = useState('')
    const [customerEmail, setCustomerEmail] = useState('')
    const [customerText, setCustomerText] = useState('')

    async function handleSubmit() {
        const emailValidator = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
        if (customerText === "" || customerEmail === "" || customerText === "" ) {
            return alert('Please complete the form!')
        } else if (!emailValidator.test(customerEmail)) {
            return alert("Email address is not valid!")
        } else {
            var sendData = {
                Name: customerName,
                Email: customerEmail,
                Text: customerText
            }
            const add = await fetch(`${urlApi}/messages`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(sendData)
            })
            const addResponse = await add.json()
            console.log(addResponse)
            alert('Thank you for submitting your message! We will response it shortly.')
            window.location.reload()
        }
    }

    return (
        <Layout>
            <div className="d-flex justify-content-center">
                <Card style={{ width: '30rem' }}>
                    <Card.Body>
                        <div className='row justify-content-center mb-3'>
                            <h1 className="my-3 font-weight-bold text-center">Kontakt</h1>
                        </div>
                        <Form>
                            <Form.Group controlId="Name">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder={customerName} onChange={e => setCustomerName(e.target.value)}/>
                                <Form.Text className="text-muted">
                                Please enter your name.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder={customerEmail} onChange={e => setCustomerEmail(e.target.value)}/>
                                <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" placeholder={customerText} rows={3} onChange={e => setCustomerText(e.target.value)}/>
                            </Form.Group>
                            <Button variant="primary" type="button" onClick={()=>handleSubmit()}>
                                Submit
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </div>
        </Layout>
    );
};


export default Contact;