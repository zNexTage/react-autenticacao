import { AbBotao } from "ds-alurabooks";
import style from "./style.module.css";

import axios from 'axios';
import { useEffect } from "react";
import useUserSession from "../../hooks/useUserSession";
import OrderDTO from "../../dto/OrderDto";

const Order = () => {

    const { getToken } = useUserSession();

    const myOrders = async () => {
        const token = getToken();

        try {
            const response = await axios.get<Array<OrderDTO>>('http://localhost:8000/pedidos', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            console.log(response.data);
        }
        catch (err) {
            alert('Ops... não foi possível obter os seus pedidos.');
        }
    }

    useEffect(() => {
        myOrders();
    }, []);

    return (
        <section className={style.OrderContainer}>
            <h1>
                Meus pedidos
            </h1>
            <div >
                <ul>
                    <li className={style.Order}>
                        <div>
                            <p>Pedido: <strong>124567</strong></p>
                            <p>Data do pedido: <strong>17/12/2022</strong></p>
                            <p>Valor total: <strong>R$ 42.00</strong></p>
                            <p>Entrega realizada em: <strong>18/12/2022</strong></p>
                        </div>
                        <AbBotao texto="Detalhes" />
                    </li>
                    <li className={style.Order}>
                        <div>
                            <p>Pedido: <strong>124567</strong></p>
                            <p>Data do pedido: <strong>17/12/2022</strong></p>
                            <p>Valor total: <strong>R$ 42.00</strong></p>
                            <p>Entrega realizada em: <strong>18/12/2022</strong></p>
                        </div>
                        <AbBotao texto="Detalhes" />
                    </li>
                    <li className={style.Order}>
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

export default Order;