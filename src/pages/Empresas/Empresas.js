import logomiki from "../../assets/logo_miki.png";
import "./stylesEmpresa.css";
import { Input } from "../../components/input";
import { Menu } from "../../components/Menu";
import { Titles } from "../../components/Titles";
import { Button } from "../../components/Button";
import { Rodape } from "../../components/Rodape";

import { useState } from "react";

export default function empresas() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cpf, setCPF] = useState("");
  const [atividades, setAtividades] = useState("");

  return (
    <div className="container">
      <Menu img={logomiki} title="Miki e Mackmillan Associados" />

      <div className="container-empresa-bg">
        <div className="container-empresas-tilte">
          <div className="title-empresa">
            <Titles
              title="Abra sua empresa"
              subtitle="Preencha o formulário com seus dados para que possamos fazer o
                    pedido de viabilidade na Junta Comercial do Estado."
            />
          </div>
        </div>
        <div className="container-empresa">
          <div className="container-empresas">
            <div className="title-empresa2">
              <Titles title="Dados de contato" />
            </div>
            <div className="container-input-empresas">
              <div className="input1">
                <Input
                  type="nome"
                  label="Nome:"
                  value={nome}
                  onChange={setNome}
                />
              </div>
              <div className="input2">
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
            </div>
            <div className="title-empresa2">
              <Titles title="Dados do Empresário" />
            </div>
            <div className="container-input-empresas2">
              <div className="input2">
                <Input
                  type="nome"
                  label="Nome:"
                  value={nome}
                  onChange={setNome}
                />

                <Input type="cpf" label="CPF:" value={cpf} onChange={setCPF} />
              </div>
            </div>
            <div className="title-empresa1">
              <Titles title="Dados da Empresa" />
            </div>
            <div className="container-input-empresas2">
              <div className="input3">
                <Input
                  type="nome"
                  label="Nome da empresa:"
                  value={nome}
                  onChange={setNome}
                />
              </div>
              <div className="input1">
                <Input
                  type="atividades"
                  label="Atividades exercidas pela empresa:"
                  value={atividades}
                  onChange={setAtividades}
                />
              </div>
            </div>
            <div className="empresas-btn">
              <Button text="Enviar" />
            </div>
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
