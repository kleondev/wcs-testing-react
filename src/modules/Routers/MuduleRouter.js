import React from "react";
import { Routes, Route } from "react-router-dom";

import Estudiantes from "../../pages/Estudiantes/Estudiantes";
import Profesores from '../../pages/Profesores'
import { Personajes } from '../../pages/Personajes'

export default function MuduleRouter() {
  return (
    <Routes>
      <Route path="/personajes" element={<Personajes />} />
      <Route path="/estudiantes" element={<Estudiantes />} />
      <Route path="/profesores" element={<Profesores />} />
    </Routes>
  );
}