import React from 'react';
import { TabelaPrecoDiv,TopBar } from './styles'
import { Link } from 'react-router-dom';

interface Props {
  title: string; 
  price:string;
  img:string;
  url:string;
  topbar?:string;
 
}

const TabelaPreco: React.FC<Props> = ({ topbar, title,price ,img , url, children} )  => {
   
  return (
   
    
    <TabelaPrecoDiv>
      {topbar && <TopBar>{topbar}</TopBar>}
      <img src={img} alt={title} />

      <span className="title">
        {title}
             </span>
      <span className="price">
        {price}
             </span>
      <span className="price_title">
        POR MÊS
             </span>
             <ul>
               {children}
             </ul>
             <Link className="buttonRed" to={url} >Contratar</Link>


    </TabelaPrecoDiv>
    
  );
}

export default TabelaPreco