import { Grid1, Grid2, Grid3, Grid4 } from './Icons';
import '../styles/FilterContainer.css';

import OrganizeItem from './OrganizeItem';

export default function FilterContainer() {
  const ORGANIZE_ITEMS = [
    {
      id: 1,
      icon: Grid1,
    },
    {
      id: 2,
      icon: Grid2,
    },
    {
      id: 3,
      icon: Grid3,
    },
    {
      id: 4,
      icon: Grid4,
    },
  ];

  return (
    <div className="filter-container">
      <input
        className="search"
        type="search"
        placeholder="Buscar por titulo o autor..."
      />
      <ul className="category-filter">
        <li>Todas</li>
        <li>Naturaleza</li>
        <li>Arquitectura</li>
        <li>Retratos</li>
        <li>Urbano</li>
      </ul>
      <ul className="organize">
        {ORGANIZE_ITEMS.map(({ id, icon }) => (
          <OrganizeItem key={id} icon={icon} />
        ))}
      </ul>
    </div>
  );
}
