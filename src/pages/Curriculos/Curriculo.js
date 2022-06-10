import logomiki from "../../assets/logo_miki.png";
import "./stylesCurriculo.css";
import { Input } from "../../components/input";
import { Menu } from "../../components/Menu";
import { File } from "../../components/File";
import { Titles } from "../../components/Titles";
import { Button } from "../../components/Button";
import { Rodape } from "../../components/Rodape";

import { useState } from "react";

export default function Curriculo() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [vaga, setVaga] = useState("");

  return (
    <div className="container">
      <Menu img={logomiki} title="Miki e Mackmillan Associados" />

      <div className="container-bg1">
        <div className="container-bg2">
          <Titles title="Trabalhe Conosco" />
          <div className="container-input1">
            <Input type="nome" label="Nome:" value={nome} onChange={setNome} />
          </div>
          <div className="container-input2">
            <Input
              type="email"
              label="Email:"
              value={email}
              onChange={setEmail}
            />
            <Input
              type="telefone"
              label="Telefone:"
              value={telefone}
              onChange={setTelefone}
            />
          </div>
          <div className="container-input2">
            <Input
              type="vaga"
              label="Vaga pretendida:"
              value={vaga}
              onChange={setVaga}
            />
            <div className="container-file">
              <File text="Enviar Curriculo:" />
            </div>
          </div>
          <div className="container-input1">
            <Input
              type="mensagem"
              label="Mensagem:"
              value={mensagem}
              onChange={setMensagem}
            />
          </div>
          <Button text="Enviar" />
        </div>
        <div className="txt-curriculo">
          <Titles title="(53)3035-2730" subtitle="Seg a sex das 7h30 às 17h" />
          <div className="txt-curriculo2">
            <Titles
              title="Endereço:"
              subtitle=" R. Vinte e Quatro de Maio, 20 - Centro, Rio Grande - RS, 96200-003"
            />
          </div>
        </div>
      </div>
      <Rodape
        img={logomiki}
        text="Escritório contabil localizado em: R. Vinte e Quatro de Maio, 20 -
            Centro, Rio Grande - RS, 96200-003"
      />
    </div>
  );
}
