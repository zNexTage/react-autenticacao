import { AbBotao } from "ds-alurabooks";
import style from "./style.module.css";

const Orderer = () => {
    return (
        <section className={style.OrdererContainer}>
            <h1>
                Meus pedidos
            </h1>
            <div >
                <ul>
                    <li className={style.Orderer}>
                        <div>
                            <p>Pedido: <strong>124567</strong></p>
                            <p>Data do pedido: <strong>17/12/2022</strong></p>
                            <p>Valor total: <strong>R$ 42.00</strong></p>
                            <p>Entrega realizada em: <strong>18/12/2022</strong></p>
                        </div>
                        <AbBotao texto="Detalhes" />
                    </li>
                    <li className={style.Orderer}>
                        <div>
                            <p>Pedido: <strong>124567</strong></p>
                            <p>Data do pedido: <strong>17/12/2022</strong></p>
                            <p>Valor total: <strong>R$ 42.00</strong></p>
                            <p>Entrega realizada em: <strong>18/12/2022</strong></p>
                        </div>
                        <AbBotao texto="Detalhes" />
                    </li>
                    <li className={style.Orderer}>
                        <div>
                            <p>Pedido: <strong>124567</strong></p>
                            <p>Data do pedido: <strong>17/12/2022</strong></p>
                            <p>Valor total: <strong>R$ 42.00</strong></p>
                            <p>Entrega realizada em: <strong>18/12/2022</strong></p>
                        </div>
                        <AbBotao texto="Detalhes" />
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Orderer;