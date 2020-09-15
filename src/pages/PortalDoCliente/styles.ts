import styled from 'styled-components'

export const Container = styled.div`
    display:flex;
    color: #595959;
    .diadasemana{
      margin:5px;
      background:#fff;
      border: 1px  solid #d7d7d7;
      color: #595959;

      &:hover{
        color: #fff;
        border: 1px  solid #fff;
      }
    }
  `

export const DiasDaSemana = styled.div`
display:flex; 

`

export const Lateral = styled.div`
 width:380px;
 border-right: 1px solid #d7d7d7;
`
export const Content = styled.div`
flex:1;
height:100vh;
padding:20px;

.alert{
  color: #c53030;
  font-weight:bold;
}
`

export const CartoesContainer = styled.div`
    display:flex;
    flex:1;
   align-items: center;
  justify-content: center;
  padding:40px;
  
  `

export const DuasColunas = styled.div`
display:flex;
flex:1;
justify-content:center;
justify-items:center;
align-items:center;

button{
  display:flex;
flex:1;
justify-content:center;
justify-items:center;
align-items:center;
 

  max-width:250px;
  margin:10px;

  svg{
    margin-right:10px;
  }
}
 
`