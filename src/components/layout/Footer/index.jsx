import React from 'react';
import { AiOutlineGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { Footer } from "./style";
import { Container } from "../../Container/style";
import { P } from "../../style/elements/Typoghaphy/style";

export default function index() {
  return (
   <Footer>
      <P>Projeto do curso de react do <a href="https://www.youtube.com/channel/UCDoFiMhpOnLFq1uG4RL4xag" target="_blank" rel="noreferrer">Matheus Battisti - Hora de Codar</a></P>
      <P>Feito por Vitor Gomes</P>
      <Container>
        <a href="https://github.com/ViitorGomes" target="_blank" rel="noreferrer"><AiOutlineGithub/></a>
        <a href="https://www.instagram.com/jvittorgomes/" target="_blank" rel="noreferrer"><AiFillInstagram/></a>
        <a href="https://www.linkedin.com/in/vitor-gomes-b9a629201/" target="_blank" rel="noreferrer"><AiFillLinkedin/></a>
      </Container>
    </Footer>
  )
}
