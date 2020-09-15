import React, { useState, useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useToasts } from "react-toast-notifications";
import api from "../../services/api";

import { Container, TitleCTA, DescriptionCTA } from "./styles";

function Info() {
  const { addToast } = useToasts();

  const [validated, setValidated] = useState(false);

  const formRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      addToast("Campos inválidos, verifique e tente novamente.", {
        appearance: "warning",
      });
      event.stopPropagation();
    } else saveNewsletter(form);

    setValidated(true);
  };

  const saveNewsletter = async (form) => {
    const response = await api.post("/newsletter/create", {
      name: form["name"].value,
      email: form["email"].value,
    });

    if (response.status === 200) {
      const { data } = response;

      if (data.success) {
        addToast(data.message, {
          appearance: "success",
        });
        localStorage.setItem("nameUser", form["name"].value);
      } else {
        addToast(data.message, {
          appearance: "warning",
        });
      }
    } else {
    }
  };

  return (
    <Container>
      <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
        <TitleCTA>Alertas por e-mail</TitleCTA>
        <DescriptionCTA>
          Você também pode cadastrar seu e-mail para receber os alertas por lá:
        </DescriptionCTA>
        <Form
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
          ref={formRef}
        >
          <Form.Group>
            <Form.Control
              type="text"
              name="name"
              placeholder="Seu nome"
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="email"
              name="email"
              placeholder="Seu melhor e-mail"
              required
            />
            <Form.Text className="text-muted">
              Você pode se desinscrever dos alertas quando quiser.
            </Form.Text>
          </Form.Group>
          <Button type="submit" style={{ width: "100%" }}>
            Receber alertas por e-mail
          </Button>
        </Form>
      </div>
      <div style={{ height: 30, textAlign: "center" }}>
        <p style={{ margin: 0, fontSize: 13 }}>
          Feito com ❤️ por{" "}
          <a href="https://guilhermereis.dev.br" target="_blank">
            Guilherme Reis
          </a>
        </p>
      </div>
    </Container>
  );
}

export default Info;
