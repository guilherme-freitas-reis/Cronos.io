import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { FaRegHeart } from "react-icons/fa";
import Linkfy from "react-linkify";

export default function DetalhesTarefa({ task, reloadCalendar }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="btn-donate" onClick={handleShow}>
        <FaRegHeart /> Ajude o Cronos.io
      </Button>

      <Modal show={show} size="lg" onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ajude o Cronos.io</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            O Cronos.io surge para ajudar os alunos à não perderem o prazo das
            atividades e tarefas, obter o link das aulas e muito mais, de forma
            totalmente gratuita.
          </p>
          <p>Mas como posso ajudar a manter o Cronos.io?</p>
          <p>
            1 - Nosso projeto é open source, então você pode nos ajudar no
            desenvolvimento de novas funcionalidades e/ou manutenção do sistema.
          </p>
          <p>
            2 - Você pode fazer uma pequena doação de qualquer valor para cobrir
            os custos de servidor e banco de dados, que atualmete estão na
            Umbler. Caso queira doar, segue o link para o{" "}
            <a href="https://picpay.me/guilherme.reis9876" target="_blank">
              {" "}
              PicPay
            </a>
            .
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
