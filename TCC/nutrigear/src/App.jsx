//import gear from './assets/logohorario.svg';
import Menu from './menu/menu';

function App(){
    //crição de variave para manipular as requisições
    const msg = 'Seja bem vindo! Voce está na pagina inicial'

    
return (
            <div className="App">
                <body>
                    <Menu/>
                <h1>{msg} </h1>
            </body>
            </div>
        )        
    }
export default App;

/*
const http = require('http');

// Crie uma instância do servidor http para manipular solicitações HTTP
let app = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});

    res.end('Hello World!\n');
});

// Inicie o servidor na porta 80
app.listen(80, '127.0.0.1');
*/