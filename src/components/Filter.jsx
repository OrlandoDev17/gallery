import "../styles/Filter.css";
export default function Filter() {
  return (
    <section className="filter-section">
      <nav className="filter">
        <input type="search" placeholder="Buscar por titulo o autor..." />
        <button id="active">Todas</button>
        <button>Naturaleza</button>
        <button>arquitectura</button>
        <button>Retratos</button>
        <button>Urbano</button>
      </nav>
    </section>
  );
}
