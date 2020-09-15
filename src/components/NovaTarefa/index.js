import React, { useState, useRef } from "react";
import { Button, Col, Modal, Form } from "react-bootstrap";
export default function NovaTarefa() {
  const [show, setShow] = useState(false);
  const [validated, setValidated] = useState(false);

  const formRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }

    saveTask();

    setValidated(true);
  };

  const saveTask = () => {};

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Adicionar Nova Tarefa
      </Button>

      <Modal show={show} size="lg" onHide={handleClose}>
        <Form
          noValidate
          validated={validated}
          method="POST"
          onSubmit={handleSubmit}
          ref={formRef}
        >
          <Modal.Header closeButton>
            <Modal.Title>Adicionar Nova Tarefa</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group>
              <Form.Label>Título da tarefa</Form.Label>
              <Form.Control
                type="text"
                name="title"
                placeholder="Digite o título da tarefa"
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Descrição da terafa (opcional)</Form.Label>
              <Form.Control
                as="textarea"
                type="text"
                name="description"
                placeholder="Digite a descrição da tarefa"
              />
            </Form.Group>
            <Form.Row>
              <Col>
                <Form.Label>Data e hora de início</Form.Label>
                <Form.Control
                  type="datetime-local"
                  name="dateStart"
                  placeholder="Digite a data e hora de início"
                  required
                />
              </Col>
              <Col>
                <Form.Label>Data e hora final</Form.Label>
                <Form.Control
                  type="datetime-local"
                  name="dateEnd"
                  placeholder="Digite a data e hora final"
                  required
                />
              </Col>
            </Form.Row>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancelar
            </Button>
            <Button variant="primary" type="submit">
              Salvar Tarefa
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}
