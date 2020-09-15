import styled from 'styled-components'

export const TopBar = styled.div`
     
    background: #fff;
    border-bottom: 1px solid #d7d7d7;
     
`

 

export const PageHeaderDiv = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    
    flex:1;
    padding: 6px;
    flex-direction:row;
 
   #esquerda{
       display:flex;
       flex:1;
       max-width:250px;
   } 

 


    
 

      
    #direita 
    
    a{
      & + a{
          margin-left:10px;
      }
        text-decoration:none;
        color:#595959;
        font-weight:bold;
        align-items: center;

        
    }

    #direita  .marginLeft{
     margin-left:100px;
   }

    #direita .iconBlue{
        color:#1E91CC;
    }
   
    button{
        background:none;
        border:none;
        color:#595959;
    }
    #mobile {
            display:none;
            padding-right:10px;       
        }

    #mobile :hover{
        color:#ed1c24;
        }

    @media (max-width:800px){
        #mobile {
            display:block;
        }
        .desktop{
            display:none;
        }
    }

      
`
