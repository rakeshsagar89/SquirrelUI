import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

export default function Contact(){
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({name:"", email:"", message:""});

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(()=> setSent(false), 3000);
  };

  return (
    <Container className="my-5" style={{maxWidth: 720}}>
      <h3>Contact us</h3>
      <p className="text-muted">Questions about sizing, orders or wholesale? Drop us a line.</p>

      <Form onSubmit={submit}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control value={form.name} onChange={e=>setForm({...form, name:e.target.value})} required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={5} value={form.message} onChange={e=>setForm({...form, message:e.target.value})} />
        </Form.Group>

        <Button type="submit" variant="dark">{sent ? "Sent" : "Send message"}</Button>
      </Form>
    </Container>
  );
}
