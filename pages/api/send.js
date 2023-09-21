// import { EmailTemplate } from '../../components/EmailTemplate';
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export default async (req, res) => {
  const { body } = await req.json();
  const {email, subject, message } = body;
  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: ["isaacodey211@gmail.com"],
      subject: "Hello world",
      react: (
        <>
        <p>{message}</p>
        <h1>{subject}</h1>
        <p>Thank you for contacting us!</p>
        <p>New message submit</p>
          <p>{message}</p>
        </>
      ),
    });

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
};
