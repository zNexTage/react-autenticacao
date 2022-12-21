import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import useUserSession from "../../hooks/useUserSession"
import BotaoNavegacao from "../BotaoNavegacao"
import ModalCadastroUsuario from "../ModalCadastroUsuario"
import ModalLogin from "../ModalLogin"
import logo from './assets/logo.png'
import usuario from './assets/usuario.svg'
import './BarraNavegacao.css'

const BarraNavegacao = () => {
    const [isModalRegisterOpen, setIsModalRegisterOpen] = useState(false);
    const [isModalLogin, setIsModalLogin] = useState(false);

    const { getToken, deleteToken } = useUserSession();

    const [isAutenticate, setIsAutenticate] = useState<boolean>(getToken() != null);

    const navigate = useNavigate();

    const logout = () => {
        deleteToken(); //Remove token from session
        setIsAutenticate(false);

        navigate('/'); //Redirects to the home page
    }


    return (<nav className="ab-navbar">
        <h1 className="logo">
            <Link to="/">
                <img className="logo" src={logo} alt="Logo da AluraBooks" />
            </Link>
        </h1>
        <ul className="navegacao">
            <li>
                <a href="#!">Categorias</a>
                <ul className="submenu">
                    <li>
                        <Link to="/">
                            Frontend
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            Programação
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            Infraestrutura
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            Business
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            Design e UX
                        </Link>
                    </li>
                </ul>
            </li>
        </ul>
        <ul className="acoes">
            {
                !isAutenticate &&
                <>
                    <li>
                        <BotaoNavegacao
                            onClick={() => setIsModalLogin(true)}
                            texto="Login"
                            textoAltSrc="Icone representando um usuário"
                            imagemSrc={usuario} />
                    </li>
                    <li>
                        <BotaoNavegacao
                            texto="Cadastrar-se"
                            textoAltSrc="Icone representando um usuário"
                            imagemSrc={usuario}
                            onClick={() => setIsModalRegisterOpen(true)}
                        />
                        <ModalCadastroUsuario
                            onClose={() => setIsModalRegisterOpen(false)}
                            isOpen={isModalRegisterOpen} />
                        <ModalLogin
                            onLogin={() => {
                                setIsModalLogin(false);
                                setIsAutenticate(true);
                            }}
                            isOpen={isModalLogin}
                            onClose={() => setIsModalLogin(false)}
                        />
                    </li>
                </>
            }
            {
                isAutenticate &&
                <>
                    <li>
                        <Link to="/minha-conta/pedidos">
                            Minha conta
                        </Link>
                    </li>
                    <li>
                        <BotaoNavegacao
                            texto="Logout"
                            imagemSrc={usuario}
                            textoAltSrc="Ícone representando um usuário"
                            onClick={logout}
                        />
                    </li>
                </>
            }
        </ul>
    </nav>)
}

export default BarraNavegacao