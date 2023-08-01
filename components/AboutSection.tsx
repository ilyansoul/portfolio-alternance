'use client'
import { useState } from "react"
import Image from "next/image"
import { techSkillsData } from "@/constants";
import { softSkillsData } from "@/constants";
import { Button } from "@/constants";
import { Container } from "@/constants";

// Créer un composant pour le conteneur avec image, titre et description


const AboutSection = () => {
  const [showTechSkills, setShowTechSkills] = useState(true);
  const [showSoftSkills, setShowSoftSkills] = useState(false);

  // Reste du code...

  return (
    <section id="about" className="h-auto">
    <div className="p-4 sm:flex-col">
      {/* Boutons pour afficher les compétences */}
      <div className="flex justify-center mb-4 space-x-8">
        <Button onClick={() => { setShowTechSkills(true); setShowSoftSkills(false); }} label="Tech Skills" />
        <Button onClick={() => { setShowTechSkills(false); setShowSoftSkills(true); }} label="Soft Skills" />
      </div>
  
      {/* Conteneurs pour les compétences techniques */}
      {showTechSkills && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Tech Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {techSkillsData.map((skill, index) => (
              <Container key={index} image={skill.image} title={skill.title} description={skill.description} />
            ))}
          </div>
        </div>
      )}
  
      {/* Conteneurs pour les compétences douces */}
      {showSoftSkills && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Soft Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {softSkillsData.map((skill, index) => (
              <Container key={index} image={skill.image} title={skill.title} description={skill.description} />
            ))}
          </div>
        </div>
      )}
    </div>
  </section>
  );
};

export default AboutSection
