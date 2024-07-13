import * as sgMail from '@sendgrid/mail';

sgMail.setApiKey(`${process.env.SENDGRID_API}`);

export async function POST(req: any) {
  try {
    const data = await req.json();

    const msg = {
      to: `producer@agrofilming.com`, // Change to your recipient
      from: `agrofilming@gmail.com`, // Change to your verified sender
      subject: `${data.clientName} залишив заявку на відео`,
      text: 'which contains some text',
      html:
        '<strong>Телефон: </strong> ' +
        data.phone +
        '<br><strong>Email: </strong> ' +
        data.email +
        "<br><strong>Ім'я: </strong> " +
        data.clientName +
        '<br><strong>Бюджет: </strong> ' +
        data.budget +
        '<br><strong>Звідки про нас дізнались: </strong>' +
        data.fromWhere +
        '<br><strong>Для чого Вам потрібно відео: </strong>' +
        data.videoPurpose.map((item: string) => `<i>${item} </i>`) +
        '<br><strong>Яка головна мета Вашого відео: </strong>' +
        data.videoGoal.map((item: string) => `<i>${item} </i>`) +
        '<br><strong>Яка тривалість відео: </strong>' +
        data.videoDuration.map((item: string) => `<i>${item} </i>`) +
        '<br><strong>Коли Ви бажаєте отримати готовий відеоролик: </strong>' +
        data.videoTime.map((item: string) => `<i>${item} </i>`) +
        '<br><strong>Потрібен сценарій для Вашого відео: </strong>' +
        data.videoScenario.map((item: string) => `<i>${item} </i>`),
    };

    await sgMail.send(msg);

    return Response.json({ message: 'Email sent' });
  } catch (error) {
    console.error(error);

    return Response.json({ error: 'Error sent' });
  }
}
