import  RecipeReviewCard  from '../components/box/box.jsx';
import { useState, useEffect } from 'react';
import ListaMenus from './conteudos/menus.json'; // Importação correta


function Menus() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      setData(ListaMenus); // Atribui os dados diretamente
      setLoading(false); // Define loading como false após atribuir os dados
    }, []); // Executa apenas uma vez na montagem do componente
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    return (
      <div>
        <h1>MENUS</h1>
        <RecipeReviewCard data={data} />
      </div>
    );
  }

  export default Menus;