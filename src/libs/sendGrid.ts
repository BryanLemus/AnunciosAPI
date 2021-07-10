const sgMail = require("@sendgrid/mail");
sgMail.setApiKey("SG." + process.env.SENDGRID);

export const sendEmail = async (
  to: string,
  from: string,
  subject: string = "untitled",
  text?: string,
  html?: string
) => {
  await sgMail
    .send({ to, from, subject, text, html })
    .then(() => {
      console.log("Email sent");
    })
    .catch((e: any) => console.error(e));
};
