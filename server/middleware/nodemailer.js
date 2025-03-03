const nodemailer=require("nodemailer");
const  transporter=nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:"rajmishra3@gmail.com",
        pass:"ngbq ieiu hhhp qxdh"
    }
})
transporter.verify((error,success)=>
{
    if(error){
        console.error('Error connecting to email service:', error);
    } else {
      console.log('Email service ready to send messages');
    }
})
module.exports=transporter;