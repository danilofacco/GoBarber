import React from 'react';
import imgSlider from '../../assets/images/intermedicina-convenio-de-saude-slides-pesquisa.jpg'
import {Img,SliderHomeDiv} from './styles'
function SliderHome(){
    return (<SliderHomeDiv>
        <Img src={imgSlider}/>
    </SliderHomeDiv> ) 
}

export default SliderHome