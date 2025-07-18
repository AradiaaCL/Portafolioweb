import React from "react";

export default function PortafolioSarah() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <header className="flex flex-col items-center justify-center py-20 bg-gradient-to-b from-black to-pink-800">
        <h1 className="text-5xl font-bold text-pink-400 animate-pulse">¡Hola! Soy Sarah</h1>
        <p className="text-xl mt-4 text-pink-200">Analista Programadora</p>
      </header>

      <section className="py-12 px-6 bg-black text-center">
        <h2 className="text-3xl font-semibold text-pink-400 mb-8">Mis Conocimientos</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto text-lg">
          <span className="bg-pink-900/60 p-4 rounded-xl shadow-lg">HTML</span>
          <span className="bg-pink-900/60 p-4 rounded-xl shadow-lg">JavaScript</span>
          <span className="bg-pink-900/60 p-4 rounded-xl shadow-lg">Python</span>
          <span className="bg-pink-900/60 p-4 rounded-xl shadow-lg">CSS</span>
          <span className="bg-pink-900/60 p-4 rounded-xl shadow-lg">SQL</span>
          <span className="bg-pink-900/60 p-4 rounded-xl shadow-lg">MySQL</span>
          <span className="bg-pink-900/60 p-4 rounded-xl shadow-lg">Oracle</span>
          <span className="bg-pink-900/60 p-4 rounded-xl shadow-lg">React</span>
          <span className="bg-pink-900/60 p-4 rounded-xl shadow-lg">Node.js</span>
          <span className="bg-pink-900/60 p-4 rounded-xl shadow-lg">Windows Server</span>
        </div>
      </section>

      <footer className="py-8 text-center text-pink-200">
        <p>&copy; {new Date().getFullYear()} Sarah Arias Martínez</p>
      </footer>
    </div>
  );
}
