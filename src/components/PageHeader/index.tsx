import React from 'react';
import Logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';
import { PageHeaderDiv, TopBar } from './styles';
import { FiMenu, FiChevronDown, FiFacebook, FiInstagram } from 'react-icons/fi'

function PageHeader() {
  return (
    <>

<TopBar >
      <div className="block_container">
        <PageHeaderDiv>
          <div id="esquerda">
          <Link to="/" >
            <img id="imagemLogo" width="250px" alt="Intermedicina" src={Logo} />
            </Link>
          </div>

          <div id="direita" >
            <div className="desktop">
              <div>
              <Link to="/quem-somos" >Quem somos </Link>
              <Link to="/conheca">Conheça <FiChevronDown size={15} /></Link>
              <Link to="/contato">Fale Conosco</Link>
              <Link to="/conheca">Mais <FiChevronDown size={15} /></Link>
              <Link className="marginLeft" to="/portal">Portal do Cliente</Link>
              <a className="iconBlue" target="_blank" href="https://www.facebook.com/intermedicinaoficial/"><FiFacebook size={18} /></a>
              <a className="iconBlue" target="_blank" href="https://www.instagram.com/intermedicinaoficial/"><FiInstagram size={18} /></a>
              </div>
            </div>

            <div id="mobile">
              <button><FiMenu size={30} /></button>
            </div>

          </div>

        </PageHeaderDiv>

      </div>
      </TopBar >
    </>
  );
}

export default PageHeader