import { useState } from 'react';
import styles from './SearchBar.module.css';
import PropTypes from 'prop-types';


const SearchBar = ({ setQuery, setCategoria, setLoading}) => {
    const [localQuery, setLocalQuery] = useState("");

    const categorias = [
        "Natureza",
        "Pessoas",
        "Tecnologia",
        "Animais",
        "Esportes",
        "Arquitetura",
        "Interiores",
        "Comida",
        "Veículos",
        "Negócios",
        "Saúde",
        "Educação",
        "Viagem",
        "Cultura",
        "Moda",
    ];
  return (
    <div  className={styles.searchBar}>
      <div>
        <input value={localQuery} type="text" placeholder="Search..." onChange={(e) => setLocalQuery(e.target.value)}/>
        <button onClick={() => { setLoading(true); setQuery(localQuery); }}>Pesquisar</button>
      </div>
      <select name="categorias" id="categorias" onChange={(e) => { setCategoria(e.target.value); setLoading(true); }}>
        {categorias.map((categoria) => (
            <option key={categoria} value={categoria}>
            {categoria}
          </option>
        ))}
      </select>
    </div>
  );
};

SearchBar.propTypes = {
    setQuery: PropTypes.func,
    setCategoria: PropTypes.func.isRequired,
    setLoading: PropTypes.func.isRequired,
  };

export default SearchBar;
