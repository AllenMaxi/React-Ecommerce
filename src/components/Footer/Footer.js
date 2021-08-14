import React from 'react';
import { Instagram, LinkedIn, GitHub, Facebook } from '@material-ui/icons';
import "./Footer.css";

const Footer = () => {

    return(
        <div className="footer">
          <div className="footer_Content">
           <h2>Derechos Reservados: Allende Maximiliano</h2>
           <p>Copyright</p>
           </div>
           <div className="footer_Redes">
           <h3>Redes Sociales:</h3>
           <a href="https://instagram.com/maxi_allende97" 
           target="_blank" rel="noreferrer"><Instagram className="icon"/></a>
           <a href="https://www.linkedin.com/in/maximiliano-allende-6786941b5" 
           target="_blank" rel="noreferrer"><LinkedIn className="icon"/></a>
           <a href="https://github.com/AllenMaxi" 
           target="_blank" rel="noreferrer"><GitHub className="icon"/></a>
           <Facebook className="icon"/>
         </div>
        </div>
    )
    
  }

export default Footer;