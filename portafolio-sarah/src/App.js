import React from 'react';
import PortafolioSarah from './PortafolioSarah';

function App() {
  return <PortafolioSarah />;
}

export default App;

function PortafolioSarah() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center text-center p-4">
      <h1 className="text-5xl font-extrabold text-purple-600 mb-4">¡Hola! Soy Sarah</h1>
      <h2 className="text-xl font-medium text-gray-700 mb-6">Analista Programadora</h2>
      <h3 className="text-2xl font-bold text-gray-800 mb-2">Mis Conocimientos</h3>
      <p className="text-gray-600 mb-8">
        HTML • JavaScript • Python • CSS • SQL • MySQL • Oracle • React • Node.js • Windows Server
      </p>
      <footer className="text-sm text-gray-500">© 2025 Sarah Arias Martínez</footer>
    </div>
  );
}
