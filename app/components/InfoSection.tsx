
import React from 'react';

interface InfoSectionProps {
  title: string;
  text: string;
  imageUrl: string;
  imageFirst: boolean;
}

function InfoSection({ title, text, imageUrl, imageFirst }: InfoSectionProps) {
  
  const imageComponent = (
    <div className="info-image-container">
      <img src={imageUrl} alt={title} className="info-image" />
    </div>
  );
  
  const textComponent = (
    <div className="info-text">
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );

  return (
    // 'image-first' es una clase condicional para el CSS
    <section className={`info-section ${imageFirst ? 'image-first' : 'text-first'}`}>
      {imageComponent}
      {textComponent}
    </section>
  );
}

export default InfoSection;