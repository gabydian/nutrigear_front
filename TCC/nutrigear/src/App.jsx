import { useState } from 'react';
import axios from 'axios';
//import gear from './assets/logohorario.svg';
import logo from './assets/logo.png'

function App(){
    const abertura = 'Seja bem vindo!';
;

return (
    <div className="container">
        <h1>{abertura}</h1>
        <div className="logofix">
           <img src={logo} className="logofixo" width={250} alt="logo" />
           
        </div>
    </div>
        )

        
    }
export default App;