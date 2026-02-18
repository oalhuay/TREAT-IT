import './App.css'

function App() {
  return (
    <div className="page">
      <header className="hero">
        <p className="eyebrow">React + Vite</p>
        <h1>Tu web lista para subir a internet</h1>
        <p className="subtitle">
          Proyecto rapido, limpio y optimizado para desplegar en Vercel en pocos
          minutos.
        </p>
        <div className="actions">
          <a className="btn primary" href="#contacto">
            Empezar ahora
          </a>
          <a className="btn ghost" href="https://vercel.com/new" target="_blank" rel="noreferrer">
            Desplegar en Vercel
          </a>
        </div>
      </header>

      <main className="grid">
        <article className="card">
          <h2>Rapida</h2>
          <p>Build ultrarrapido con Vite y carga optimizada para produccion.</p>
        </article>
        <article className="card">
          <h2>Escalable</h2>
          <p>Estructura base clara para crecer con componentes y rutas.</p>
        </article>
        <article className="card" id="contacto">
          <h2>Publicable</h2>
          <p>Compatible con Vercel, Netlify y cualquier hosting estatico.</p>
        </article>
      </main>

      <footer className="footer">
        <small>Hecho con React. {new Date().getFullYear()}</small>
      </footer>
    </div>
  )
}

export default App
