import "./stylesHome.css";
import { CardDisplayPilares } from "../../components/CardDisplayPilares";
import { ServiceDisplayResume } from "../../components/ServiceDisplayResume";
import { Input } from "../../components/input";
import { Menu } from "../../components/Menu";
import { Titles } from "../../components/Titles";
import { Rodape } from "../../components/Rodape";
import { Button } from "../../components/Button";

import { useState } from "react";

import logomiki from "../../assets/logo_miki.png";
import office from "../../assets/office.jpg";
import handshake from "../../assets/handshake.png";
import shield from "../../assets/shield.png";
import etica from "../../assets/etica.png";
import empresa from "../../assets/empresa.png";
import contabil from "../../assets/contabil.png";
import humans from "../../assets/humans.png";
import grafico from "../../assets/grafico.png";
import sociedade from "../../assets/sociedade.png";
import tributario from "../../assets/tributario.png";
import { BgHome } from "../../components/BgHome";

export default function Home() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [mensagem, setMensagem] = useState("");

  return (
    <div className="App">
      <div className="container">
        <Menu img={logomiki} title="Miki e Mackmillan Associados" />
        <BgHome
          img={office}
          title="Focamos em oferecer proficionalismo e competencia!"
          subtilte=" Oferecemos ao cliente um atendimento diferenciado sempre apoiado nos
          pilares que sustentam a nossa empresa: Confiança, credibilidade e
          ética."
        />
        <div className="container-pilares">
          <CardDisplayPilares
            img={handshake}
            title="Confiança"
            description="Sobre ela estruturamos todas as nossas atitutes, buscando
             fortalece-la a cada dia através de um trabalho integro e de
             qualidade."
          />

          <CardDisplayPilares
            img={shield}
            title="Credibilidade"
            description=" Uma qualidade que conquista com um trabalho de exelencia
             oferecido de maneira uniforme a todos nossos clientes."
          />

          <CardDisplayPilares
            img={etica}
            title="Ética"
            description="Um pilar fundamental baseado em nossos valores que norteia as
             ações da nossa equipe, definindo criterios para a manipulação de
             informações de nossos clientes."
          />
        </div>
        <div className="title-serviço">
          <Titles
            title="Serviços"
            subtitle="Conheça nosso portifólio de serviço"
          />
        </div>
        <div className="serviço">
          <ServiceDisplayResume
            img={empresa}
            title="Assessoria Empresarial"
            description="Visando apresentar de forma clara e prática a aplicação de
            conceitos financeiros ajustados ao foco de cada empresa e à
            realidade da economia brasileira."
          />

          <ServiceDisplayResume
            img={contabil}
            title="Contábil"
            description="Além de atender as exigências legais, a contabilidade tem a
            função de estudar, registrar, interpretar e transformar dados
            em informações, com o intuito de orientar na tomada de
            decisões na empresa."
          />

          <ServiceDisplayResume
            img={humans}
            title="Recursos Humanos"
            description="oferecemos serviços que visam atender o controle de entrada e
            saída de funcionários, registros pertinentes à área
            trabalhista, sindical e previdenciária."
          />
        </div>
        <div className="serviço2">
          <ServiceDisplayResume
            img={grafico}
            title="Fiscal"
            description="O Departamento Fiscal está atento a todas estas alterações,
            oferecendo a melhor assessoria fiscal e tributária, proporcionando
            ao cliente segurança nas informações prestadas."
          />

          <ServiceDisplayResume
            img={sociedade}
            title="Societário"
            description="A gestão societária de uma empresa necessita de conhecimento e
            aplicação de técnicas e procedimentos desde a sua constituição.
            Para isso temos uma equipe capacitada para prestar todo suporte
            necessário na abertura, alterações baixa de empresas."
          />

          <ServiceDisplayResume
            img={tributario}
            title="Planejamento Tributário"
            description="elaboramos um estudo prévio à concretização dos fatos, analisando
            seus efeitos jurídicos, fiscais e econômicos, com o objetivo de
            encontrar a alternativa legal menos onerosa para o contribuinte."
          />
        </div>
        <div className="container-contato">
          <div className="inputs">
            <div className="container-input1">
              <Input
                type="nome"
                label="Nome:"
                value={nome}
                onChange={setNome}
              />
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
            <div className="container-input3">
              <Input
                type="mensagem"
                label="Mensagem:"
                value={mensagem}
                onChange={setMensagem}
              />
            </div>
            <Button text="Enviar" />
          </div>
          <div className="txt-contato">
            <Titles
              title="Entre em contato"
              subtitle="Envie uma mensagem, preenchendo o formulário e entraremos em
              contato o mais rápido possivel!"
            />

            <div className="p-2">
              <Titles
                subtitle="ou se prefereir, tire suas duvidas pelo telefone"
                title="(53)3035-2730"
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
    </div>
  );
}
