import { createGlobalStyle } from 'styled-components'
import { shade } from 'polished'
export default createGlobalStyle`

  
*{
  
    margin:0;
    padding:0;
    outline:0;
    box-sizing:border-box;
  
}
body{
    -webkit-font-smoothing:antialiased;
    background:#FBFBFB;
}
body,input,button, select{
    font: 16px Roboto, sans-serif
}
#root{
    margin: 0 auto;
    padding: 0;
}

.block_container{
    max-width:1200px;
    margin: 0 auto;
    padding: 0 12px;
}

max-width:1200px;

button {
    cursor:pointer;
}

h1{  
    color:#595959;
}


h2{ 
    font-size:33px;
    color:#595959;
}

h3{
            font-size:23px;
            color:#595959;
        }
    
    
p{
    font: normal 15px / 27px "Roboto", Helvetica, Arial, Verdana, sans-serif;
    word-spacing: normal;
    color: #595959;
}
.buttonRed{
      margin:5px;
      display:flex;
      align-items:center;
      justify-content:center;
      width:50%;
      height:45px;
      background:#E4212F ;
      border-radius:8px;
      text-decoration:none;
      color:#f5f5f5;
      font-weight:bold;
     }
     
    .buttonRed:hover{
    background:${shade(0.2, '#E4212F')}
    }

     .buttonGreen{
      margin:5px;
      display:flex;
      align-items:center;
      justify-content:center;
      width:50%;
      height:45px;
      background:#80C56A ;
      border-radius:8px;
      text-decoration:none;
      color:#f5f5f5;
      font-weight:bold;
     }

    .buttonGreen:hover{
    background:${shade(0.2, '#80C56A')}
    }

    .buttonGreen svg, .buttonRed svg{
        margin:5px;
    }

`