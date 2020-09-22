import React, { useState, useRef } from "react";
import { Button, Col, Modal, Form } from "react-bootstrap";

export default function DetalhesTarefa({ data }) {
  const [show, setShow] = useState(false);
  const [validated, setValidated] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div onClick={handleShow}>{data.title}</div>

      <Modal show={show} size="lg" onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Detalhes da Tarefa</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Título: {data.title}</p>
          <p>Descrição: {data.description || "Sem descrição"}</p>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
}
