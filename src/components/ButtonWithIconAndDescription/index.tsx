import React from 'react';
import {Link} from 'react-router-dom'
 import { BTWIAD } from './styles';
 

import { IconBaseProps } from 'react-icons';

interface Props {
  title: string; 
  description:string;
  link:string;
}
  const ButtonWithIconAndDescription: React.FC<Props> = ({ title,description ,link , children} )  => {
  
  return (
    <BTWIAD>
      <Link to={link}>
       <div className="IconLeft">
       {children}
          
       </div>
       
       <div className="TitleDescription">
       <strong>{title}</strong>
       <span>{description}</span>
      </div>
</Link>
    </BTWIAD>
  );
}

export default ButtonWithIconAndDescription








 


  