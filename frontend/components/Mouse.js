import React, { useState, useEffect } from "react";

function MovingImage() {
  // Utilisez l'état local pour gérer les coordonnées de l'image
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Fonction pour mettre à jour la position de l'image en fonction du défilement de la souris
  const updatePosition = (e) => {
    const newX = e.clientX; // Coordonnée X basée sur la position horizontale de la souris
    const newY = e.clientY; // Coordonnée Y basée sur la position verticale de la souris

    // Mettez à jour l'état avec les nouvelles coordonnées
    setPosition({ x: newX, y: newY });
  };

  // Utilisez useEffect pour ajouter et retirer l'écouteur d'événement de défilement
  useEffect(() => {
    window.addEventListener("mousemove", updatePosition);
    return () => {
      window.removeEventListener("mousemove", updatePosition);
    };
  }, []); // La liste vide des dépendances garantit que l'écouteur est ajouté une seule fois

  return (
    <div>
      <h1>Image Mobile au Scroll de la Souris</h1>
      <img
        src="/chemin/vers/votre/image.jpg"
        alt="Description de l'image"
        width="200"
        height="200"
        style={{
          position: "absolute", // Position absolue pour permettre le suivi du curseur
          left: `${position.x}px`, // Coordonnée X basée sur la position horizontale du curseur
          top: `${position.y}px`, // Coordonnée Y basée sur la position verticale du curseur
        }}
      />
    </div>
  );
}

export default MovingImage;
