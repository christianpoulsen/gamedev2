const nodemailer = require("nodemailer");

exports.handler = async (event, context) => {
  try {
    const experience = event.queryStringParameters.experience ?? 0;
    const feedback = event.queryStringParameters.feedback;

    if (feedback) {

        // create reusable transporter object using the default SMTP transport
        const transporter = nodemailer.createTransport({
          host: "smtp.fastmail.com",
          port: 465,
          secure: true, // true for 465, false for other ports
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
          }
        });

        const message = `Experience: ${experience}\nFeedback: ${feedback}`;

        // send mail with defined transport object
        const info = await transporter.sendMail({
          from: '"Feedback" <gamedev@christianpoulsen.com>', // sender address
          to: "madsv@dtu.dk", // list of receivers
          subject: "Serious Entrepreneurship Game Feedback", // Subject line
          text: message, // plain text body
        });

        return {
          statusCode: 200,
          body: JSON.stringify(info),
        }

    }

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Empty feedback" })
    }
  } catch (err) {
    return { statusCode: 500, body: err.toString() }
  }
}
