import { useState } from 'react';
import axios from 'axios';

function Login() {
    const [nome, setNome] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [carregando, setCarregando] = useState(false);
    const [mensagem, setMensagem] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        setCarregando(true);

        // Converter a data para o formato americano (YYYY-MM-DD)
        const dataFormatada = dataNascimento.split('-').join('-');

        // Criar o objeto que será enviado
        const dadosEnvio = {
            nome,
            dataNascimento: dataFormatada,
        };

        // Logar o objeto JSON
        console.log('Dados enviados:', JSON.stringify(dadosEnvio, null, 2));

        try {
            const response = await axios.post('http://localhost:8080/acolhido', dadosEnvio);
            const { data } = response;
            setMensagem(data.mensagem);
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

    return (
        <div className="container">
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
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
                    <label htmlFor="dataNascimento">Data de Nascimento:</label>
                    <input
                        type="date"
                        id="dataNascimento"
                        value={dataNascimento}
                        onChange={(e) => setDataNascimento(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" disabled={carregando || !nome || !dataNascimento}>
                    {carregando ? 'Carregando...' : 'Login'}
                </button>
                {mensagem && <div className="mensagem">{mensagem}</div>}
            </form>
        </div>
    );
}

export default Login;
