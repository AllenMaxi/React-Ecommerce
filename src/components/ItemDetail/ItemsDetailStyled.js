import styled from 'styled-components';

export const ItemsDetail = styled.div`
       text-align: center;
       max-width: 100%;
  h2{
       color: green;
       font-family: Arial, Helvetica, sans-serif;
       }
 .center {
         width: 100%; 
         height: 700px;
        @media screen and (max-width: 620px){
               width: 100%;
               height: 500px;
       }
 }
  img{
       width: 70%;
       height: 400px;
       border-radius: 50%;
       @media screen and (max-width: 700px){
               width: 100%;
              height: 100%;
       }
}
 p{
       font-size: 1.5rem;
 }
span{
       color: black;
 }

.container{
        width: 60%;
        margin-left: auto;
        margin-right: auto;
        background-color: white;
         border-radius: 10%;
}
`;

