const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
console.log(process.env.SENDGRID_API_KEY);/* 
const msg = {
  to: "test@example.com", // Change to your recipient
  from: "test@example.com", // Change to your verified sender
  subject: "Sending with SendGrid is Fun",
  text: "and easy to do anywhere, even with Node.js",
  html: "<strong>and easy to do anywhere, even with Node.js</strong>",
}; */

export const sendEmail = async (
  to?: string,
  from?: string,
  subject: string = "untitled",
  text?: string,
  html?: string
) => {
    await sgMail.send({ to, from, subject, text, html })
        .then(() => { console.log("Email sent");
        })
        .catch((e: any) => console.error(e));
};
