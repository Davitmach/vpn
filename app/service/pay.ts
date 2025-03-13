import axios from "axios";
interface Props {
    description: string;
    orderId: number;
    amount: number;
  }
  
export async function createPayment(details: Props) {
    const authorization = Buffer.from(
        `1047449:live_l1m3jTDd-BAnpcmXlDThnE8i-9AX3b0Uw7zCCqOiAhk`
      ).toString("base64");
    const { data } = await axios.post(
      'https://api.yookassa.ru/v3/payments',
      {
        amount: {
          value: details.amount.toString(),
          currency: 'RUB',
        },
        capture: true,
        description: details.description,
        metadata: {
          order_id: details.orderId,
        },
        confirmation: {
          type: 'redirect',
          return_url:'https://www.youtube.com/watch?v=GUwizGbY4cc&t=67755s',
        },
      },
      {
      
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Basic ${authorization}`,
          'Idempotence-Key': Math.random().toString(36).substring(7),
        },
      },
    );
  
    return data;
  }