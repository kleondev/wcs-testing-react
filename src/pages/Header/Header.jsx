import React from "react";
import './css/Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="menu-header">
        <div className="p-10">
          <span className="menu-item">Personajes</span> 
        </div>
        <div className="p-10">
          <span className="menu-item">Estudiantes</span> 
        </div>
        <div className="p-10">
          <span className="menu-item">Profesores</span> 
        </div>
      </div>
    </header>
  );
}