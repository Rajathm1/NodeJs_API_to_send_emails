// Code to obtain a Gmail user's credentials using OAuth 2.0. 
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;


const oauth2Client = new OAuth2(
     "1069745389480-ptglqmdp168fnod1ss6crq0pac0oar3i.apps.googleusercontent.com", // this is the ClientID
     "d__qYjB10VHdTHBSuIPMXbFb", // this is the Client Secret 
     "https://developers.google.com/oauthplayground" // this is the Redirect URL
);

// The OAuth 2.0 process is initiated by an API call to the server.
oauth2Client.setCredentials({
     refresh_token: "1//04mhCqzpTxeemCgYIARAAGAQSNwF-L9Ir4q7QehvOrUapux8sim3uRjsdVveU0IrWt2FRbOFF3d8iBJSUvtUNJJEuOU0sWnVpBN8" // this is the refresh token
});
const accessToken = oauth2Client.getAccessToken()


const smtpTransport = nodemailer.createTransport({
     service: "gmail",
     auth: {
          type: "OAuth2",
          user: "xyz@gmail.com", // enter the users gmail id here
          clientId: "1069745389480-ptglqmdp168fnod1ss6crq0pac0oar3i.apps.googleusercontent.com", // this is the ClientID
          clientSecret: "d__qYjB10VHdTHBSuIPMXbFb", // this is the Client Secret
          refreshToken: "1//04mhCqzpTxeemCgYIARAAGAQSNwF-L9Ir4q7QehvOrUapux8sim3uRjsdVveU0IrWt2FRbOFF3d8iBJSUvtUNJJEuOU0sWnVpBN8", // this is the refresh token
          accessToken: accessToken
     }
});


tls: {
  rejectUnauthorized: false
}


const mailOptions = {
     from: "xyz@gmail.com",
     to: "abc@gmail.com",
     subject: "Node.js Email with Secure OAuth",
     generateTextFromHTML: true,
     html: "<b>We have Successfully executed the given task !!!</b>" // html embedding used to display a message to the user through the body of the mail
};



smtpTransport.sendMail(mailOptions, (error, response) => {
     error ? console.log(error) : console.log(response);
     smtpTransport.close();
});





