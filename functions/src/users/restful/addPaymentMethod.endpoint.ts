import {Endpoint, RequestType} from "firebase-backend";

export default new Endpoint(
    'addPaymentMethod',
    RequestType.POST,
    (request: Request, response: Response) => {
        // @ts-ignore
        const cardNumber = request.body['card_number'];
        // @ts-ignore
        const cardHolder = request.body['card_holder'];

        const paymentToken = `${cardNumber}_${cardHolder}`;

        // @ts-ignore
        return response.status(201).send({
            token: paymentToken
        });
    }
)
