import React from 'react';
import './Spinner.css'; // Don't forget to style it!

function Spinner() {
  return (
    <div className="spinner">
      <span className="spinner-dot">•</span>
      <span className="spinner-dot">•</span>
      <span className="spinner-dot">•</span>
    </div>
  );
}

export default Spinner;