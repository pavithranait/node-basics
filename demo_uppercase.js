var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'pavithrankait@gmail.com',
    pass: 'ldlcejfvfbmjyuim'
  }
});

var mailOptions = {
  from: 'pavithrankait@gmail.com',
  to: 'pavithrank02@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});