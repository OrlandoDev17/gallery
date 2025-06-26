import "../styles/Filter.css";
export default function Filter() {
  return (
    <section className="filter-section">
      <nav className="filter">
        <input type="search" placeholder="Buscar" />
        <button>Todas</button>
        <button>Naturaleza</button>
        <button>arquitectura</button>
        <button>Retratos</button>
        <button>Urban</button>
        <button>deportes</button>
      </nav>
    </section>
  );
}
