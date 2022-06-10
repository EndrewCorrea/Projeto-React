import "./stylesService.css";
import { ServiceDisplay } from "../../components/ServiceDisplay";
import { List } from "../../components/List";
import { Menu } from "../../components/Menu";
import { Titles } from "../../components/Titles";
import { Rodape } from "../../components/Rodape";

import logomiki from "../../assets/logo_miki.png";
import empresa2 from "../../assets/empresa2.png";
import contabil from "../../assets/contabil.png";
import humans2 from "../../assets/humans2.png";
import grafico from "../../assets/grafico.png";
import sociedade2 from "../../assets/sociedade2.png";
import tributario from "../../assets/tributario.png";

export default function ServicePage() {
  return (
    <div className="container">
      <Menu img={logomiki} title="Miki e Mackmillan Associados" />
      <div className="title-serviços">
        <Titles
          title="Serviços"
          subtitle="Conheça nosso portifólio de serviços"
        />
      </div>
      <div className="serviços">
        <div className="container-fundo-white">
          <ServiceDisplay
            img={empresa2}
            title="Assessoria Empresarial"
            description="Visando apresentar de forma clara e prática a aplicação de
            conceitos financeiros ajustados ao foco de cada empresa e à
            realidade da economia brasileira."
            secondDescription="Buscando suprir as necessidades do empreendedor dentro 
          das áreas de análises de demonstrações financeiras, investimentos e endividamento, 
          avaliação de empresas e medidas de valor de fluxo de caixa de projetos."
            subTitle="Principais atribuições:"
          />
          <List
            li1="Análise das demonstrações financeiras objetivando análise de custo – volume – 
        lucro e alavancagem operacional;"
            li2="Análise de investimentos e condições de risco;"
            li3="Suporte nas decisões de financiamento visando a melhor estrutura de capital;"
            li4="Cursos e treinamentos;"
            li5="Perícia contábil em matéria financeira e avaliação de empresas;"
            li6="Auditoria."
          />
        </div>
        <div className="container-fundo-black">
          <ServiceDisplay
            img={contabil}
            title="Contábil"
            description="Além de atender as exigências legais, a contabilidade tem a
            função de estudar, registrar, interpretar e transformar dados
            em informações, com o intuito de orientar na tomada de
            decisões na empresa."
            secondDescription="Assim buscascamos apresentar informações 
          úteis em tempo hábil visando o melhor atendimento das necessidades das empresas
           otimizando assim seus resultados."
            subTitle="Principais atribuições:"
          />
          <List
            li1="Demonstrações Financeiras mensais e anuais;"
            li2="Gestão do ativo imobilizado;"
            li3="Escrituração Contábil Digital – ECD;"
            li4="Aplicação das Normas Internacionais de Contabilidade – IFRS;"
            li5="Sistema de informação integrado on-line;"
            li6="Assistência na apresentação das Demonstrações Contábeis e prestação de contas ao quadro societário."
          />
        </div>
        <div className="container-fundo-white">
          <ServiceDisplay
            img={humans2}
            title="Recursos Humanos"
            description="O capital humano é de suma importância dentro das empresas, onde busca-se a valorização dos funcionários,
             diferenciando o tratamento dos mesmos e incentivando a participação destes como colaboradores do negócio."
            secondDescription="oferecemos serviços que visam atender o controle de entrada e
            saída de funcionários, registros pertinentes à área
            trabalhista, sindical e previdenciária."
            subTitle="Principais atribuições:"
          />
          <List
            li1="Registro de empregados;"
            li2="Elaboração das folhas de pagamento e encargos sociais (GFIP, GPS, Imposto Sindical e IRRF);"
            li3="Conectividade digital;"
            li4="Elaboração e assessoria na homologação de rescisões;"
            li5="Elaboração do CAGED, RAIS e Informes de Rendimentos;"
            li6="Acompanhamento das alterações da legislação trabalhista e convenções sindicais."
          />
        </div>
      </div>
      <div className="serviços2">
        <div className="container-fundo-black">
          <ServiceDisplay
            img={grafico}
            title="Fiscal"
            description="As alterações diárias na legislação tributária causam grande impacto 
            na gestão das empresas. Uma interpretação equivocada pode resultar em créditos não 
            compensado, recolhimentos indevidos assim como pesadas multas impostas pelo fisco em 
            todas as suas esferas."
            secondDescription="O Departamento Fiscal está atento a todas estas alterações,
            oferecendo a melhor assessoria fiscal e tributária, proporcionando
            ao cliente segurança nas informações prestadas."
            subTitle="Principais atribuições:"
          />
          <List
            li1="Acompanhamento e orientação na emissão dos documentos fiscais com visitas
           periódicas à empresa;"
            li2="Apuração e preparação das guias de recolhimento dos impostos, assim como o
           controle de créditos destes;"
            li3="Parcelamentos tributários;"
            li4="Auditoria das obrigações acessórias do Sistema Público de Escrituração Digital – SPED;"
            li5="Atendimento a todas as obrigações acessórias não incluídas no SPED;"
            li6="Informativos sobre alterações nas legislações."
          />
        </div>
        <div className="container-fundo-white">
          <ServiceDisplay
            img={sociedade2}
            title="Societário"
            description="A gestão societária de uma empresa necessita de conhecimento e
            aplicação de técnicas e procedimentos desde a sua constituição.
            Para isso temos uma equipe capacitada para prestar todo suporte
            necessário na abertura, alterações baixa de empresas."
            secondDescription=""
            subTitle="Principais atribuições:"
          />
          <List
            li1="Planejamento no processo de registro, alteração e encerramento de empresas;"
            li2="Elaboração de ata e consequente registro;"
            li3="Emissão de certidões;"
            li4="Elaboração de cadastros, contratos particulares e licitações;"
            li5="Regularização de obras de construção civil;"
            li6="Escritório Virtual"
          />
        </div>
        <div className="container-fundo-black">
          <ServiceDisplay
            img={tributario}
            title="Planejamento Tributário"
            description="O planejamento tributário trata-se de uma forma lícita de reduzir a carga 
        fiscal das empresas. Para isso faz-se necessário que se tenha um grande conhecimento 
        técnico sobre o assunto, bem como a participação dos responsáveis pelas decisões 
        estratégicas no ambiente corporativo."
            secondDescription="elaboramos um estudo prévio à concretização dos fatos, analisando
            seus efeitos jurídicos, fiscais e econômicos, com o objetivo de
            encontrar a alternativa legal menos onerosa para o contribuinte."
            subTitle="Principais atribuições:"
          />
          <List
            li1="Auditoria interna preventiva;"
            li2="Recuperação de créditos fiscais;"
            li3="Análise de enquadramento em Regimes Especiais;"
            li4="Análise anual de regime tributário;"
            li5="Acompanhamento e treinamento;"
            li6="Analise de crescimento."
          />
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
