// pages/Home.js
import React from 'react';
import about from './about.module.css'

function About(prop) {
  return (
    <section className={about.container}>
        <h1>{prop.titulo}</h1>
         {prop.textos.map((texto ) => <p>{texto}</p>)}
   </section>
  );
}
export default About;

