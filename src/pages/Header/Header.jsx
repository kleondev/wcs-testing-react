import React from "react";
import './css/Header.css';
import { Link } from "react-router-dom";


export default function Header() {
  return (
    <header className="header">
      <div className="menu-header">
        <div className="p-10">
          <Link to="/personajes" className="menu-item">Personajes</Link> 
        </div>
        <div className="p-10">
          <Link to="/estudiantes" className="menu-item">Estudiantes</Link> 
        </div>
        <div className="p-10">
          <Link to="/profesores" className="menu-item">Profesores</Link> 
        </div>
      </div>
    </header>
  );
}