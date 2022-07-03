import React from 'react';
import RESUME from '../../assets/Amanpreet_resume.pdf';

const CTA = () => {
  return (
    <div className="cta">
      <a href={RESUME} download className = "btn">RESUME</a>
      <a href="#contact" className = "btn btn-primary">Let's Talk</a>
    </div>
  )
}

export default CTA
