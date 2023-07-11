const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'bibi@gmail.com',
      pass: 'cdqygzrsxyfwiidl'
    },
    tls: {
        rejectUnauthorized: false
      }
  });

  const mailOptions = {
    from: 'bibi@gmail.com',
    to: 'trump@gmail.com',
    subject: 'Secret msg',
    text: 'rak bibi'
  };
  
  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
  