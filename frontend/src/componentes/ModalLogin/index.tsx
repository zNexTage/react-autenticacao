import { AbBotao, AbCampoTexto, AbModal } from "ds-alurabooks";
import '../ModalCadastroUsuario/ModalCadastroUsuario.css';
import imagemPrincipal from '../ModalCadastroUsuario/assets/login.png'
import { useState } from "react";
import axios from "axios";
import useUserSession from "../../hooks/useUserSession";

interface IProps {
    isOpen: boolean;
    onClose: () => void;
}

const ModalLogin = ({ isOpen, onClose }: IProps) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { saveToken } = useUserSession();

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const user = {
            email,
            password
        };

        try {
            const response = await axios.post('http://localhost:8000/public/login', user);

            const token = response.data['access_token'];

            saveToken(token);

            setEmail('');
            setPassword('');

            onClose();
        }
        catch (e: any) {
            if (e?.response?.data?.message) {
                alert(e?.response?.data?.message);
            }
            else {
                alert('Aconteceu um erro inesperado ao efetuar o login! Entre em contato com o suporte');
            }

            console.log(e);
        }
    }

    return (
        <AbModal
            titulo="Login"
            aberta={isOpen}
            aoFechar={onClose}
        >
            <section className="corpoModalCadastro">
                <figure>
                    <img src={imagemPrincipal} alt="Pessoa segurando uma chave na frente de uma tela de computador que está exibindo uma fechadura" />
                </figure>
                <form onSubmit={onSubmit}>
                    <AbCampoTexto
                        label="Email"
                        value={email}
                        onChange={setEmail}
                        type="email"
                    />
                    <br />

                    <AbCampoTexto
                        label="Senha"
                        value={password}
                        onChange={setPassword}
                        type="password"
                    />
                    <div className="acoes">
                        <AbBotao texto="Fazer login" />
                    </div>
                </form>
                <hr />
            </section>

        </AbModal>
    )
}

export default ModalLogin;