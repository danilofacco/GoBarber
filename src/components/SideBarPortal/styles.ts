import styled from 'styled-components'

export const Container = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:10px;
   .esquerda{
    padding:5px;
         img{
                border: 4px solid #309AD0;
                box-sizing: border-box;
                border-radius:50%;
   }
   }

   

   .direita {
    padding:5px;
    display:flex;
    flex-direction:column;
    flex:1;
    color: #595959;

    .NomeCliente{ 
    font-weight: bold;
    font-size: 22px;
    line-height: 26px;
    }

   .NCartao{ 
    font-size: 15px;
   }

   a {
    text-decoration:none;
    font-size: 15px;
    line-height: 18px;
    color: #595959;

    svg{
        color: #C1262F;
    }
   }
   }

   
`

