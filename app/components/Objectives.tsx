// src/components/Objectives.tsx

import React from 'react';
import ObjectiveCard from './ObjectiveCard';

const objectiveData = [
  "Fomentar el uso de nuestras plataformas digitales, para ofrecer una banca en línea un servicio eficiente, rápido, amigable, seguro y confiable.",
  "Brindar a los estudiantes universitarios un servicio de banca adaptado a sus necesidades de la mano de la innovación, de nuestros canales digitales móviles y nuestros puntos de atención presencial.",
  "Promover la educación financiera de los estudiantes universitarios, a través de nuestros canales digitales y puntos de atención, fomentando la cultura del ahorro y del uso responsable del crédito.",
  "Mantener una cultura de innovación y mejora continua, que nos permita crear productos y servicios, para estar siempre a la vanguardia de las necesidades de nuestros clientes y el mercado.",
  "Establecer alianzas estratégicas con universidades y comercios, para brindar beneficios exclusivos a nuestros clientes, tanto en los canales digitales, como en los puntos de atención presencial.",
  "Brindar a los estudiantes universitarios un servicio de banca de calidad, con la transparencia, la ética, la confianza, la responsabilidad y la excelencia, a través de nuestros canales digitales y nuestros puntos de atención presencial."
];

function Objectives() {
  return (
    <section className="objectives-section">
      <h2>Objetivos</h2>
      <div className="objectives-grid">
        {objectiveData.map((texto, index) => (
          <ObjectiveCard key={index} text={texto} />
        ))}
      </div>
    </section>
  );
}

export default Objectives;