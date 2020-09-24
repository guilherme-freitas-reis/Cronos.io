import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

import api from "../../services/api";

export default function DetalhesTarefa({ task, reloadCalendar }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  async function deleteTask() {
    const { data } = await api.delete(`/task/delete/${task._id}`);

    if (data.success) {
      handleClose();
      reloadCalendar();
    }
  }

  return (
    <>
      <div onClick={handleShow}>{task.title}</div>

      <Modal show={show} size="lg" onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Detalhes da Tarefa</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Título: {task.title}</p>
          <p>Descrição: {task.description || "Sem descrição"}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
          <Button variant="primary" type="submit" onClick={deleteTask}>
            Deletar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
