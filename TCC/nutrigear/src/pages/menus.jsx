import  RecipeReviewCard  from '../components/box/box.jsx';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ListaMenus from './conteudos/menus.json'; // Importação correta


function Menus() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const Nome = localStorage.getItem('Nome');
    const restricaoAlimentar = localStorage.getItem('Restricao');


    useEffect(() => {
      const usuarioCadastrado = localStorage.getItem('usuarioCadastrado');

      if (usuarioCadastrado === 'true') {
        setData(ListaMenus); // Atribui os dados diretamente
        setLoading(false); // Define loading como false após atribuir os dados
      } else {
        navigate('/login');
      }
    }, [navigate]); // Executa apenas uma vez na montagem do componente
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    return (
      <div>
        <h1>MENUS de {Nome} </h1>
      <h3>segue menus para {restricaoAlimentar}  </h3>
        <RecipeReviewCard data={data} />
      </div>
    );
  }

  export default Menus;