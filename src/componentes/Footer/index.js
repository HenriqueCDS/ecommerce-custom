// components/Footer.js
import footer from './footer.module.css';
import React from 'react';
import logo from './logo.png'

import { InstagramLogo, FacebookLogo, TwitterLogo,Phone,MapPin,Envelope    } from 'phosphor-react';
function Footer() {
  return (
    <footer className={footer.footer}>
       
        <div className={footer.footerContainer}>
                    <div className={footer.footerLogo}>
                        <h1 >Shop <span>Now</span></h1>
                    </div>
                    <div className={footer.footerLinks}>
                        <h3>Navbar</h3>
                        <ul>
                            
                            <li><a href="#">Sobre Nos</a></li>
                            <li><a href="#">O que nos torna especiais</a></li>
                            <li><a href="#">Menu</a></li>
                        </ul>
                    </div>
                   
                    <div className={footer.footerLinks}>
                        <h3>Contatos</h3>
                        <ul>
                            <li><a href="#"><Phone />19 999992999 </a></li>
                            <li><a href="#"><MapPin /> local</a></li>
                            <li><a href="#"><Envelope />PepperSmith@gmail.com</a></li>
                        </ul>
                    </div>
                   
                </div>
                <div className={footer.footerBottom}><a href="#"><i class="icon ion-social-facebook"></i></a><a href="#"><i class="icon ion-social-twitter"></i></a><a href="#"><i class="icon ion-social-snapchat"></i></a><a href="#"><i class="icon ion-social-instagram"></i></a>
                    <p class="copyright">copyright© 2023</p>
                    <div className={footer.footerContact}>
                    <ul>
                      <li><a href="#"><i class="fab fa-facebook-f"><FacebookLogo size={24} /></i></a></li>
                      <li><a href="#"><i class="fab fa-instagram"></i><InstagramLogo size={24}/></a></li>
                      <li><a href="#"><i class="fab fa-twitter"></i><TwitterLogo size={24} /></a></li>
                    </ul>
                    </div>
                </div>
           
      

    </footer>
  );
}

export default Footer;
