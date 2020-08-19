import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoNoticias from './components/ListadoNoticias';

function App() {
  // definir la categoria y noticias
  const [categoria, setCategoria] = useState('');
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    const consultarAPI = async () => {
      const key = '6c6f5cc365c64d7e9468cd0c184bacdf';
      const url = `http://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=${key}`;
      const resp = await fetch(url);
      const noticias = await resp.json();
      setNoticias(noticias.articles);
    }
    consultarAPI();
  }, [categoria]);
  return (
    <Fragment>
      <Header titulo="Buscador de noticias" />
      <div className="container white">
        <Formulario setCategoria={setCategoria} />
        <ListadoNoticias noticias={noticias} />
      </div>
    </Fragment>
  );
}

export default App;
