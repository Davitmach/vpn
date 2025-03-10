// app/api/createPayment/route.js
import axios from 'axios';
import { NextResponse } from 'next/server';

export async function POST(request:any) {
  try {
    // Получаем данные из запроса
    const { firstName, lastName, phone, address, comment, amount, items, email } = await request.json();

    // Проверка обязательных полей
    if (!firstName || !lastName || !phone || !address || !amount) {
      return NextResponse.json(
        { error: 'Необходимы все поля: firstName, lastName, phone, address, comment, amount' },
        { status: 400 }
      );
    }

    // Данные для платежа
    const authorization = Buffer.from(`1047449:live_l1m3jTDd-BAnpcmXlDThnE8i-9AX3b0Uw7zCCqOiAhk`).toString('base64');
    const idempotenceKey = 'some-unique-key-' + new Date().getTime();

    const paymentData = {
      amount: {
        value: amount.toString(),
        currency: 'RUB',
      },
      payment_method_data: {
        "type": "bank_card"
      },
      confirmation: {
        type: 'redirect',
        return_url: 'https://next-pizza-bay.vercel.app', // URL, куда пользователь будет перенаправлен после успешной оплаты
      },
      description: `Заказ от ${firstName} ${lastName}: ${comment}`,
     
    };

    // Отправляем запрос на API YooKassa
    const response = await axios.post('https://api.yookassa.ru/v3/payments', paymentData, {
      headers: {
        Authorization: `Basic ${authorization}`,
        'Idempotence-Key': idempotenceKey,
        'Content-Type': 'application/json',
      },
    });

    // Ответ на успешный запрос
    return NextResponse.json({
      paymentId: response.data.id,
      confirmationUrl: response.data.confirmation.confirmation_url,
      data: response.data,
    });

  } catch (error) {
    console.error('Ошибка при создании платежа:', error);
    // Возвращаем ошибку, если что-то пошло не так
    return NextResponse.json(
      { error: 'Ошибка при создании платежа', details: error},
      { status: 500 }
    );
  }
}
