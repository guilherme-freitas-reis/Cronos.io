import React from "react";
import styled from "styled-components";
import { Button, Form } from "react-bootstrap";

function Admin() {
  return (
    <Container>
      <img style={{ marginBottom: 20 }} src="/ms-icon-70x70.png" title="Logo" />
      <Form>
        <Form.Group>
          <Form.Control
            placeholder="Digite a senha de acesso"
            required
            minLength="6"
          />
        </Form.Group>
        <Button type="submit" style={{ width: "100%" }}>
          Logar
        </Button>
      </Form>
    </Container>
  );
}

export default Admin;

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #eeeeee;
`;
