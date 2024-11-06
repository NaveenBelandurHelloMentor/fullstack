const express = require('express');
const env = require('dotenv').config();
const StartDb = require('./database/db');
const Port = process.env.PORT || 3060;
const App = express();
const cors = require('cors');
const Routing = require('./routes/route')
var cron = require('node-cron');

StartDb();
App.use(express.json());
App.use(cors());
App.use('/', Routing);


cron.schedule('*/5 * * * * *', () => {
  console.log('task every minute') 
  const Testing = async ()=>{
    try {
        const FormateDate = new Date();
        const Month = (FormateDate.getMonth() + 1).toString().padStart(2, "0");
        const Year = FormateDate.getFullYear();
        const Day = FormateDate.getDate().toString().padStart(2, "0");
        const FormatedDateFinal = `${Year}-${Month}-${Day}`;
  
        const workanniversary = await User.aggregate([
          {
              $match:{
                  $or:[
                      {joining:FormatedDateFinal}
                  ]
              }
          }
        ])
       
  
  
        const birthday = await User.aggregate([
          {
              $match:{
                  $or:[
                      {birthday:FormatedDateFinal}
                  ]
              }
          }
        ])
  
       /* This email is for sending the WorkAnniversy */
      //  try{
      //     console.log('function running')
      //     const SendMail = await transporter.sendMail({
      //         from: 'belandurfsd2019@gmail.com', // sender address
      //         to: workanniversary.map((data)=>data.email), // list of receivers
      //         subject: "Hello ✔", // Subject line
      //         text: "Hello world?", // plain text body
      //         html: "<b>Hello world?</b>", // html body
      //       });
        
      //       if (SendMail) {
      //         console.log('Email sent');
      //         console.log("Message sent: %s", SendMail.messageId);
      //       }
      //   }
      //   catch(err){
      //     console.log(err)
      //   }
  
  
      /* This email is for sending the birthday */
       //  try{
      //     console.log('function running')
      //     const SendMail = await transporter.sendMail({
      //         from: 'belandurfsd2019@gmail.com', // sender address
      //         to: birthday.map((Data)=>data.email), // list of receivers
      //         subject: "Hello ✔", // Subject line
      //         text: "Hello world?", // plain text body
      //         html: "<b>Hello world?</b>", // html body
      //       });
        
      //       if (SendMail) {
      //         console.log('Email sent');
      //         console.log("Message sent: %s", SendMail.messageId);
      //       }
      //   }
      //   catch(err){
      //     console.log(err)
      //   }
  
      console.log('inside the controller')

  
  
  
      } catch (err) {
        throw new SendError(err.message);
      }



  }
  Testing()
});

App.listen(Port, () => {
    console.log(`Connected to the port ${Port}`);
});
