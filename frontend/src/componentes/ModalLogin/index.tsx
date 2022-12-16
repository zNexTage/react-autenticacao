import { AbBotao, AbCampoTexto, AbModal } from "ds-alurabooks";
import '../ModalCadastroUsuario/ModalCadastroUsuario.css';
import imagemPrincipal from '../ModalCadastroUsuario/assets/login.png'
import { useState } from "react";

interface IProps {
    isOpen: boolean;
    onClose: () => void;
}

const ModalLogin = ({ isOpen, onClose }: IProps) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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
                <form action="">
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