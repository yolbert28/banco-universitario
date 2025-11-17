// src/components/ObjectiveCard.tsx

import React from 'react';

interface ObjectiveCardProps {
  text: string;
}

function ObjectiveCard({ text }: ObjectiveCardProps) {
  return (
    <div className="objective-card">
      <p>{text}</p>
    </div>
  );
}

export default ObjectiveCard;