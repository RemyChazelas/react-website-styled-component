import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-track {
  background: #262626;
}
::-webkit-scrollbar-thumb {
  background-image: linear-gradient(#FFF200, #262626);
  border-radius: 10px;
  transition: 0.5s;
}

:root{
   --background: #35353f;
   --black:#262626;
   --black-op:rgba(37,37,37,.97);
   --purple:#803bec;
   --pink:#1EB8F2;
   --white:#fff;
   --nav:#000;
   --nav2:#3f3d56;
   --yellow: #FFF200;
   --red: #F90001;
}


*,*::before,*::after{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family: 'Poppins', sans-serif;
}
html{
  scroll-behavior:smooth;
}
    body,
    html,
    a {
        font-family: 'Poppins', sans-serif;
            }
    body {
        margin:0;
        padding:0;
        border: 0;
        outline: 0;
        background: center center / cover no-repeat fixed url('/catbg.png');
        overflow-x: hidden;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin:0;
        padding:0;
    }
    a {

        text-decoration: none;
        outline: none;
    }
    button{
        border:none;
        outline:none;
        &:focus{
            outline:none;
        }
    }

    *:focus {
        outline: none;
    }

    img,svg{
        width:100%;
        height:auto;
    }


`;

