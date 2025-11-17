// src/routes/about.tsx
import React from 'react';
import Header from '../components/Header';
import InfoSection from '../components/InfoSection';
import Objectives from '../components/Objectives';

// 1. Comentamos las importaciones locales
 import './AboutPage.css';
// import misionImg from '../assets/imagen-mision.png';
// import visionImg from '../assets/imagen-vision.png';
// import headerBgImg from '../assets/header-bg.jpg';

// 2. Usamos las URLs de las carpetas
const misionImg = "../../public/images/mision.webp";
const visionImg = "../../public/images/vision.webp";
const headerBgImg = "../../public/images/acerca_de_nosotros.webp";

export default function About() {
  return (<div className="about-page">
      
      {/* Componente de Cabecera con la imagen de fondo */}
      <Header 
        title="Banco Universitario" 
        backgroundImageUrl={headerBgImg} 
      />
      
      <main className="main-content">
        
        {/* === Sección Misión === */}
        <InfoSection 
          title="Misión"
          text="Ser una Institución financiera comprometida con los estudiantes universitarios, los cuales son el futuro de nuestro país. Nuestra misión es facilitar la gestión de sus recursos y el crecimiento económico, profesional y personal de nuestros clientes."
          imageUrl={misionImg}
          imageFirst={true} 
        />
        
        {/* === Sección Visión === */}
        <InfoSection 
          title="Visión"
          text="Ser la principal opción financiera para estudiantes universitarios en el país. Deseamos ser reconocidos por la calidad de nuestros servicios, la innovación de nuestras soluciones y nuestro compromiso con la educación y el desarrollo social."
          imageUrl={visionImg}
          imageFirst={false} // ¡El prop 'false' cambia el orden!
        />
        
        {/* === Sección Objetivos === */}
        <Objectives />
        
      </main>
    </div>
  );
}