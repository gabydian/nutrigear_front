// Artigos.jsx
import { useState, useEffect } from 'react';
import RecipeReviewCard from '../components/box/box';
import ListaArtigos from './conteudos/artigos.json'; // Importação correta

function Artigos() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setData(ListaArtigos); // Atribui os dados diretamente
    setLoading(false); // Define loading como false após atribuir os dados
  }, []); // Executa apenas uma vez na montagem do componente

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Artigos</h1>
      <RecipeReviewCard data={data} />
    </div>
  );
}

export default Artigos;