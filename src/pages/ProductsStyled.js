import styled from 'styled-components';

export const ProductStyles = styled.div`
  background-color: white;
  text-align: center;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  .containerDiv{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    @media screen and (max-width: 768px){
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    width: 100%;
    height: 3600px;
    }
}
   .cart_img {
       width: 30%;
       height: 230px;
   }
   h2 {
       font-size: 2rem;
   }
   img{
       width: 50%;
       height: 300px;
   }
`