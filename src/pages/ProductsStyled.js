import styled from 'styled-components';

export const ProductStyles = styled.div`
  background-color: white;
  text-align: center;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  .containerDiv{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: .5rem;
    align-items: center;
    justify-content:center;
    @media screen and (max-width: 768px){
    align-items: center;
    width: 100%;
    height: 3600px;
    }
}

   h2 {
       font-size: 2rem;
       border: 5px solid black;
   }
   img{
       width: 50%;
       height: 300px;   
       border-radius: 5%;  
       @media screen and (max-width: 768px){
         width: 50%;
         height: 200px;
}
   }
`