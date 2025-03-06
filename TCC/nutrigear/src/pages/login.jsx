import { useState } from 'react';
import axios from 'axios';
import logo from '../assets/logo.png';
import engrenagem from '../assets/logo_Gear.svg';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [carregando, setCarregando] = useState(false);
    const [mensagem, setMensagem] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setCarregando(true);

        try {
            const response = await axios.post('http://localhost:8080/pessoas', {
                email,
                senha,
            });

            const { data } = response;

            if (data.success) {
                // Login bem-sucedido
                localStorage.setItem('usuarioCadastrado', 'true');
                localStorage.setItem('Nome', data.nome);
                localStorage.setItem('Restricao', data.restricaoAlimentar);
                navigate('/menus');
            } else {
                // Login falhou
                setMensagem(data.mensagem || 'E-mail ou senha incorretos.');
            }
        } catch (error) {
            console.error('Erro ao fazer login:', error);
            setMensagem('Erro ao fazer login. Tente novamente.');
        } finally {
            setCarregando(false);
        }
    };

    return (
        <div className="container">
            <h1>Login</h1>
            <div className="logocard">
                <img src={logo} className="logo" width={150} alt="logo" />
                <img src={engrenagem} className="logo" width={150} alt="logo" />
            </div>

            <form onSubmit={handleLogin}>
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
                <button type="submit" disabled={carregando}>
                    {carregando ? 'Carregando...' : 'Entrar'}
                </button>
                {mensagem && <div className="mensagem">{mensagem}</div>}
            </form>
            <p>
                Não tem uma conta? <a href="cadastro" >Cadastre-se </a> 
            </p>
        </div>
    );
}

export default Login;