import IOrder from "../interfaces/IOrder";

class OrderDTO {
    public static createOrder(id: number, data: string, entrega: string, total: number): IOrder {
        return {
            id,
            deliveryDate: new Date(entrega),
            date: new Date(data),
            total
        }
    }

}

export default OrderDTO;