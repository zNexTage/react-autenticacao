import { AbBotao } from "ds-alurabooks";
import style from "./style.module.css";

import axios from 'axios';
import { useEffect, useState } from "react";
import useUserSession from "../../hooks/useUserSession";
import OrderDTO from "../../dto/OrderDto";
import IOrder from "../../interfaces/IOrder";
import numberFormat from "../../utils/format/number-format";

const Order = () => {

    const { getToken } = useUserSession();

    const [orders, setOrders] = useState<Array<IOrder>>([]);

    const myOrders = async () => {
        const token = getToken();

        try {
            const response = await axios.get<Array<OrderDTO>>('http://localhost:8000/pedidos', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            const orders: Array<IOrder> = [];

            // convert the response data to Order object and push to the list;
            for (const orderDto of response.data) {
                orders.push(OrderDTO.createOrder(orderDto));
            }

            setOrders([...orders]);
        }
        catch (err) {
            console.log(err);

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
                    {
                        orders.map(order => (
                            <li
                                className={style.Order}
                                key={order.id}>
                                <div>
                                    <p>
                                        Pedido:&nbsp;
                                        <strong>
                                            {order.id}
                                        </strong>
                                    </p>
                                    <p>
                                        Data do pedido:&nbsp;
                                        <strong>
                                            {order.date.toLocaleDateString()}
                                        </strong>
                                    </p>
                                    <p>Valor total:&nbsp;
                                        <strong>
                                            {numberFormat(order.total, {
                                                style: 'currency',
                                                currency: 'BRL'
                                            })}
                                        </strong>
                                    </p>
                                    <p>
                                        Entrega realizada em:&nbsp;
                                        <strong>
                                            {order.deliveryDate.toLocaleDateString()}
                                        </strong>
                                    </p>
                                </div>
                                <AbBotao texto="Detalhes" />
                            </li>
                        ))
                    }
                </ul>
            </div>
        </section>
    )
}

export default Order;