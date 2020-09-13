import React, { useState, useEffect, createRef } from "react";
import { Button } from "react-bootstrap";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "moment/locale/pt-br";

import {
  Container,
  CalendarioContainer,
  Title,
  Description,
  ActionsContainer,
} from "./styles";

import NovaTarefa from "../NovaTarefa";
import { resolveHref } from "next/dist/next-server/lib/router/router";

export default function Calendario() {
  const [name, setName] = useState("");

  useEffect(() => {
    const savedName = localStorage.getItem("nameUser");

    setName(savedName || "visitante");
  }, []);

  const localizer = momentLocalizer(moment);

  return (
    <Container>
      <NovaTarefa />
      <Title>
        Olá {name}😊! Bem vind@ ao <span>Cronos.io</span>
      </Title>
      <Description>
        Fique por dentro dos prazos dos trabalhos e atividades.
      </Description>
      <CalendarioContainer>
        <ActionsContainer>
          <h1>Calendário</h1>
          <Button variant="primary" onClick={modalNovaTarefa}>
            Adicionar nova tarefa
          </Button>
        </ActionsContainer>
        <Calendar
          culture="pt-BR"
          localizer={localizer}
          events={[
            {
              start: moment().toDate(),
              end: moment().add(2, "minutes").toDate(),
              title: "Trabalho de Algorítimos",
            },

            {
              start: moment().add(2, "days").toDate(),
              end: moment().add(2, "minutes").toDate(),
              title: "Trabalho de Teste",
            },
          ]}
          startAccessor="start"
          endAccessor="end"
          messages={{
            date: "Data",
            time: "Horário",
            event: "Evento",
            week: "Semana",
            work_week: "Dia de Trabalho",
            day: "Dia",
            month: "Mês",
            previous: "Anterior",
            next: "Próximo",
            yesterday: "Ontem",
            tomorrow: "Amanhã",
            today: "Hoje",
            agenda: "Agenda",
            noEventsInRange: "Não existe eventos nesse intervalo.",
          }}
          style={{ height: 500 }}
        />
      </CalendarioContainer>
    </Container>
  );
}
