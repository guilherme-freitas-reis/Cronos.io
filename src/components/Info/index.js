import React from "react";
import { Button, Form } from "react-bootstrap";

import { Container, TitleCTA, DescriptionCTA } from "./styles";

function Info() {
  return (
    <Container>
      <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
        <TitleCTA>Alertas por e-mail</TitleCTA>
        <DescriptionCTA>
          Você também pode cadastrar seu e-mail para receber os alertas por lá:
        </DescriptionCTA>
        <Form method="post">
          <Form.Group>
            <Form.Control type="text" placeholder="Digite seu nome" />
          </Form.Group>
          <Form.Group>
            <Form.Control type="email" placeholder="Digite seu melhor e-mail" />
            <Form.Text className="text-muted">
              Você pode se desinscrever dos alertas quando quiser.
            </Form.Text>
          </Form.Group>
          <Button style={{ width: "100%" }}>Receber alertas por e-mail</Button>
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
