import styled  from 'styled-components'

export const TopBar = styled.p`
display:flex;
justify-content:center;
width:100%;
background:#1e91cc;
color:#fff;
padding:5px;
margin-top:-35px;
font-weight:bold;
`
export const TabelaPrecoDiv = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    flex:1; 
    min-width:225px;
    max-width:370px;
    border-bottom: 2px solid #e5e5e5;
    background: #f5f5f5;
    margin:10px;
    margin-top:50px;

    img{
     margin-bottom:5px;
     width:100%;
     border-bottom:5px solid #E4212F ;
   }

   ul{
     display:flex;
     flex-direction:column;
     align-items:center;
     width:100%;
     border-top:2px solid #e5e5e5;
     list-style:none;
     text-align:center
      
   }
   li{
     font-size:12px;
    padding:10px;
    width:80%;
    text-align:center;
    color: #777; 

   }
   li + li{
     border-top:2px solid #e5e5e5;
   }
     
 

   .title{
    margin:8px;
    font-size: 15px;
    font-weight:bold;
    color: #777;
  }
  .price{
    font-size: 42px;
    color: #777; 
  }
  .price_title{
    margin:3px;
    font-size: 11px;
    color: #777;
    padding:5px;
  }

`


   