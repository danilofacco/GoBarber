import { shade } from 'polished'
import styled, { css } from 'styled-components'


export const Container = styled.div`
        margin:10px;
        display: flex;
        justify-items:center;
        justify-content:center;
        align-items: center;
        width:100%;
       

    span {
      font-size: 20px;
      color: #85868c;
    }
    
    .block {
     width:100%;
     text-align:center;
    }
   
     `

export const ClickToAction = styled.div`
        border: 2px #EBEBEB solid;
        border-radius:8px;
        margin:30px 20px;
        padding:15px;
        display: flex;
        justify-items:center;
        justify-content:space-around;
        align-items: center;
        width:100%;

     

        .c25{
            width:25% !important;
            height:60px;
            margin:10px;
        }

        .c75{
            width:75% !important;
            margin:10px;    
        }
       
        @media (max-width:760px){
            flex-wrap: wrap;
            .c25{
            width:60% !important;
            order:2;
        }

        .c75{
           order:1;
           text-align: center;
        }
}
   
     `

export const TreeColumns = styled.div`
        flex-wrap: wrap;
        margin:10px;
        display: flex;
        justify-items:center;
        justify-content:space-around;
        align-items: center;
        width:100%;
    
       
   
     `


interface FormsProps {
    hasError: boolean;
}

export const Title = styled.h1`
@media (max-width:600px){
    font-size:30px;
    line-height:35px;
    margin-top:25px;
}

font-size:48px;
color: #3a3a3a;
margin-top:40px;
max-width:450px;
line-height:56px;
`

export const Form = styled.form<FormsProps>`
  @media (max-width:600px){
    margin-top:20px;
}
margin-top:40px;
max-width:900px;
display:flex;

@media (max-width:600px){
    display:block;
}


input{
    @media (max-width:600px){
    border-radius: 5px;
    width:100%;
    height:50px;
    font-size:12px;
}

    flex:1;
    height:70px;
    padding: 0 24px;
    border:0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;

    border: 2px solid #fff;
    border-right:0;

    ${(props) => props.hasError &&
        css`
             border-color:#c53030;
         `}

    &::placeholder{
        color: #a8a8b3;
    }
}
button{

    @media (max-width:600px){
    margin-top:10px;
    border-radius: 5px;
    width:100%;
    height:50px;
}


    width:210px;
    height:70px;
    background: #04d361;
    border-radius: 0 5px 5px 0;
    border:0;
    color:#fff;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover{
    background:${shade(0.2, '#04d361')}
    }
}
 
`