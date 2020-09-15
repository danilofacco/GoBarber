import React from 'react'; 
import { Link } from 'react-router-dom';
import { Container } from './styles';
import { FiCreditCard, FiLogOut, FiMessageCircle, FiPlusCircle, FiSettings, FiUsers  } from 'react-icons/fi'
import ButtonWithIconAndDescription from '../ButtonWithIconAndDescription'

function SideBarPortal() {
  return (
    <>

      <div className="block_container">
        <Container>
          <div className="esquerda">
            <img id="avatar" width="60px" src="http://github.com/danilofacco.png" />
          </div>

          <div className="direita" >
            <span className="NomeCliente">Danilo Gujansky Facco</span>
            <span className="NCartao">00000 00013 500000 07</span>
            <Link to="/">Sair <FiLogOut/></Link>

          </div>

         

        </Container>


            <ButtonWithIconAndDescription
            link="/portal"
            title="Nova Solicitação" 
            description="Solicitação de consultas, exames, cirurgias e envio de documentos.">
            <FiPlusCircle size={35}/>
            </ButtonWithIconAndDescription>
            
            <ButtonWithIconAndDescription
            link="/portal/minha-conta"
            title="Minha Conta"
            description="Alteração de senhas e dados pessoais.">
            <FiSettings size={35}/>
            </ButtonWithIconAndDescription>
            
            <ButtonWithIconAndDescription
            link="/portal/dependentes"
            title="Dependentes"
            description="Adicionar / Remover dependentes e agregados">
            <FiUsers size={35}/>
            </ButtonWithIconAndDescription>
            
            <ButtonWithIconAndDescription
            link="/portal/mensagens"
            title="Mensagens"
            description="Mensagens importantes para você">
            <FiMessageCircle size={35}/>
            </ButtonWithIconAndDescription>

            <ButtonWithIconAndDescription
            link="/portal/cartoes"
            title="Cartões"
            description="Cartão do associado e dependentes">
            <FiCreditCard size={35}/>
            </ButtonWithIconAndDescription>
      </div>
    </>
  );
}

export default SideBarPortal