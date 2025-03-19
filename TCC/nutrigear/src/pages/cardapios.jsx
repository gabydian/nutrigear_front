// Artigos.jsx
import { useState, useEffect } from 'react';
import RecipeReviewCard from '../components/box/box';
import ListaArtigos from './conteudos/cardapios.json'; // Importação correta
import AlimentosTable from '../components/table.jsx';

function Cardapios() {
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
      <h1>CARDAPIOS</h1>
      <RecipeReviewCard data={data} />

      <h1>TABELA DE CONTEÚDOS ALIMENTARES</h1>
      <AlimentosTable />
    </div>
  );
}

export default Cardapios;