import * as sgMail from '@sendgrid/mail';

const SENDGRID_API_KEY = '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';

sgMail.setApiKey(SENDGRID_API_KEY);

export async function POST(req: any) {
  try {
    const { to, from, subject, text, html } = await req.json();

    console.log(to, from, subject, text, html);

    const msg = {
      to: `5eregapelekh@gmail.com`, // Change to your recipient
      from: `agrofilming@gmail.com`, // Change to your verified sender
      subject: 'This is a simple message',
      text: 'which contains some text',
      html: '<strong>and some html</strong>',
    };

    await sgMail.send(msg);

    return Response.json({ message: 'Email sent' });
  } catch (error) {
    console.error(error);

    return Response.json({ error: 'Error sent' });
  }
}
