import styled from 'styled-components';

export const DivPrincipal = styled.div`
    background-color:red;
    display:flex;
    flex-direction:column;
    height:100vh;
    background-image: url("https://images4.alphacoders.com/667/thumb-1920-667236.jpg");
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover; /* Resize the background image to cover the entire container */
    overflow-y:hidden;
`;

export const CardLogin = styled.div`
    z-index:1;
    background-color:white;
    box-shadow: 1.7px 2.5px 7px #0000004f;
    margin: 30px auto;
    display:flex;
    flex-direction:column;
    width:450px;
    height:470px;
    min-height:470px;
    border-radius:10px;
    h1 {
        margin-top:40px;
        text-align:center;
        -webkit-font-smoothing: antialiased;
        font-family:Helvetica;
        color:#2d2d2d;
    }
    .user {
        transition: 1.2s linear;
        margin-top: 30px;
        margin-left:50px;
        margin-right:50px;
        height:40px;
        font-size: 22px;
        color: #2d2d2d;
        font-family: helvetica;
        border-color:white;
        border-style:none;
        border-bottom-style:groove;
        border-bottom-width:medium;
        -webkit-font-smoothing: antialiased;
        outline:none;
        /*
        &:focus, input,#label{
            transition: 0.1s linear;
            border-bottom-color:#6A9D67;
            color:red;
        }*/
        
    }

    .pass {
        transition: 1.2s linear;
        margin-top: 50px;
        margin-left:50px;
        margin-right:50px;
        height:40px;
        font-size: 22px;
        color: #2d2d2d;
        font-family: helvetica;
        border-color:white;
        border-style:none;
        border-bottom-style:groove;
        border-bottom-width:medium;
        -webkit-font-smoothing: antialiased;
        outline:none;
        /*
        &:focus, input,#label{
            transition: 0.1s linear;
            border-bottom-color:#6A9D67;
            color:red;
        }*/
        
    }

    input:focus{
        transition: .3s linear;
        border-bottom-color:#6A9D67;
        border-bottom-width:medium;
        /*#label{
            color:pink;
        }*/
    } 

    .login{
        transition: .5s linear;
        margin-top:50px;
        margin-left:50px;
        margin-right:50px;
        height:50px;
        border-radius:7px;
        background-color:#6A9D67;
        border-style:none;
        font-size: 14pt;
        font-weight:bold;
        color: white;
        font-family: Arial;
        -webkit-font-smoothing: antialiased;box-shadow: 1.7px 2.5px 7px #0000004f;
        outline:none;
        &:hover{
            transition: .2s linear;
            background-color:#588757;
            cursor:pointer;
        }

        &:active{
            background-color:yellowgreen;
            box-shadow: none;
        }
    }
    p {
        text-align:center;
        color:red;
        margin-top:30px;
        cursor:pointer;
    }
`;

export const DivParticles = styled.div`
    height:100%;
    width:100%;
    position:absolute;
    z-index:0;
`;

export const CardCriarConta = styled.div`
    background-color:red;
    z-index:1;
    background-color:white;
    box-shadow: 1.7px 2.5px 7px #0000004f;
    margin: auto;
    display:flex;
    flex-direction:column;
    width:450px;
    height:160px;
    min-height:130px;
    border-radius:10px;
    h2{
        text-align:center;
        font-family:Helvetica;
        color:#2d2d2d;
    }
    button{
        transition: .5s linear;
        
        margin-left:50px;
        margin-right:50px;
        height:50px;
        border-radius:7px;
        background-color:#6A9D67;
        border-style:none;
        font-size: 14pt;
        font-weight:bold;
        color: white;
        font-family: Arial;
        -webkit-font-smoothing: antialiased;box-shadow: 1.7px 2.5px 7px #0000004f;
        outline:none;
        &:hover{
            transition: .2s linear;
            background-color:#588757;
            cursor:pointer;
        }

        &:active{
            background-color:yellowgreen;
            box-shadow: none;
        }
    }
`;