import gear from '../src/assets/logohorario.png';
import './index.css';

function App(){
    //crição de variave para manipular as requisições
    const msg = 'Seja bem vindo! Voce está na pagina inicial'
return (
        
            <div className="App">
            <img src={gear} width={420}/>
                <h1>{msg} </h1>
           
            </div>
    	 );
    }
export default App;
