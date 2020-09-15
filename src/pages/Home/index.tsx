import React, { useState, useEffect, FormEvent } from 'react'
import api from '../../services/api'

import imagem_familia from "../../assets/images/intermedicina-convenio-de-saude-contratos-familia.png"
import imagem_individual from "../../assets/images/intermedicina-convenio-de-saude-contratos-individual.png"
import imagem_odontomais from "../../assets/images/intermedicina-convenio-de-saude-contratos-odontomais.png"

import PageHeader from '../../components/PageHeader'
import SliderHome from '../../components/SliderHome'
import DividerLine from '../../components/DividerLine'
import TabelaPreco from  '../../components/TabelaPreco'
import { Container, TreeColumns,ClickToAction } from './styles'
import {SiWhatsapp} from 'react-icons/si'

const Home: React.FC = () => {
 
    return (
        <>
            <PageHeader />
            <SliderHome />

            <div className="block_container">
                <Container>
                    <div className="block">
                        <h2>Convênio de Saúde Intermedicina</h2>
                        <DividerLine />
                        <span>
                            Intermedicina é o Convênio de Saúde que vai <strong>Acompanhar, Intermediar e Facilitar</strong> consultas ou procedimentos médicos, odontológicos e laboratoriais particulares com o melhor <strong>custo-benefício</strong>.
                        </span>
                    </div>
                </Container>
            <TreeColumns>
                
                <TabelaPreco img={imagem_individual} title="Intermedicina Individual" price="RS 49,00"  url="/contratar/individual">
                <li>Para você cuidar da sua saúde</li>
                <li>Atendimento Médico</li>
                <li>Atendimento Odontológico</li>
                <li>Exames e Laboratórios</li>
                </TabelaPreco>

                <TabelaPreco img={imagem_familia}  topbar="O MAIS COMPLETO!" title="Intermedicina Família" price="RS 85,00"  url="/contratar/familia">
                <li>Toda família está inclusa</li>
                <li>Atendimento Médico</li>
                <li>Atendimento Odontológico</li>
                <li>Exames e Laboratórios</li>
                </TabelaPreco>

                <TabelaPreco img={imagem_odontomais}  title="Intermedicina Odontomais" price="RS 40,00"  url="/contratar/odontomais">
                <li>Para você cuidar do sorriso</li>
                <li>Atendimento Odontológico</li>
                <li>Implantes</li>
                <li>Exames</li>
                </TabelaPreco>

            </TreeColumns>

            <ClickToAction>
            <a className="buttonGreen c25" href="/" ><SiWhatsapp size={20}/>Solicitar Proposta</a>
            <div className="c75">
            <h3>Você tem empresa? Solicite uma proposta!</h3>
            <p>Para grupo empresarial temos uma proposta personalizada para os seus colaboradores.</p>
            </div>
            </ClickToAction>

            </div>

        </>
    )
}
export default Home