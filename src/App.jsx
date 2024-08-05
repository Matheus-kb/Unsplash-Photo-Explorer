import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import FotoList from "./components/FotoList";
import SearchBar from "./components/SearchBar";
import FotoAmpliada from "./components/FotoAmpliada";

function App() {
  const [query, setQuery] = useState("");
  const [categoria, setCategoria] = useState("");
  const [fotos, setFotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [ampliar, setAmpliar] = useState(null);

  const fetchData = async ({ query, categoria }) => {
    const apiKey = import.meta.env.VITE_UNSPLASH_API_KEY;
    let allPhotos = [];
    const pagesToFetch = 3; // Number of pages to fetch
    const perPage = 30; // Number of items per page

    if (query || categoria) {
      let searchQuery = query;

      if (query && categoria) {
        searchQuery = `${query} ${categoria}`;
      } else if (categoria) {
        searchQuery = categoria;
      }

      try {
        for (let page = 1; page <= pagesToFetch; page++) {
          const response = await axios.get(
            `https://api.unsplash.com/search/photos`,
            {
              params: {
                query: searchQuery,
                client_id: apiKey,
                per_page: perPage,
                page: page,
              },
            }
          );

          if (response.status === 200 && response.data && response.data.results) {
            allPhotos = [...allPhotos, ...response.data.results];
          }
        }
        setFotos(allPhotos);
      } catch (error) {
        console.log(error);
      }
      return;
    }

    try {
      for (let page = 1; page <= pagesToFetch; page++) {
        const response = await axios.get(`https://api.unsplash.com/photos/random`, {
          params: {
            client_id: apiKey,
            count: perPage,
          },
        });
        if (response.status === 200 && response.data) {
          allPhotos = [...allPhotos, ...response.data];
        }
      }
      setFotos(allPhotos);
      console.log(allPhotos);
    } catch (error) {
      console.log("Ocorreu um erro ao buscar as fotos aleatórias", error);
    }
  };

  useEffect(() => {
    fetchData({ query, categoria });
  }, []);

  useEffect(() => {
    if (loading) {
      fetchData({ query, categoria });
      setLoading(false);
    }
  }, [loading]);

  return (
    <>
      <SearchBar setQuery={setQuery} setCategoria={setCategoria} setLoading={setLoading} />
      {(loading && <p>Loading...</p>) || <FotoList fotos={fotos} setAmpliar={setAmpliar} />}
      {ampliar && (
        <div className="fotoAmpliadaBackdrop" onClick={() => setAmpliar(null)}>
          <FotoAmpliada ampliar={ampliar} setAmpliar={setAmpliar} />
        </div>
      )}
    </>
  );
}

export default App;
