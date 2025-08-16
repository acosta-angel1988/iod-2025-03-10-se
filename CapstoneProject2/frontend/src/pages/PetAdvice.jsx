import React from "react";
import "./PetAdvice.css";

const PetAdvice = () => {
  return (
    <div className="pet-advice-page">
      <h1>Pet Adoption & Care Advice</h1>

      <section className="advice-section">
        <h2>Before Adoption</h2>
        <ul>
          <li>Research the breed and its needs.</li>
          <li>Consider your lifestyle and space for a pet.</li>
          <li>Prepare your home with a safe environment.</li>
        </ul>
      </section>

      <section className="advice-section">
        <h2>Health & Nutrition</h2>
        <ul>
          <li>Schedule a vet visit immediately after adoption.</li>
          <li>Feed your pet a balanced diet appropriate for its age and breed.</li>
          <li>Keep your pet hydrated and maintain grooming routines.</li>
        </ul>
      </section>

      <section className="advice-section">
        <h2>Training & Socialization</h2>
        <ul>
          <li>Start with basic commands and positive reinforcement.</li>
          <li>Introduce your pet to other pets and people gradually.</li>
          <li>Be patient; every pet learns at its own pace.</li>
        </ul>
      </section>

      <section className="advice-section">
        <h2>Fun & Engagement</h2>
        <ul>
          <li>Spend quality time playing and exercising with your pet.</li>
          <li>Provide toys, scratching posts, or puzzle feeders to keep them engaged.</li>
          <li>Ensure mental stimulation to reduce boredom or destructive behavior.</li>
        </ul>
      </section>
    </div>
  );
};

export default PetAdvice;