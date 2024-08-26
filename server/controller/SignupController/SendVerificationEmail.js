import nodemailer from "nodemailer";

const sendVerificationEmail = (email, subject, text) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "ferilcrosshurdle@gmail.com",
      pass: "ntjlgqizfbebdshd",
    },
  });

  const mailOptions = {
    from: "ferilcrosshurdle@gmail.com",
    to: email,
    subject: subject,
    text: text,
    // html: `Please click the following link to verify your email: <a href="http://localhost:3000/${user._id}/${token.token}">Verify Email</a>`
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Fsfdsdfsdf");
      console.log("Email sent: " + info.response);
    }
  });
};

export default sendVerificationEmail;
