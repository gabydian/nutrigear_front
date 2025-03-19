import { useState, useEffect } from 'react';
import axios from 'axios';
import logo from '../assets/logo.png'
import engrenagem from  '../assets/logo_Gear.svg'
import './cadastro.css'

function Cadastro() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [restricaoAlimentar, setRestricaoAlimentar] = useState([]);
    const [carregando, setCarregando] = useState(false);
    const [mensagem, setMensagem] = useState('');
    const [mensagemSucesso, setMensagemSucesso] = useState(''); // Nova variável de estado

    const handleRestricaoAlimentarChange = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            setRestricaoAlimentar([...restricaoAlimentar, value]);
        } else {
            setRestricaoAlimentar(restricaoAlimentar.filter((item) => item !== value));
        }
    };
    
    const handleEnviar = async (e) => {
        e.preventDefault();
        setCarregando(true);

        // Converter a data para o formato americano (YYYY-MM-DD)
        const dataFormatada = dataNascimento.split('-').join('-');

        // Criar o objeto que será enviado
        const dadosEnvio = {
            nome,
            email,
            dataNascimento: dataFormatada,
            senha,
            restricaoAlimentar: restricaoAlimentar//.join(', ')
        };

        // Logar o objeto JSON
        console.log('Dados enviados:', JSON.stringify(dadosEnvio, null, 2));

        //postman http://localhost:8080/pessoas
        try {
            const response = await axios.post('http://192.168.0.102:8080/pessoas', dadosEnvio);
            //const response = await axios.post('http://10.0.1.124:5173/pessoas', dadosEnvio);

            const { data } = response;
            setMensagem(data.mensagem);

            setMensagemSucesso('Cadastro realizado com sucesso!'); // Armazena a mensagem de sucesso
            setMensagem(''); // Limpa mensagens de erro anteriores

            localStorage.setItem('usuarioCadastrado','true');
            localStorage.setItem('Nome',nome);
            localStorage.setItem('Restricao',restricaoAlimentar);
            window.location.href = '/Menus';

            localStorage.setItem('usuarioCadastrado','true');
            window.location.href = '/Menus';
            console.log('Cadastro realizado com sucesso:', JSON.stringify(data, null, 2));
            
        } catch (error) {
            console.error('Houve um erro na requisição!', error);
            if (error.response) {
                console.error('Dados do erro:', error.response.data);
                setMensagem(`Erro: ${error.response.data.message || "Erro ao realizar o login."}`);
            } else if (error.request) {
                console.error('Requisição feita mas sem resposta:', error.request);
                setMensagem("Erro: Sem resposta do servidor.");
            } else {
                setMensagem(`Erro: ${error.message}`);
            }
        } finally {
            setCarregando(false);
        }
    };

    useEffect(() => {
        if (mensagemSucesso) {
            alert(mensagemSucesso); // Exibe o alerta
            setMensagemSucesso(''); // Limpa a mensagem de sucesso após exibir o alerta
        }
    }, [mensagemSucesso]);

    return (
        <div className="container">
            <h1>Cadastro</h1>

            <div className="logocard">
               <h1>NUTRIGEAR</h1>
               <img src={engrenagem} className='logo' alt="logo" />
               <img src={engrenagem} className='logo-invertido' alt="logo" />               
            </div>
            
            <form onSubmit={handleEnviar}>
                <div className="form-group">
                    <label htmlFor="nome">Nome:</label>
                    <input
                        type="text"
                        id="nome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">E-mail:</label>
                    <input
                        type="text"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="senha">Senha:</label>
                    <input
                        type="password"
                        id="senha"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="dataNascimento">Data de Nascimento:</label>
                    <input
                        type="date"
                        id="dataNascimento"
                        value={dataNascimento}
                        onChange={(e) => setDataNascimento(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="restricaoAlimentar">Restrição Alimentar:</label>
                    <div>
                        <label>
                            <input
                                type="checkbox"
                                value="gluten"
                                checked={restricaoAlimentar.includes("gluten")}
                                onChange={handleRestricaoAlimentarChange}
                            /> Glúten
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                value="lactose"
                                checked={restricaoAlimentar.includes("lactose")}
                                onChange={handleRestricaoAlimentarChange}
                            /> Lactose
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                value="vegetariano"
                                checked={restricaoAlimentar.includes("vegetariano")}
                                onChange={handleRestricaoAlimentarChange}
                            /> Vegetariano
                        </label>
                        {/* Adicione mais opções de restrições alimentares aqui */}
                    </div>
                </div>
                <button type="submit" disabled={carregando || !nome || !dataNascimento}>
                    {carregando ? 'Carregando...' : 'Enivar'}
                </button>
                {mensagem && <div className="mensagem">{mensagem}</div>}
            </form>
        </div>
    );
}

export default Cadastro;
