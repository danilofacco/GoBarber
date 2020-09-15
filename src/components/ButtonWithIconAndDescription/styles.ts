import styled from 'styled-components'

export const BTWIAD = styled.div`


    background: #FFFFFF;
    border: 1px solid #C7C7C7;
    box-sizing: border-box;
    border-radius: 10px;
    height: 83.14px;
    margin:8px 0;
    width:100%;
    transition: background-color 0.2s;
    transition: transform 0.2s;
    display: flex;
    justify-items:center; 
    align-items: center;

    a{  
        text-decoration:none;

        width:100%;
    transition: background-color 0.2s;
    transition: transform 0.2s;
    display: flex;
    justify-items:center; 
    align-items: center;

    
        svg{
            transition: color 0.2s;
            margin: 0 20px;
            color:#1E91CC;
        }
    

        .TitleDescription  {
            transition: color 0.2s;
            display:flex;
            flex-direction:column;
            flex:1;
        
            color: #595959;

                strong{
                    font-size: 18px;
                    line-height: 25px;
                }
                span{
                    
                    font-size: 13px;
                    line-height: 15px;
                }
                
        }
    }

     


&:hover{
    transform:translateX(10px);
    background:#1E91CC;
    border:#1E91CC;
    .TitleDescription{
        color:#FFFFFF;
    }
    svg{
        color:#FFFFFF;
    }
}
      
`