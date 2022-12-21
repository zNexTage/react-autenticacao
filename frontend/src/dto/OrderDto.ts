import IOrder from "../interfaces/IOrder";

class OrderDTO {
    private id: number;
    private data: string;
    private entrega: string;
    private total: number;

    constructor(id: number, data: string, entrega: string, total: number) {
        this.id = id;
        this.data = data;
        this.entrega = entrega;
        this.total = total;
    }

    public static createOrder(orderDto: OrderDTO): IOrder {
        return {
            id: orderDto.id,
            deliveryDate: new Date(orderDto.entrega),
            date: new Date(orderDto.data),
            total: orderDto.total
        }
    }

}

export default OrderDTO;