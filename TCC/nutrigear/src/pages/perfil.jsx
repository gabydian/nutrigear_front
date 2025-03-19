import  RecipeReviewCard  from '../components/box/box.jsx';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ListaMenus from './conteudos/menus.json'; // Importação correta


function Perfil() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const Nome = localStorage.getItem('Nome');
    const restricaoAlimentarUsuario = localStorage.getItem('Restricao');


    useEffect(() => {
      const usuarioCadastrado = localStorage.getItem('usuarioCadastrado');

      if (usuarioCadastrado === 'true') {
        const menusFiltrados = ListaMenus.filter(menu => {
          return menu.restricaoAlimentar.toLowerCase() === restricaoAlimentarUsuario.toLowerCase();
      });

        setData(menusFiltrados); // Atribui os dados diretamente
        setLoading(false); // Define loading como false após atribuir os dados
      } else {
        navigate('/login');
      }
    }, [navigate, restricaoAlimentarUsuario]); // Executa apenas uma vez na montagem do componente
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    return (
      <div>
        <h1>INFORMAÇÕES DO SEU PERFIL  </h1>
        <h2>Nome: {Nome} </h2>
        <h3>Restrição alimentar: {restricaoAlimentarUsuario}  </h3>
        <RecipeReviewCard data={data} />
        <a href="editar" >Editar suas informações </a> 
      </div>
    );
  }

  export default Perfil;