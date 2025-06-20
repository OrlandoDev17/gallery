import './styles/App.css';
import FilterContainer from './components/FilterContainer';

function App() {
  return (
    <>
      <header className="header">
        <h1>Galería Creativa</h1>
        <p>Descubre una colección curada de fotografías excepcionales</p>
        <FilterContainer />
      </header>
    </>
  );
}

export default App;
