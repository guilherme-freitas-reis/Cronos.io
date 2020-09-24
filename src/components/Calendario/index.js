import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "moment/locale/pt-br";

import api from "../../services/api";

import {
  Container,
  CalendarioContainer,
  Title,
  Description,
  ActionsContainer,
} from "./styles";

import NovaTarefa from "../NovaTarefa";
import DetalhesTarefa from "../DetalhesTarefa";

export default function Calendario() {
  const [name, setName] = useState("");
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const savedName = localStorage.getItem("nameUser");

    setName(savedName || "visitante");

    getAllTasks();
  }, []);

  async function getAllTasks() {
    const { data } = await api.get("/task/index");
    setEvents(data.object);
  }

  const localizer = momentLocalizer(moment);

  return (
    <Container>
      <Title>
        Olá {name}😊! Bem vind@ ao <span>Cronos.io</span>
      </Title>
      <Description>
        Fique por dentro dos prazos dos trabalhos e atividades.
      </Description>
      <CalendarioContainer>
        <ActionsContainer>
          <h1>Calendário</h1>
          <NovaTarefa reloadCalendar={getAllTasks.bind()} />
        </ActionsContainer>
        <Calendar
          components={{
            event: (props) => (
              <DetalhesTarefa
                task={props.event}
                reloadCalendar={getAllTasks.bind()}
              />
            ),
          }}
          culture="pt-BR"
          localizer={localizer}
          events={events}
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
        />
      </CalendarioContainer>
    </Container>
  );
}
