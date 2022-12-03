import { AbBotao, AbCampoTexto, AbModal } from "ds-alurabooks"
import { useState } from "react"

import imagemPrincipal from './assets/login.png'

import './ModalCadastroUsuario.css'

const ModalCadastroUsuario = () => {
    
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [complement, setComplement] = useState('')
    const [zipCode, setZipCode] = useState('')
    const [password, setPassword] = useState('')
    const [confirmedPassword, setConfirmedPassword] = useState('')

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const user = {
            name,
            email,
            password,
            address,
            zipCode,
            complement
        }
        console.log(user)
        alert('Usuário foi cadastrado com sucesso!')
    }

    return (<AbModal
        titulo="Cadastrar"
        aberta={true}
        aoFechar={() => console.log('fecha ai')}
    >
        <section className="corpoModalCadastro">
            <figure>
                <img src={imagemPrincipal} alt="Pessoa segurando uma chave na frente de uma tela de computador que está exibindo uma fechadura" />
            </figure>
            <form onSubmit={onSubmit}>
                <AbCampoTexto
                    label="Nome"
                    value={name}
                    onChange={setName}
                />
                <AbCampoTexto
                    label="E-mail"
                    value={email}
                    onChange={setEmail}
                    type="email"
                />
                <AbCampoTexto
                    label="Endereço"
                    value={address}
                    onChange={setAddress}
                />
                <AbCampoTexto
                    label="Complemento"
                    value={complement}
                    onChange={setComplement}
                />
                <AbCampoTexto
                    label="CEP"
                    value={zipCode}
                    onChange={setZipCode}
                />
                <AbCampoTexto
                    label="Senha"
                    value={password}
                    onChange={setPassword}
                    type="password"
                />
                <AbCampoTexto
                    label="Confirmação da senha"
                    value={confirmedPassword}
                    onChange={setConfirmedPassword}
                    type="password"
                />
                <div className="acoes">
                    <AbBotao texto="Cadastrar" />
                </div>
            </form>
        </section>
    </AbModal>)
}

export default ModalCadastroUsuario